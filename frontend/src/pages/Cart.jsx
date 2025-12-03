import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ShoppingBag, Trash2, Plus, Minus, ArrowRight, 
  ArrowLeft, Truck, Shield, Tag 
} from 'lucide-react'
import { useCartStore } from '../store/cartStore'

function Cart() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart,
    getSubtotal,
    getShippingCost,
    getTax,
    getTotal
  } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-secondary-900/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md mx-auto"
          >
            <div className="w-24 h-24 bg-secondary-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-secondary-600" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">Your Cart is Empty</h1>
            <p className="text-secondary-400 mb-8">
              Looks like you haven't added any products yet. Browse our catalog to find the perfect security solution.
            </p>
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-900/30 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
            <button
              onClick={clearCart}
              className="text-secondary-400 hover:text-danger-500 text-sm transition-colors"
            >
              Clear Cart
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => {
                const price = item.onSale && item.salePrice ? item.salePrice : item.price
                return (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card p-4 md:p-6"
                  >
                    <div className="flex gap-4 md:gap-6">
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary-700 rounded-xl overflow-hidden flex-shrink-0">
                        {item.images?.[0]?.url ? (
                          <img
                            src={item.images[0].url}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-secondary-500">
                            No image
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Link 
                              to={`/products/${item._id}`}
                              className="text-lg font-semibold text-white hover:text-primary-400 transition-colors"
                            >
                              {item.name}
                            </Link>
                            <p className="text-secondary-400 text-sm">{item.brand}</p>
                            {item.onSale && (
                              <span className="inline-flex items-center gap-1 text-xs text-danger-500 mt-1">
                                <Tag size={12} />
                                On Sale
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => removeItem(item._id)}
                            className="p-2 text-secondary-400 hover:text-danger-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>

                        <div className="flex flex-wrap items-end justify-between gap-4 mt-4">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item._id, item.quantity - 1)}
                              className="w-8 h-8 bg-secondary-700 hover:bg-secondary-600 rounded-lg flex items-center justify-center text-white transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-8 text-center text-white font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item._id, item.quantity + 1)}
                              className="w-8 h-8 bg-secondary-700 hover:bg-secondary-600 rounded-lg flex items-center justify-center text-white transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="text-xl font-bold text-white">
                              ${(price * item.quantity).toFixed(2)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-secondary-500 text-sm">
                                ${price.toFixed(2)} each
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              <Link 
                to="/products"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mt-4"
              >
                <ArrowLeft size={18} />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-secondary-400">
                    <span>Subtotal ({items.length} items)</span>
                    <span className="text-white">${getSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-secondary-400">
                    <span>Shipping</span>
                    <span className={getShippingCost() === 0 ? 'text-success-500' : 'text-white'}>
                      {getShippingCost() === 0 ? 'FREE' : `$${getShippingCost().toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-secondary-400">
                    <span>Tax (8%)</span>
                    <span className="text-white">${getTax().toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-secondary-700">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-2xl font-bold text-white">${getTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {getSubtotal() < 500 && (
                  <div className="p-3 bg-primary-500/10 border border-primary-500/30 rounded-lg mb-6">
                    <p className="text-sm text-primary-400">
                      Add ${(500 - getSubtotal()).toFixed(2)} more for FREE shipping!
                    </p>
                  </div>
                )}

                <Link
                  to="/checkout"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </Link>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-secondary-400">
                    <Truck size={18} className="text-primary-400" />
                    <span>Free shipping on orders over $500</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-secondary-400">
                    <Shield size={18} className="text-primary-400" />
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Cart

