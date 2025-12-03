import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, Eye, Heart, Tag } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import toast from 'react-hot-toast'

function ProductCard({ product, index = 0 }) {
  const { addItem, openCart } = useCartStore()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    toast.success(`${product.name} added to cart`)
    openCart()
  }

  const price = product.onSale && product.salePrice ? product.salePrice : product.price
  const primaryImage = product.images?.find(img => img.isPrimary)?.url || product.images?.[0]?.url

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group card p-4 hover-lift"
    >
      <Link to={`/products/${product._id}`}>
        {/* Image */}
        <div className="relative aspect-square bg-secondary-800 rounded-xl overflow-hidden mb-4">
          {primaryImage ? (
            <img
              src={primaryImage}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-secondary-500">
              No image
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.onSale && (
              <span className="px-2 py-1 bg-danger-500 text-white text-xs font-bold rounded-lg flex items-center gap-1">
                <Tag size={12} />
                SALE
              </span>
            )}
            {product.isFeatured && (
              <span className="px-2 py-1 bg-accent-500 text-secondary-900 text-xs font-bold rounded-lg">
                FEATURED
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-9 h-9 bg-secondary-900/80 backdrop-blur-sm hover:bg-primary-500 text-white rounded-lg flex items-center justify-center transition-colors">
              <Heart size={18} />
            </button>
            <button className="w-9 h-9 bg-secondary-900/80 backdrop-blur-sm hover:bg-primary-500 text-white rounded-lg flex items-center justify-center transition-colors">
              <Eye size={18} />
            </button>
          </div>

          {/* Add to Cart Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-secondary-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handleAddToCart}
              className="w-full py-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-xs text-primary-400 font-medium uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <h3 className="text-white font-semibold mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          {product.rating?.count > 0 && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating.average) ? 'fill-accent-500 text-accent-500' : 'text-secondary-600'}
                  />
                ))}
              </div>
              <span className="text-secondary-500 text-sm">
                ({product.rating.count})
              </span>
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
              ${price.toFixed(2)}
            </span>
            {product.onSale && product.salePrice && (
              <span className="text-secondary-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <p className={`text-sm mt-2 ${product.stock > 0 ? 'text-success-500' : 'text-danger-500'}`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard

