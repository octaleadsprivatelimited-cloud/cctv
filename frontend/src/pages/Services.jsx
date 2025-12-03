import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Camera, Fingerprint, DoorOpen, Cpu, Settings, Radio,
  Monitor, Volume2, MapPin, Car, Film, Navigation,
  CheckCircle2, ArrowRight, Phone, Shield, Headphones
} from 'lucide-react'

function Services() {
  const services = [
    {
      icon: Camera,
      title: 'CCTV & Surveillance Systems',
      desc: 'Advanced security camera systems for homes, offices, and commercial spaces. We provide HD, Full HD, and 4K camera solutions with remote viewing capabilities.',
      features: ['IP & Analog Cameras', 'DVR/NVR Systems', 'Remote Monitoring', 'Night Vision', 'Motion Detection', 'Cloud Storage'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Fingerprint,
      title: 'Biometric & Access Control',
      desc: 'Secure your premises with fingerprint, face recognition, and card-based access control systems. Perfect for offices, factories, and residential complexes.',
      features: ['Fingerprint Scanners', 'Face Recognition', 'RFID Card Access', 'Attendance Systems', 'Visitor Management', 'Multi-door Control'],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      icon: DoorOpen,
      title: 'Video Door Phones & Intercoms',
      desc: 'Smart video door phones and intercom systems for secure communication. See and speak with visitors before opening your door.',
      features: ['HD Video Display', 'Two-Way Audio', 'Night Vision', 'Mobile App Integration', 'Multiple Indoor Units', 'Electric Lock Control'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Cpu,
      title: 'Home Automation',
      desc: 'Transform your home into a smart home with automated lighting, curtains, AC control, and more. Control everything from your smartphone.',
      features: ['Smart Lighting', 'Motorized Curtains', 'AC/Appliance Control', 'Voice Commands', 'Scene Settings', 'Energy Monitoring'],
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      icon: Settings,
      title: 'Automatic Sliding Gates',
      desc: 'Motorized sliding and swing gates with remote control access. Enhance security and convenience for your property entrance.',
      features: ['Sliding Gates', 'Swing Gates', 'Remote Control', 'Sensor Safety', 'Backup Battery', 'Intercom Integration'],
      gradient: 'from-rose-500 to-pink-600'
    },
    {
      icon: Radio,
      title: 'Intrusion Alarm Systems',
      desc: 'Protect your property with advanced alarm systems featuring motion sensors, door/window sensors, and instant alerts.',
      features: ['Motion Sensors', 'Door/Window Sensors', 'Siren & Strobe', 'Mobile Alerts', 'Zone Control', '24/7 Monitoring'],
      gradient: 'from-red-500 to-rose-600'
    },
    {
      icon: Monitor,
      title: 'Computer Hardware & Software',
      desc: 'Complete IT solutions including computer sales, networking, software installation, and technical support for homes and businesses.',
      features: ['PC/Laptop Sales', 'Network Setup', 'Software Installation', 'Hardware Repair', 'Data Recovery', 'AMC Services'],
      gradient: 'from-sky-500 to-cyan-600'
    },
    {
      icon: Volume2,
      title: 'Projectors & Sound Systems',
      desc: 'High-quality projectors and sound systems for presentations, home entertainment, and commercial use.',
      features: ['HD/4K Projectors', 'Surround Sound', 'PA Systems', 'Conference Setup', 'Installation', 'Maintenance'],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Film,
      title: 'Private Home Theatres',
      desc: 'Custom home theatre design and installation with premium audio-visual equipment for the ultimate entertainment experience.',
      features: ['4K Projection', 'Dolby Atmos Sound', 'Acoustic Treatment', 'Smart Control', 'Seating Design', 'Ambient Lighting'],
      gradient: 'from-fuchsia-500 to-purple-600'
    },
    {
      icon: Navigation,
      title: 'GPS Trackers',
      desc: 'Real-time vehicle tracking solutions for fleet management, personal vehicles, and asset tracking with mobile app support.',
      features: ['Real-time Tracking', 'Mobile App', 'Geo-fencing', 'History Playback', 'Speed Alerts', 'Fuel Monitoring'],
      gradient: 'from-green-500 to-emerald-600'
    }
  ]

  const stats = [
    { icon: Camera, value: '500+', label: 'Installations' },
    { icon: Shield, value: '100%', label: 'Satisfaction' },
    { icon: Headphones, value: '24/7', label: 'Support' },
    { icon: MapPin, value: 'Local', label: 'Vijayawada' }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-slate-950 border-b border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-slate-400 text-lg">
              Complete security, automation, and smart technology solutions 
              for homes and businesses in Vijayawada and nearby areas.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-slate-800/30">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-cyan-500/20">
                  <stat.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card p-8 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-950/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">Simple process from consultation to installation</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your requirements' },
              { step: '02', title: 'Site Survey', desc: 'Assess your property' },
              { step: '03', title: 'Proposal', desc: 'Custom solution & quote' },
              { step: '04', title: 'Installation', desc: 'Professional setup' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-cyan-500/30 transition-all text-center group">
                  <span className="text-4xl font-bold gradient-text mb-2 block">{item.step}</span>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-slate-700" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative px-8 py-16 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need a Smart Solution?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation. Our team in Vijayawada 
                is ready to help you with your security and automation needs.
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
    </div>
  )
}

export default Services
