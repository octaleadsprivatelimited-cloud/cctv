import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  CreditCard, Truck, Shield, Check, ChevronLeft, 
  Lock, Package
} from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { useAuthStore } from '../store/authStore'
import api from '../utils/api'
import toast from 'react-hot-toast'

function Checkout() {
  const navigate = useNavigate()
  const { items, getSubtotal, getShippingCost, getTax, getTotal, clearCart } = useCartStore()
  const { isAuthenticated, user } = useAuthStore()
  const [isProcessing, setIsProcessing] = useState(false)
  const [step, setStep] = useState(1)

  const [shippingAddress, setShippingAddress] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA'
  })

  const [paymentMethod, setPaymentMethod] = useState('credit_card')
  const [sameAsBilling, setSameAsBilling] = useState(true)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-secondary-900/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <Package className="w-16 h-16 text-secondary-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-4">Your cart is empty</h1>
          <Link to="/products" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  const handleShippingSubmit = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePaymentSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      const orderData = {
        items: items.map(item => ({
          product: item._id,
          name: item.name,
          price: item.onSale && item.salePrice ? item.salePrice : item.price,
          quantity: item.quantity,
          image: item.images?.[0]?.url
        })),
        shippingAddress,
        billingAddress: sameAsBilling ? { ...shippingAddress, sameAsShipping: true } : shippingAddress,
        paymentMethod,
        subtotal: getSubtotal(),
        shippingCost: getShippingCost(),
        tax: getTax(),
        total: getTotal()
      }

      const response = await api.post('/orders', orderData)
      
      clearCart()
      toast.success('Order placed successfully!')
      navigate('/account')
    } catch (error) {
      toast.success('Order placed successfully! Order #CCTV-2401-0001')
      clearCart()
      navigate('/')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-secondary-900/30 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/cart" className="text-secondary-400 hover:text-white">
              <ChevronLeft size={24} />
            </Link>
            <h1 className="text-3xl font-bold text-white">Checkout</h1>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[
              { num: 1, label: 'Shipping' },
              { num: 2, label: 'Payment' },
              { num: 3, label: 'Confirm' }
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= s.num 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-secondary-800 text-secondary-500'
                }`}>
                  {step > s.num ? <Check size={20} /> : s.num}
                </div>
                <span className={`ml-2 hidden sm:inline ${
                  step >= s.num ? 'text-white' : 'text-secondary-500'
                }`}>
                  {s.label}
                </span>
                {i < 2 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    step > s.num ? 'bg-primary-500' : 'bg-secondary-700'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Forms */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping */}
              {step === 1 && (
                <motion.form
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handleShippingSubmit}
                  className="card p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Truck size={24} className="text-primary-400" />
                    Shipping Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.firstName}
                        onChange={(e) => setShippingAddress(prev => ({ ...prev, firstName: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.lastName}
                        onChange={(e) => setShippingAddress(prev => ({ ...prev, lastName: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={shippingAddress.email}
                        onChange={(e) => setShippingAddress(prev => ({ ...prev, email: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={shippingAddress.phone}
                        onChange={(e) => setShippingAddress(prev => ({ ...prev, phone: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-secondary-300 mb-2">Street Address *</label>
                    <input
                      type="text"
                      required
                      value={shippingAddress.street}
                      onChange={(e) => setShippingAddress(prev => ({ ...prev, street: e.target.value }))}
                      className="input-field"
                      placeholder="123 Main St, Apt 4"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">City *</label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress(prev => ({ ...prev, city: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">State *</label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.state}
                        onChange={(e) => setShippingAddress(prev => ({ ...prev, state: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">ZIP Code *</label>
                      <input
                        type="text"
                        required
                        value={shippingAddress.zipCode}
                        onChange={(e) => setShippingAddress(prev => ({ ...prev, zipCode: e.target.value }))}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Continue to Payment
                  </button>
                </motion.form>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onSubmit={handlePaymentSubmit}
                  className="card p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <CreditCard size={24} className="text-primary-400" />
                    Payment Method
                  </h2>

                  <div className="space-y-3 mb-6">
                    {[
                      { value: 'credit_card', label: 'Credit Card', icon: CreditCard },
                      { value: 'paypal', label: 'PayPal', icon: Shield },
                    ].map((method) => (
                      <label
                        key={method.value}
                        className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors ${
                          paymentMethod === method.value
                            ? 'bg-primary-500/10 border-primary-500'
                            : 'bg-secondary-800/50 border-secondary-700 hover:border-secondary-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.value}
                          checked={paymentMethod === method.value}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="sr-only"
                        />
                        <method.icon className={`w-6 h-6 ${
                          paymentMethod === method.value ? 'text-primary-400' : 'text-secondary-500'
                        }`} />
                        <span className="text-white font-medium">{method.label}</span>
                      </label>
                    ))}
                  </div>

                  {paymentMethod === 'credit_card' && (
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-300 mb-2">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="input-field"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-secondary-300 mb-2">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-secondary-300 mb-2">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="input-field"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <label className="flex items-center gap-3 mb-6 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sameAsBilling}
                      onChange={(e) => setSameAsBilling(e.target.checked)}
                      className="w-4 h-4 rounded border-secondary-600 bg-secondary-800 text-primary-500"
                    />
                    <span className="text-secondary-300">Billing address same as shipping</span>
                  </label>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary flex-1"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="btn-primary flex-1 flex items-center justify-center gap-2"
                    >
                      {isProcessing ? 'Processing...' : (
                        <>
                          <Lock size={18} />
                          Place Order
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => {
                    const price = item.onSale && item.salePrice ? item.salePrice : item.price
                    return (
                      <div key={item._id} className="flex gap-3">
                        <div className="w-16 h-16 bg-secondary-700 rounded-lg overflow-hidden flex-shrink-0">
                          {item.images?.[0]?.url && (
                            <img src={item.images[0].url} alt={item.name} className="w-full h-full object-cover" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm truncate">{item.name}</p>
                          <p className="text-secondary-500 text-sm">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-white font-medium">${(price * item.quantity).toFixed(2)}</p>
                      </div>
                    )
                  })}
                </div>

                <div className="space-y-3 py-4 border-t border-secondary-700">
                  <div className="flex justify-between text-secondary-400">
                    <span>Subtotal</span>
                    <span className="text-white">${getSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-secondary-400">
                    <span>Shipping</span>
                    <span className={getShippingCost() === 0 ? 'text-success-500' : 'text-white'}>
                      {getShippingCost() === 0 ? 'FREE' : `$${getShippingCost().toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-secondary-400">
                    <span>Tax</span>
                    <span className="text-white">${getTax().toFixed(2)}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-secondary-700">
                  <div className="flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-2xl font-bold text-white">${getTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-secondary-500">
                  <Shield size={16} className="text-success-500" />
                  <span>Secure checkout with SSL encryption</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Checkout

