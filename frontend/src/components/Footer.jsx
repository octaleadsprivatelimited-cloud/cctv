import { Link } from 'react-router-dom'
import { 
  Mail, Phone, MapPin, 
  Facebook, Instagram, Youtube, Twitter,
  Shield, Headphones, Award
} from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { label: 'CCTV & Surveillance', path: '/services' },
    { label: 'Biometric & Access Control', path: '/services' },
    { label: 'Video Door Phones', path: '/services' },
    { label: 'Home Automation', path: '/services' },
    { label: 'Automatic Gates', path: '/services' },
    { label: 'Intrusion Alarms', path: '/services' },
  ]

  const companyLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
  ]

  const features = [
    { icon: Shield, label: 'Quality Products', desc: 'Premium brands' },
    { icon: Headphones, label: 'Expert Support', desc: 'Dedicated service' },
    { icon: Award, label: 'Trusted Partner', desc: 'In Vijayawada' },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      {/* Features Bar */}
      <div className="border-b border-slate-800/30">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                  <feature.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">{feature.label}</p>
                  <p className="text-sm text-slate-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logo.png" 
                alt="Inzaus Technologies" 
                className="h-14 w-auto object-contain hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-cyan-400 italic mb-4">"Live Smartly"</p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for advanced security, automation, and smart living solutions in Vijayawada and nearby areas.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group">
                <Phone size={18} className="text-cyan-500 group-hover:scale-110 transition-transform" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@ctechnologies.in" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group">
                <Mail size={18} className="text-cyan-500 group-hover:scale-110 transition-transform" />
                <span>info@ctechnologies.in</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-cyan-500" />
                <span>Vijayawada, Andhra Pradesh<br />India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Get in Touch</h3>
            <p className="text-slate-400 text-sm mb-4">
              Need a smart solution for your home or business? Contact us for a free consultation.
            </p>
            <Link to="/contact" className="btn-primary w-full text-center text-sm py-2.5 mb-6 block">
              Request Quote
            </Link>
            <div className="flex items-center gap-2">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-sm">
                © {currentYear} C Technologies Smart Edge. All rights reserved.
              </p>
            </div>
            <div className="text-slate-600 text-sm">
              Vijayawada, Andhra Pradesh
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
