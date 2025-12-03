import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowRight, Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    slug: 'ai-powered-security-cameras',
    title: 'The Rise of AI-Powered Security Cameras',
    excerpt: 'Discover how artificial intelligence is transforming home and business security with smart detection, facial recognition, and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    category: 'Technology',
    author: 'David Chen',
    date: 'Nov 15, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    slug: 'home-security-guide-2024',
    title: 'Complete Home Security Guide for 2024',
    excerpt: 'Everything you need to know about securing your home with modern CCTV systems, from choosing cameras to installation tips.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
    category: 'Guides',
    author: 'Sarah Martinez',
    date: 'Nov 10, 2024',
    readTime: '8 min read'
  },
  {
    id: 3,
    slug: 'ip-vs-analog-cameras',
    title: 'IP vs Analog Cameras: Which is Right for You?',
    excerpt: 'A comprehensive comparison of IP and analog camera systems to help you make the best choice for your security needs.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800',
    category: 'Guides',
    author: 'Michael Johnson',
    date: 'Nov 5, 2024',
    readTime: '6 min read'
  },
  {
    id: 4,
    slug: 'night-vision-technology',
    title: 'Understanding Night Vision Technology',
    excerpt: 'Learn about infrared, starlight, and color night vision technologies and how they enhance 24/7 surveillance capabilities.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    category: 'Technology',
    author: 'Emily Davis',
    date: 'Oct 28, 2024',
    readTime: '4 min read'
  },
  {
    id: 5,
    slug: 'retail-security-best-practices',
    title: 'Best Practices for Retail Store Security',
    excerpt: 'Essential tips for protecting your retail business from theft and improving customer safety with strategic camera placement.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    category: 'Business',
    author: 'David Chen',
    date: 'Oct 20, 2024',
    readTime: '7 min read'
  },
  {
    id: 6,
    slug: 'cloud-vs-local-storage',
    title: 'Cloud vs Local Storage: Pros and Cons',
    excerpt: 'Explore the advantages and disadvantages of cloud-based and local storage options for your surveillance footage.',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
    category: 'Technology',
    author: 'Sarah Martinez',
    date: 'Oct 15, 2024',
    readTime: '5 min read'
  }
]

const categories = ['All', 'Technology', 'Guides', 'Business', 'News']

function Blog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-slate-950 border-b border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Security Blog</h1>
            <p className="text-slate-400 text-lg mb-8">
              Expert insights, tips, and the latest news in surveillance technology
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12 py-4"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b border-slate-800/30 bg-slate-950/80 backdrop-blur-sm sticky top-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400">No articles found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 text-cyan-400 hover:text-cyan-300"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover-lift overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/20">
                        {post.category}
                      </span>
                      <span className="text-slate-500 text-sm flex items-center gap-1">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                      <div className="flex items-center gap-2 text-sm">
                        <User size={14} className="text-slate-500" />
                        <span className="text-slate-400">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar size={14} />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-500" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            <div className="relative px-8 py-16 md:px-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated on Security Trends
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter for the latest tips, product updates, and security insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 backdrop-blur-sm"
                />
                <button className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-white/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="border-t border-slate-800/30 py-6 bg-slate-950">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-600 text-sm">
            Demo website for representation purposes only. Blog content is illustrative.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
