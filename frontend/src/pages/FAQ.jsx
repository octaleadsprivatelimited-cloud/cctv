import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, MessageCircle, Phone } from 'lucide-react'

const faqData = [
  {
    category: 'CCTV & Surveillance',
    questions: [
      {
        q: 'What types of CCTV cameras do you offer?',
        a: 'We offer a wide range including dome cameras for indoor use, bullet cameras for outdoor applications, PTZ cameras for large area coverage, and wireless cameras. We work with trusted brands like Hikvision, Dahua, CP Plus, and more.'
      },
      {
        q: 'Can I view my cameras on my mobile phone?',
        a: 'Yes, all our CCTV systems support remote viewing. You can monitor your cameras from anywhere using mobile apps on Android and iOS. We help you set up the remote access during installation.'
      },
      {
        q: 'How long is footage stored?',
        a: 'Storage duration depends on the hard drive capacity and number of cameras. Typically, a 1TB drive stores 7-15 days of footage for 4-8 cameras. We can customize storage based on your needs.'
      },
      {
        q: 'Do your cameras work at night?',
        a: 'Yes, all our cameras feature infrared night vision that captures clear footage in complete darkness. IR range varies from 20m to 100m depending on the camera model.'
      }
    ]
  },
  {
    category: 'Biometric & Access Control',
    questions: [
      {
        q: 'What biometric options do you provide?',
        a: 'We offer fingerprint scanners, face recognition systems, RFID card readers, and combination devices. These can be used for attendance tracking and access control for offices, factories, and residential complexes.'
      },
      {
        q: 'Can biometric systems generate attendance reports?',
        a: 'Yes, our biometric devices come with software that generates detailed attendance reports, late-coming reports, overtime calculations, and can integrate with payroll systems.'
      },
      {
        q: 'How many users can be registered?',
        a: 'Depending on the model, our devices can store from 500 to 10,000+ users. We recommend the right device based on your organization size.'
      }
    ]
  },
  {
    category: 'Home Automation',
    questions: [
      {
        q: 'What can be automated in my home?',
        a: 'We can automate lighting, curtains/blinds, AC/fans, geysers, and other appliances. You can control everything from your smartphone or voice assistants like Alexa and Google Home.'
      },
      {
        q: 'Do I need to change my existing wiring?',
        a: 'In most cases, minimal changes are needed. Our smart switches and modules can be installed in your existing switchboards. We assess your setup and provide the best solution.'
      },
      {
        q: 'Can I control my home when I\'m away?',
        a: 'Yes, with internet connectivity, you can control your home from anywhere in the world using the mobile app. You can also set schedules and automation rules.'
      }
    ]
  },
  {
    category: 'Installation & Service',
    questions: [
      {
        q: 'Do you provide installation services?',
        a: 'Yes, we provide complete professional installation for all our products. Our trained technicians ensure proper setup, configuration, and demonstrate how to use the system.'
      },
      {
        q: 'What areas do you service?',
        a: 'We primarily serve Vijayawada and nearby areas including Guntur, Tenali, Mangalagiri, and surrounding regions in Andhra Pradesh.'
      },
      {
        q: 'Do you offer after-sales support?',
        a: 'Yes, we provide dedicated after-sales support including troubleshooting, maintenance, and repairs. We also offer Annual Maintenance Contracts (AMC) for regular service.'
      },
      {
        q: 'What warranty do you provide?',
        a: 'All our products come with manufacturer warranty ranging from 1-3 years depending on the product. Our installation work is also guaranteed.'
      }
    ]
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        q: 'How can I get a quote?',
        a: 'You can contact us through phone, email, or the contact form on our website. We\'ll understand your requirements and provide a detailed quote. Site visits for assessment are free.'
      },
      {
        q: 'Do you offer EMI options?',
        a: 'For larger projects, we can discuss flexible payment options. Please contact us to know more about available payment plans.'
      }
    ]
  }
]

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredFaqs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      (!searchQuery || 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
      ) &&
      (!selectedCategory || category.category === selectedCategory)
    )
  })).filter(category => category.questions.length > 0)

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-slate-950 border-b border-slate-800/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-slate-400 text-lg mb-8">
              Find answers to common questions about our services and products.
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12 py-4"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-slate-800/30 sticky top-20 bg-slate-950/90 backdrop-blur-xl z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                !selectedCategory
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Topics
            </button>
            {faqData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === cat.category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400">No questions found matching your search.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory(''); }}
                className="mt-4 text-cyan-400 hover:text-cyan-300"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-full" />
                  {category.category}
                </h2>
                
                <div className="space-y-3">
                  {category.questions.map((item, qIndex) => {
                    const id = `${catIndex}-${qIndex}`
                    const isOpen = openQuestion === id
                    
                    return (
                      <div
                        key={id}
                        className="card overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(id)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                        >
                          <span className="text-white font-medium">{item.q}</span>
                          <ChevronDown 
                            className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-5 pt-0">
                                <div className="border-t border-slate-700/50 pt-4">
                                  <p className="text-slate-400 leading-relaxed">{item.a}</p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-cyan-500/20">
              <MessageCircle className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-slate-400 mb-8">
              Can't find what you're looking for? Contact us and we'll be happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="tel:+919876543210" className="btn-secondary flex items-center gap-2">
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
