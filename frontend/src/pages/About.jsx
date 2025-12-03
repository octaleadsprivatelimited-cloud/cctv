import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Shield, Award, Users, Target, 
  CheckCircle2, ArrowRight, Cpu, 
  Zap, Heart, MapPin, Phone
} from 'lucide-react'

function About() {
  const values = [
    { icon: Shield, title: 'Quality First', desc: 'We only offer products from trusted brands that meet high standards' },
    { icon: Heart, title: 'Customer Focus', desc: 'Building lasting relationships through exceptional service' },
    { icon: Zap, title: 'Innovation', desc: 'Staying ahead with the latest smart technology solutions' },
    { icon: Target, title: 'Precision', desc: 'Attention to detail in every installation we perform' },
  ]

  const services = [
    'CCTV & Surveillance Systems',
    'Biometric & Access Control',
    'Video Door Phones & Intercoms',
    'Home Automation',
    'Automatic Sliding Gates',
    'Intrusion Alarm Systems',
    'Computer Hardware & Software',
    'Projectors & Sound Systems',
    'Private Home Theatres',
    'GPS Trackers'
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-slate-950 border-b border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-slate-400 text-lg">
              Your trusted partner for smart security and automation solutions in Vijayawada
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">C <span className="text-cyan-400">Technologies</span></span>
                  <span className="block text-sm text-slate-500">Smart Edge</span>
                </div>
              </div>
              
              <p className="text-xl text-cyan-400 italic mb-6">"Live Smartly"</p>
              
              <p className="text-slate-400 mb-6">
                C Technologies Smart Edge is a leading provider of advanced security, automation, 
                and smart living solutions in Vijayawada and nearby areas. We specialize in 
                surveillance systems, automated access control, and smart home/office technology.
              </p>
              <p className="text-slate-400 mb-8">
                Our mission is to help homes and businesses embrace smart technology for enhanced 
                security, convenience, and modern living. We partner with trusted global brands 
                to deliver reliable solutions backed by professional installation and support.
              </p>
              
              <div className="flex items-center gap-8 mb-8">
                <div>
                  <p className="text-3xl font-bold gradient-text">500+</p>
                  <p className="text-slate-500">Installations</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">5+</p>
                  <p className="text-slate-500">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">100%</p>
                  <p className="text-slate-500">Satisfaction</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-500" size={20} />
                <span className="text-slate-400">Serving Vijayawada & Nearby Areas</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt="Our Team"
                className="relative rounded-2xl shadow-2xl border border-slate-700/50"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Complete range of smart solutions for modern living</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-slate-300">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 transition-all group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-cyan-500/20">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800"
                alt="Professional Installation"
                className="relative rounded-2xl shadow-2xl border border-slate-700/50"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose C Technologies?
              </h2>
              
              <div className="space-y-4">
                {[
                  'Professional installation by trained technicians',
                  'Quality products from trusted global brands',
                  'Dedicated after-sales support and service',
                  'Competitive pricing with transparent quotes',
                  'Local presence in Vijayawada for quick response',
                  'End-to-end solutions from consultation to maintenance'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{point}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-emerald-500" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            <div className="relative px-8 py-16 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Live Smartly?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Get in touch with us for a free consultation. Let us help you find 
                the perfect smart solution for your home or business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg">
                  Get Free Quote
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
    </div>
  )
}

export default About
