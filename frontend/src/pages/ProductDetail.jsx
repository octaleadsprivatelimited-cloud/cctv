import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, Heart, Share2, Star, Check, Truck, Shield, 
  RotateCcw, ChevronRight, Minus, Plus, Play, ArrowLeft
} from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import ProductCard from '../components/ProductCard'
import api from '../utils/api'
import toast from 'react-hot-toast'

// Sample product for demo
const sampleProduct = {
  _id: '1',
  name: 'Pro HD Dome Camera 4MP',
  brand: 'SecureVision',
  model: 'SV-D4000',
  category: 'cameras',
  price: 149.99,
  salePrice: 129.99,
  onSale: true,
  stock: 50,
  sku: 'CAM-DOME-001',
  description: 'High-definition 4MP dome camera with night vision capability. Perfect for indoor surveillance with a sleek, unobtrusive design. Features include wide dynamic range, motion detection, and remote viewing capability. This camera delivers exceptional image quality in all lighting conditions and is easy to install.',
  shortDescription: 'Professional 4MP dome camera with night vision',
  rating: { average: 4.5, count: 128 },
  isFeatured: true,
  images: [
    { url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800', alt: 'Dome Camera Front', isPrimary: true },
    { url: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800', alt: 'Dome Camera Side' },
    { url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800', alt: 'Dome Camera Installed' },
  ],
  specifications: {
    resolution: '4MP (2560x1440)',
    lens: '2.8mm fixed lens',
    nightVision: '30m IR range',
    weatherproof: 'IP66',
    connectivity: 'PoE / 12V DC',
    warranty: '3 years'
  },
  features: ['Motion Detection', 'Night Vision', 'Wide Dynamic Range', 'PoE Support', 'Mobile App Access'],
  tags: ['dome', 'indoor', '4mp', 'night vision'],
  reviews: [
    { 
      _id: 'r1',
      user: { firstName: 'John', lastName: 'D' },
      rating: 5,
      comment: 'Excellent camera! The night vision is amazing and the image quality is crystal clear.',
      createdAt: '2024-01-15'
    },
    { 
      _id: 'r2',
      user: { firstName: 'Sarah', lastName: 'M' },
      rating: 4,
      comment: 'Great product for the price. Easy to install and the app works well.',
      createdAt: '2024-01-10'
    }
  ]
}

const relatedProducts = [
  {
    _id: '2',
    name: 'Ultra HD Bullet Camera 8MP',
    brand: 'SecureVision',
    price: 249.99,
    stock: 35,
    rating: { average: 4.8, count: 89 },
    images: [{ url: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?w=800', isPrimary: true }]
  },
  {
    _id: '3',
    name: 'PTZ Camera 25X Zoom',
    brand: 'SecureVision',
    price: 599.99,
    salePrice: 549.99,
    onSale: true,
    stock: 15,
    rating: { average: 4.6, count: 45 },
    images: [{ url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800', isPrimary: true }]
  },
  {
    _id: '4',
    name: 'Wireless WiFi Camera',
    brand: 'HomeSafe',
    price: 79.99,
    stock: 100,
    rating: { average: 4.2, count: 256 },
    images: [{ url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', isPrimary: true }]
  },
  {
    _id: '7',
    name: '8-Channel PoE NVR 2TB',
    brand: 'SecureVision',
    price: 399.99,
    stock: 30,
    rating: { average: 4.7, count: 112 },
    images: [{ url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', isPrimary: true }]
  }
]

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(sampleProduct)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')

  const { addItem, openCart } = useCartStore()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`)
        if (response.data.data) {
          setProduct(response.data.data)
        }
      } catch (error) {
        console.log('Using sample product')
      } finally {
        setIsLoading(false)
      }
    }
    fetchProduct()
    window.scrollTo(0, 0)
  }, [id])

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast.success(`${product.name} added to cart`)
    openCart()
  }

  const price = product.onSale && product.salePrice ? product.salePrice : product.price
  const discount = product.onSale && product.salePrice 
    ? Math.round((1 - product.salePrice / product.price) * 100)
    : 0

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-secondary-700 rounded w-64 mb-8" />
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="aspect-square bg-secondary-700 rounded-2xl" />
              <div className="space-y-4">
                <div className="h-4 bg-secondary-700 rounded w-24" />
                <div className="h-8 bg-secondary-700 rounded w-3/4" />
                <div className="h-6 bg-secondary-700 rounded w-32" />
                <div className="h-32 bg-secondary-700 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-900/30">
      {/* Breadcrumb */}
      <div className="bg-secondary-900 border-b border-secondary-800">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-secondary-400 hover:text-primary-400">Home</Link>
            <ChevronRight size={14} className="text-secondary-600" />
            <Link to="/products" className="text-secondary-400 hover:text-primary-400">Products</Link>
            <ChevronRight size={14} className="text-secondary-600" />
            <span className="text-secondary-400">{product.category}</span>
            <ChevronRight size={14} className="text-secondary-600" />
            <span className="text-white truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-secondary-400 hover:text-primary-400 mb-8">
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="aspect-square bg-secondary-800 rounded-2xl overflow-hidden mb-4">
              <img
                src={product.images?.[selectedImage]?.url || product.images?.[0]?.url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images?.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-secondary-800 rounded-xl overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary-500' : 'border-transparent hover:border-secondary-600'
                    }`}
                  >
                    <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary-400 font-medium">{product.brand}</span>
              {product.onSale && (
                <span className="px-2 py-0.5 bg-danger-500 text-white text-xs font-bold rounded">
                  SALE -{discount}%
                </span>
              )}
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{product.name}</h1>

            {/* Rating */}
            {product.rating?.count > 0 && (
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating.average) ? 'fill-accent-500 text-accent-500' : 'text-secondary-600'}
                    />
                  ))}
                </div>
                <span className="text-white font-medium">{product.rating.average}</span>
                <span className="text-secondary-400">({product.rating.count} reviews)</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-white">${price.toFixed(2)}</span>
              {product.onSale && product.salePrice && (
                <span className="text-xl text-secondary-500 line-through">${product.price.toFixed(2)}</span>
              )}
            </div>

            <p className="text-secondary-300 mb-6">{product.shortDescription || product.description?.slice(0, 200)}</p>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-6">
              {product.stock > 0 ? (
                <>
                  <Check className="w-5 h-5 text-success-500" />
                  <span className="text-success-500 font-medium">{product.stock} in stock</span>
                </>
              ) : (
                <span className="text-danger-500 font-medium">Out of stock</span>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-secondary-800 rounded-lg p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-white hover:bg-secondary-700 rounded-lg transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center text-white font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-10 flex items-center justify-center text-white hover:bg-secondary-700 rounded-lg transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button className="w-12 h-12 bg-secondary-800 hover:bg-secondary-700 text-secondary-400 hover:text-white rounded-lg transition-colors flex items-center justify-center">
                <Heart size={20} />
              </button>

              <button className="w-12 h-12 bg-secondary-800 hover:bg-secondary-700 text-secondary-400 hover:text-white rounded-lg transition-colors flex items-center justify-center">
                <Share2 size={20} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-secondary-800/50 rounded-xl">
                <Truck className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <span className="text-sm text-secondary-300">Free Shipping</span>
              </div>
              <div className="text-center p-4 bg-secondary-800/50 rounded-xl">
                <Shield className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <span className="text-sm text-secondary-300">{product.specifications?.warranty || '2 Year'} Warranty</span>
              </div>
              <div className="text-center p-4 bg-secondary-800/50 rounded-xl">
                <RotateCcw className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                <span className="text-sm text-secondary-300">30-Day Returns</span>
              </div>
            </div>

            {/* SKU & Model */}
            <div className="space-y-2 text-sm">
              <p className="text-secondary-400">SKU: <span className="text-white">{product.sku}</span></p>
              {product.model && <p className="text-secondary-400">Model: <span className="text-white">{product.model}</span></p>}
              <p className="text-secondary-400">Category: <span className="text-white capitalize">{product.category}</span></p>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex gap-1 border-b border-secondary-800 overflow-x-auto">
            {[
              { id: 'description', label: 'Description' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'reviews', label: `Reviews (${product.reviews?.length || 0})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary-400 border-b-2 border-primary-400'
                    : 'text-secondary-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose prose-invert max-w-none">
                <p className="text-secondary-300 leading-relaxed">{product.description}</p>
                {product.features?.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-white font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-secondary-300">
                          <Check className="w-5 h-5 text-success-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(product.specifications || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-4 bg-secondary-800/50 rounded-xl">
                    <span className="text-secondary-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {product.reviews?.length > 0 ? (
                  product.reviews.map((review) => (
                    <div key={review._id} className="p-6 bg-secondary-800/50 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                            <span className="text-primary-400 font-semibold">
                              {review.user?.firstName?.[0]}{review.user?.lastName?.[0]}
                            </span>
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              {review.user?.firstName} {review.user?.lastName}
                            </p>
                            <p className="text-secondary-500 text-sm">
                              {new Date(review.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < review.rating ? 'fill-accent-500 text-accent-500' : 'text-secondary-600'}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-secondary-300">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-secondary-400 text-center py-8">No reviews yet. Be the first to review this product!</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Related Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard key={product._id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

