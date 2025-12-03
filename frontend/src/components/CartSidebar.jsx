import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCartStore } from '../store/cartStore'

function CartSidebar() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity,
    getSubtotal,
    getTotalItems
  } = useCartStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-secondary-900 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-secondary-800">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary-400" />
                <h2 className="text-xl font-bold text-white">Shopping Cart</h2>
                <span className="px-2 py-0.5 bg-primary-500/20 text-primary-400 text-sm font-medium rounded-full">
                  {getTotalItems()}
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-secondary-400 hover:text-white hover:bg-secondary-800 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-secondary-800 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-secondary-600" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-secondary-400 mb-6">Add some products to get started</p>
                  <Link
                    to="/products"
                    onClick={closeCart}
                    className="btn-primary"
                  >
                    Browse Products
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => {
                    const price = item.onSale && item.salePrice ? item.salePrice : item.price
                    return (
                      <div
                        key={item._id}
                        className="flex gap-4 p-4 bg-secondary-800/50 rounded-xl"
                      >
                        <div className="w-20 h-20 bg-secondary-700 rounded-lg overflow-hidden flex-shrink-0">
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
                          <h3 className="text-white font-medium truncate">{item.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-primary-400 font-bold">${price.toFixed(2)}</span>
                            {item.onSale && item.salePrice && (
                              <span className="text-secondary-500 text-sm line-through">
                                ${item.price.toFixed(2)}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2">
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
                            <button
                              onClick={() => removeItem(item._id)}
                              className="p-2 text-secondary-400 hover:text-danger-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-secondary-800 space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-secondary-400">Subtotal</span>
                  <span className="text-white font-bold">${getSubtotal().toFixed(2)}</span>
                </div>
                <p className="text-sm text-secondary-500">
                  Shipping and taxes calculated at checkout
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="btn-secondary text-center"
                  >
                    View Cart
                  </Link>
                  <Link
                    to="/checkout"
                    onClick={closeCart}
                    className="btn-primary text-center flex items-center justify-center gap-2"
                  >
                    Checkout
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartSidebar

