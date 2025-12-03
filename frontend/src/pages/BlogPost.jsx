import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'

const samplePost = {
  title: 'Top 10 CCTV Security Tips for Your Home',
  excerpt: 'Learn the top 10 essential tips for maximizing your home security with CCTV cameras.',
  category: 'Tips',
  author: 'Security Expert',
  date: 'January 15, 2024',
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  content: `
    <h2>Introduction</h2>
    <p>Securing your home with CCTV cameras is one of the most effective ways to protect your family and property. Here are our top 10 tips for maximizing your home security system.</p>

    <h2>1. Strategic Camera Placement</h2>
    <p>Position cameras at all entry points including front and back doors, garage, and first-floor windows. Ensure cameras are placed high enough to avoid tampering but at an angle that captures faces clearly.</p>

    <h2>2. Don't Forget Interior Cameras</h2>
    <p>While exterior cameras are essential, interior cameras provide an additional layer of security. Place them in high-traffic areas like living rooms and hallways.</p>

    <h2>3. Ensure Proper Lighting</h2>
    <p>Good lighting is crucial for quality footage. Consider cameras with built-in IR for night vision, or install motion-activated lights around your property.</p>

    <h2>4. Regular Maintenance</h2>
    <p>Check your cameras monthly to ensure they're working properly. Clean lenses, verify recording functionality, and update firmware regularly.</p>

    <h2>5. Secure Your Recordings</h2>
    <p>Use encrypted storage solutions and strong passwords. Consider cloud backup for important footage.</p>

    <h2>6. Visible Deterrence</h2>
    <p>Make sure some cameras are visible to deter potential intruders. The presence of cameras alone can prevent many crimes.</p>

    <h2>7. Monitor Blind Spots</h2>
    <p>Walk around your property and identify any areas not covered by cameras. Adjust or add cameras as needed.</p>

    <h2>8. Quality Over Quantity</h2>
    <p>Invest in fewer high-quality cameras rather than many low-resolution ones. Clear footage is essential for identification.</p>

    <h2>9. Professional Installation</h2>
    <p>Consider professional installation to ensure optimal placement and proper configuration of your system.</p>

    <h2>10. Remote Monitoring</h2>
    <p>Set up mobile alerts and remote viewing so you can check on your home anytime, anywhere.</p>

    <h2>Conclusion</h2>
    <p>By following these tips, you can significantly enhance your home security and peace of mind. Remember, a well-planned CCTV system is your first line of defense against intruders.</p>
  `
}

function BlogPost() {
  return (
    <div className="min-h-screen bg-secondary-900/30">
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-secondary-400 hover:text-primary-400 mb-8">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 text-sm text-secondary-400 mb-4">
              <span className="flex items-center gap-1 capitalize px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full">
                <Tag size={14} />
                {samplePost.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {samplePost.date}
              </span>
              <span className="flex items-center gap-1">
                <User size={14} />
                {samplePost.author}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {samplePost.title}
            </h1>

            <p className="text-xl text-secondary-400">{samplePost.excerpt}</p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="aspect-video rounded-2xl overflow-hidden mb-12"
          >
            <img
              src={samplePost.image}
              alt={samplePost.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div 
              className="text-secondary-300 leading-relaxed [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4"
              dangerouslySetInnerHTML={{ __html: samplePost.content }}
            />
          </motion.div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-secondary-800">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-secondary-400 flex items-center gap-2">
                <Share2 size={18} />
                Share this article
              </span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-secondary-800 hover:bg-[#1877f2] rounded-lg flex items-center justify-center text-secondary-400 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-800 hover:bg-[#1da1f2] rounded-lg flex items-center justify-center text-secondary-400 hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-800 hover:bg-[#0077b5] rounded-lg flex items-center justify-center text-secondary-400 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Related Posts CTA */}
          <div className="mt-12 p-6 bg-secondary-800/50 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">Want to learn more?</h3>
            <p className="text-secondary-400 mb-4">Check out our other articles for more security tips and guides.</p>
            <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
              View All Articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
