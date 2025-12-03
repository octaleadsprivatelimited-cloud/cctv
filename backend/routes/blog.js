const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const { protect, authorize, optionalAuth } = require('../middleware/auth');

// @route   GET /api/blog
// @desc    Get all published blog posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, tag, page = 1, limit = 10 } = req.query;

    const query = { isPublished: true };
    if (category) query.category = category;
    if (tag) query.tags = tag;

    const posts = await Blog.find(query)
      .sort({ publishedAt: -1 })
      .skip((parseInt(page) - 1) * parseInt(limit))
      .limit(parseInt(limit))
      .populate('author', 'firstName lastName')
      .select('-content');

    const total = await Blog.countDocuments(query);

    res.json({
      success: true,
      data: posts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/blog/recent
// @desc    Get recent blog posts
// @access  Public
router.get('/recent', async (req, res) => {
  try {
    const posts = await Blog.find({ isPublished: true })
      .sort({ publishedAt: -1 })
      .limit(5)
      .populate('author', 'firstName lastName')
      .select('title slug excerpt featuredImage publishedAt category');

    res.json({ success: true, data: posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/blog/categories
// @desc    Get blog categories with post counts
// @access  Public
router.get('/categories', async (req, res) => {
  try {
    const categories = await Blog.aggregate([
      { $match: { isPublished: true } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]);

    res.json({ success: true, data: categories });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/blog/:slug
// @desc    Get single blog post by slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug, isPublished: true })
      .populate('author', 'firstName lastName')
      .populate('comments.user', 'firstName lastName');

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    // Increment views
    post.views += 1;
    await post.save();

    res.json({ success: true, data: post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   POST /api/blog
// @desc    Create blog post
// @access  Private/Admin
router.post('/', protect, authorize('admin'), async (req, res) => {
  try {
    const post = await Blog.create({
      ...req.body,
      author: req.user._id,
      publishedAt: req.body.isPublished ? Date.now() : null
    });

    res.status(201).json({ success: true, data: post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   PUT /api/blog/:id
// @desc    Update blog post
// @access  Private/Admin
router.put('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    let post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    // Set publishedAt if publishing for first time
    if (req.body.isPublished && !post.isPublished) {
      req.body.publishedAt = Date.now();
    }

    post = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.json({ success: true, data: post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   DELETE /api/blog/:id
// @desc    Delete blog post
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const post = await Blog.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    res.json({ success: true, message: 'Post deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   POST /api/blog/:id/comments
// @desc    Add comment to blog post
// @access  Public
router.post('/:id/comments', optionalAuth, async (req, res) => {
  try {
    const { name, email, comment } = req.body;

    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    const newComment = {
      user: req.user ? req.user._id : null,
      name: req.user ? `${req.user.firstName} ${req.user.lastName}` : name,
      email: req.user ? req.user.email : email,
      comment,
      isApproved: req.user ? true : false // Auto-approve for logged in users
    };

    post.comments.push(newComment);
    await post.save();

    res.status(201).json({ 
      success: true, 
      message: req.user ? 'Comment added' : 'Comment submitted for approval' 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;

