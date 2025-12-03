import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo - just show success
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210', desc: 'Mon-Sat, 9AM-7PM' },
    { icon: Mail, label: 'Email', value: 'info@ctechnologies.in', href: 'mailto:info@ctechnologies.in', desc: 'We reply within 24h' },
    { icon: MapPin, label: 'Office', value: 'Vijayawada', href: '#', desc: 'Andhra Pradesh, India' },
    { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9AM - 7PM', href: '#', desc: 'Sunday: Closed' },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-slate-400 text-lg">
              Have questions about our services? Get in touch with C Technologies Smart Edge 
              for a free consultation in Vijayawada and nearby areas.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all group text-center"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-cyan-500/20">
                <info.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">{info.label}</h3>
              <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
              <p className="text-slate-500 text-sm">{info.desc}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center border border-cyan-500/20">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                  <p className="text-slate-500 text-sm">We'll get back to you soon</p>
                </div>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for contacting us. We'll respond shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Service Interested In *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="input-field"
                      >
                        <option value="">Select a service</option>
                        <option value="cctv">CCTV & Surveillance</option>
                        <option value="biometric">Biometric & Access Control</option>
                        <option value="doorphone">Video Door Phone</option>
                        <option value="automation">Home Automation</option>
                        <option value="gates">Automatic Gates</option>
                        <option value="alarm">Intrusion Alarm</option>
                        <option value="computer">Computer Hardware/Software</option>
                        <option value="projector">Projectors & Sound</option>
                        <option value="theatre">Home Theatre</option>
                        <option value="gps">GPS Tracker</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Map */}
            <div className="card p-2 overflow-hidden">
              <div className="aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122251.27648461858!2d80.5677289!3d16.5061743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </div>

            {/* Service Areas */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-white mb-4">Service Areas</h3>
              <ul className="space-y-2">
                {[
                  'Vijayawada City',
                  'Guntur',
                  'Tenali',
                  'Mangalagiri',
                  'Nearby Areas'
                ].map((area, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <MapPin size={14} className="text-cyan-500" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-2xl">
              <h4 className="text-white font-semibold mb-2">Quick Contact</h4>
              <p className="text-slate-400 text-sm mb-4">
                For immediate assistance, call us directly
              </p>
              <a href="tel:+919876543210" className="btn-primary w-full text-center text-sm py-2.5 flex items-center justify-center gap-2">
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
