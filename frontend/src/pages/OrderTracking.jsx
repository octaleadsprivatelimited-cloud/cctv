import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, Package, Truck, CheckCircle, Clock, 
  MapPin, Calendar, ArrowRight
} from 'lucide-react'
import api from '../utils/api'

function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState('')
  const [order, setOrder] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTrack = async (e) => {
    e.preventDefault()
    if (!orderNumber.trim()) return

    setIsLoading(true)
    setError('')
    setOrder(null)

    try {
      const response = await api.get(`/orders/track/${orderNumber}`)
      if (response.data.data) {
        setOrder(response.data.data)
      }
    } catch (err) {
      // Demo order for testing
      if (orderNumber.toUpperCase().startsWith('CCTV')) {
        setOrder({
          orderNumber: orderNumber.toUpperCase(),
          status: 'shipped',
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          trackingNumber: '1Z999AA10123456784',
          items: [
            { name: 'Pro HD Dome Camera 4MP', quantity: 2 },
            { name: '8-Channel DVR 2TB', quantity: 1 }
          ],
          shippingAddress: {
            city: 'Los Angeles',
            state: 'CA'
          }
        })
      } else {
        setError('Order not found. Please check your order number and try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const getStatusSteps = () => [
    { id: 'pending', label: 'Order Placed', icon: Package },
    { id: 'processing', label: 'Processing', icon: Clock },
    { id: 'shipped', label: 'Shipped', icon: Truck },
    { id: 'delivered', label: 'Delivered', icon: CheckCircle },
  ]

  const getCurrentStep = () => {
    const steps = ['pending', 'processing', 'shipped', 'delivered']
    return steps.indexOf(order?.status) + 1
  }

  return (
    <div className="min-h-screen bg-secondary-900/30 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Track Your Order</h1>
            <p className="text-secondary-400">
              Enter your order number to see the current status of your shipment
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleTrack} className="mb-12">
            <div className="relative">
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter order number (e.g., CCTV-2401-0001)"
                className="w-full px-6 py-4 pr-36 bg-secondary-800 border border-secondary-700 rounded-xl text-white placeholder-secondary-500 focus:outline-none focus:border-primary-500 text-lg"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary flex items-center gap-2"
              >
                {isLoading ? 'Searching...' : (
                  <>
                    <Search size={18} />
                    Track
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-danger-500/10 border border-danger-500/30 rounded-xl text-danger-500 text-center mb-8"
            >
              {error}
            </motion.div>
          )}

          {/* Order Details */}
          {order && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Status Progress */}
              <div className="card p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-xl font-bold text-white">{order.orderNumber}</h2>
                    <p className="text-secondary-400 flex items-center gap-2 mt-1">
                      <Calendar size={16} />
                      Ordered {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-4 py-2 rounded-full font-medium capitalize ${
                    order.status === 'delivered' ? 'bg-success-500/20 text-success-500' :
                    order.status === 'shipped' ? 'bg-primary-500/20 text-primary-400' :
                    order.status === 'cancelled' ? 'bg-danger-500/20 text-danger-500' :
                    'bg-accent-500/20 text-accent-500'
                  }`}>
                    {order.status}
                  </span>
                </div>

                {/* Progress Steps */}
                <div className="relative">
                  <div className="absolute top-5 left-5 right-5 h-0.5 bg-secondary-700" />
                  <div 
                    className="absolute top-5 left-5 h-0.5 bg-primary-500 transition-all duration-500"
                    style={{ width: `${(getCurrentStep() - 1) * 33.33}%` }}
                  />
                  
                  <div className="relative flex justify-between">
                    {getStatusSteps().map((step, index) => {
                      const isActive = getCurrentStep() > index
                      const isCurrent = getCurrentStep() === index + 1
                      return (
                        <div key={step.id} className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                            isActive 
                              ? 'bg-primary-500 text-white' 
                              : 'bg-secondary-800 text-secondary-500 border border-secondary-700'
                          } ${isCurrent ? 'ring-4 ring-primary-500/30' : ''}`}>
                            <step.icon size={20} />
                          </div>
                          <span className={`mt-2 text-sm ${
                            isActive ? 'text-white' : 'text-secondary-500'
                          }`}>
                            {step.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Tracking Info */}
              {order.trackingNumber && (
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Truck className="text-primary-400" />
                    Shipping Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-secondary-400">Tracking Number</span>
                      <span className="text-white font-medium">{order.trackingNumber}</span>
                    </div>
                    {order.shippingAddress && (
                      <div className="flex justify-between">
                        <span className="text-secondary-400">Destination</span>
                        <span className="text-white">
                          {order.shippingAddress.city}, {order.shippingAddress.state}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Order Items */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Package className="text-primary-400" />
                  Order Items
                </h3>
                <div className="space-y-3">
                  {order.items?.map((item, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-secondary-800 last:border-0">
                      <span className="text-secondary-300">{item.name}</span>
                      <span className="text-white">x{item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help */}
              <div className="text-center">
                <p className="text-secondary-400 mb-4">
                  Need help with your order?
                </p>
                <a href="/contact" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center gap-2">
                  Contact Support
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          )}

          {/* Demo Note */}
          {!order && !error && (
            <div className="text-center text-secondary-500 text-sm">
              <p>Try tracking with order number: CCTV-2401-0001</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default OrderTracking

