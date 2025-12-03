import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Shield, Camera, Wifi, Award, Users, 
  CheckCircle2, ChevronRight, Star, Zap, Eye, Settings,
  Building2, Home as HomeIcon, Store, Phone, Fingerprint,
  DoorOpen, Cpu, Volume2, Monitor, MapPin, Lock, Radio
} from 'lucide-react'

function Home() {
  const stats = [
    { value: '500+', label: 'Installations', icon: CheckCircle2 },
    { value: '10+', label: 'Expert Team', icon: Users },
    { value: '5+', label: 'Years Experience', icon: Award },
    { value: '100%', label: 'Satisfaction', icon: Star },
  ]

  const services = [
    { icon: Camera, title: 'CCTV & Surveillance', desc: 'Advanced security camera systems for complete monitoring', gradient: 'from-cyan-500 to-blue-600' },
    { icon: Fingerprint, title: 'Biometric & Access Control', desc: 'Secure entry systems with fingerprint & card access', gradient: 'from-violet-500 to-purple-600' },
    { icon: DoorOpen, title: 'Video Door Phones', desc: 'Smart intercom systems for homes and offices', gradient: 'from-emerald-500 to-teal-600' },
    { icon: Cpu, title: 'Home Automation', desc: 'Smart lighting, curtains, and appliance control', gradient: 'from-amber-500 to-orange-600' },
    { icon: Settings, title: 'Automatic Sliding Gates', desc: 'Motorized gates with remote access control', gradient: 'from-rose-500 to-pink-600' },
    { icon: Radio, title: 'Intrusion Alarm Systems', desc: 'Motion sensors and perimeter security alerts', gradient: 'from-indigo-500 to-blue-600' },
    { icon: Monitor, title: 'Computer Hardware & Software', desc: 'IT solutions, networking, and system setup', gradient: 'from-sky-500 to-cyan-600' },
    { icon: Volume2, title: 'Projectors & Sound Systems', desc: 'Home theatres and audio-visual setups', gradient: 'from-fuchsia-500 to-purple-600' },
  ]

  const solutions = [
    { icon: HomeIcon, title: 'Home Security', desc: 'Protect your family with smart surveillance and automation systems' },
    { icon: Building2, title: 'Office Solutions', desc: 'Access control, CCTV, and smart systems for your workplace' },
    { icon: Store, title: 'Retail & Commercial', desc: 'Complete security and automation for shops and businesses' },
  ]

  const products = [
    {
      name: 'HD Dome Camera',
      brand: 'Surveillance',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800',
      features: ['Full HD', 'Night Vision', 'Wide Angle']
    },
    {
      name: 'Biometric Attendance',
      brand: 'Access Control',
      image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800',
      features: ['Fingerprint', 'Face ID', 'Card Access']
    },
    {
      name: 'Smart Door Lock',
      brand: 'Home Automation',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      features: ['App Control', 'PIN Code', 'Auto Lock']
    },
    {
      name: 'Video Door Phone',
      brand: 'Intercom',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
      features: ['HD Display', 'Two-Way Audio', 'Night Vision']
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center noise-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950" />
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
        
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-3xl backdrop-blur-sm border border-cyan-500/20 hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-2xl backdrop-blur-sm border border-emerald-500/20 hidden lg:block"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
              >
                <MapPin size={16} />
                Serving Vijayawada & Nearby Areas
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Smart Security &
                <span className="block gradient-text">Automation Solutions</span>
              </h1>
              
              <p className="text-xl text-cyan-400 italic mb-4">"Live Smartly"</p>
              
              <p className="text-lg text-slate-400 mb-8 max-w-xl">
                C Technologies Smart Edge provides advanced CCTV, biometric access control, 
                home automation, and smart living solutions for homes and businesses.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/services" className="btn-primary flex items-center gap-2">
                  Our Services
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn-secondary flex items-center gap-2">
                  <Phone size={20} />
                  Contact Us
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-slate-500 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-transparent to-emerald-500/20 rounded-3xl blur-2xl" />
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800"
                  alt="Smart Security"
                  className="relative rounded-3xl shadow-2xl border border-slate-700/50"
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Smart Security</p>
                      <p className="text-slate-400 text-sm">24/7 Protection</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -top-6 -right-6 glass-effect p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Home Automation</p>
                      <p className="text-slate-400 text-sm">Smart Living</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 radial-gradient-bg" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Complete security and automation solutions for modern living</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to="/services"
                  className="group block p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 h-full"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <h2 className="section-title">Featured Products</h2>
              <p className="text-slate-400 mt-2">Quality equipment for your security needs</p>
            </div>
            <Link to="/products" className="btn-secondary hidden md:flex items-center gap-2">
              View All
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-4 group hover-lift"
              >
                <div className="aspect-square bg-slate-800/50 rounded-xl overflow-hidden mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-cyan-400 font-medium uppercase tracking-wider mb-1">
                  {product.brand}
                </p>
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-800/80 text-slate-400 rounded-lg">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium group"
                >
                  Get Quote
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/products" className="btn-secondary inline-flex items-center gap-2">
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Solutions For Every Need</h2>
            <p className="section-subtitle">Tailored security and automation for homes and businesses</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-800/30 to-slate-900/30 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20">
                    <solution.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-400 mb-6">{solution.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-emerald-500" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative px-8 py-20 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Live Smartly?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                Get a free consultation for your security and automation needs. 
                Our experts in Vijayawada are ready to help you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg">
                  Request Free Quote
                </Link>
                <a href="tel:+919876543210" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2">
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Trusted by homes and businesses in Vijayawada</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Business Owner',
                content: 'Excellent CCTV installation for our showroom. The team was professional and the system works flawlessly. Highly recommend C Technologies!',
                rating: 5
              },
              {
                name: 'Priya Sharma',
                role: 'Homeowner',
                content: 'Installed home automation and video door phone. Now I can control everything from my phone. Great service and support!',
                rating: 5
              },
              {
                name: 'Venkat Rao',
                role: 'Office Manager',
                content: 'Biometric access control has made our office security so much better. The team understood our needs and delivered perfectly.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-300 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
