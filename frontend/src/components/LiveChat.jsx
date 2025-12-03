import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react'

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "👋 Hello! Welcome to C Technologies Smart Edge. How can we help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])

  const quickReplies = [
    "CCTV Installation",
    "Home Automation",
    "Get a Quote",
    "Service Areas"
  ]

  const handleSend = () => {
    if (!message.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setMessage('')

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        text: "Thank you for your message! Our team will get back to you shortly. For immediate assistance, please call us at +91 98765 43210.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const handleQuickReply = (reply) => {
    setMessage(reply)
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-white rounded-2xl shadow-lg shadow-cyan-500/30 flex items-center justify-center transition-all group"
          >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '500px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-emerald-500 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">C Technologies</h3>
                  <span className="text-cyan-100 text-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                    Online
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Minimize2 size={18} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                          msg.type === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-br-md'
                            : 'bg-slate-800 text-slate-100 rounded-bl-md border border-slate-700/50'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <span className={`text-xs mt-1 block ${
                          msg.type === 'user' ? 'text-cyan-100' : 'text-slate-500'
                        }`}>
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 pb-3">
                    <p className="text-slate-500 text-xs mb-2">Quick options:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-sm rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 hover:border-cyan-500/30 border border-slate-700/50 transition-all"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-slate-800/50 bg-slate-900">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      handleSend()
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="input-field text-sm py-2.5"
                    />
                    <button
                      type="submit"
                      disabled={!message.trim()}
                      className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 disabled:from-slate-700 disabled:to-slate-700 disabled:cursor-not-allowed text-white rounded-xl transition-all"
                    >
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default LiveChat
