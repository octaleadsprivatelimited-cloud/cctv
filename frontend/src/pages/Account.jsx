import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  User, Package, Settings, LogOut, ChevronRight, 
  MapPin, CreditCard, Bell, Shield
} from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import api from '../utils/api'
import toast from 'react-hot-toast'

function Account() {
  const navigate = useNavigate()
  const { user, isAuthenticated, logout, updateProfile } = useAuthStore()
  const [activeTab, setActiveTab] = useState('profile')
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    address: {
      street: user?.address?.street || '',
      city: user?.address?.city || '',
      state: user?.address?.state || '',
      zipCode: user?.address?.zipCode || ''
    }
  })

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/orders')
        if (response.data.data) {
          setOrders(response.data.data)
        }
      } catch (error) {
        console.log('Could not fetch orders')
      }
    }
    if (isAuthenticated) {
      fetchOrders()
    }
  }, [isAuthenticated])

  const handleProfileUpdate = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const result = await updateProfile(profileData)
    if (result.success) {
      toast.success('Profile updated successfully')
    } else {
      toast.error(result.message || 'Update failed')
    }
    setIsLoading(false)
  }

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/')
  }

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-secondary-900/30 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold text-white mb-8">My Account</h1>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="card p-4">
                <div className="flex items-center gap-4 p-4 mb-4 border-b border-secondary-700">
                  <div className="w-14 h-14 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <span className="text-primary-400 text-xl font-bold">
                      {user?.firstName?.[0]}{user?.lastName?.[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{user?.firstName} {user?.lastName}</p>
                    <p className="text-secondary-400 text-sm">{user?.email}</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-500/20 text-primary-400'
                          : 'text-secondary-400 hover:bg-secondary-800 hover:text-white'
                      }`}
                    >
                      <tab.icon size={18} />
                      {tab.label}
                    </button>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-secondary-400 hover:bg-danger-500/20 hover:text-danger-500 transition-colors"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="card p-6"
                >
                  <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-300 mb-2">First Name</label>
                        <input
                          type="text"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-300 mb-2">Last Name</label>
                        <input
                          type="text"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                          className="input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={user?.email}
                        disabled
                        className="input-field opacity-50 cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                        className="input-field"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-300 mb-2">Street Address</label>
                      <input
                        type="text"
                        value={profileData.address.street}
                        onChange={(e) => setProfileData(prev => ({ 
                          ...prev, 
                          address: { ...prev.address, street: e.target.value }
                        }))}
                        className="input-field"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-300 mb-2">City</label>
                        <input
                          type="text"
                          value={profileData.address.city}
                          onChange={(e) => setProfileData(prev => ({ 
                            ...prev, 
                            address: { ...prev.address, city: e.target.value }
                          }))}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-300 mb-2">State</label>
                        <input
                          type="text"
                          value={profileData.address.state}
                          onChange={(e) => setProfileData(prev => ({ 
                            ...prev, 
                            address: { ...prev.address, state: e.target.value }
                          }))}
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-300 mb-2">ZIP Code</label>
                        <input
                          type="text"
                          value={profileData.address.zipCode}
                          onChange={(e) => setProfileData(prev => ({ 
                            ...prev, 
                            address: { ...prev.address, zipCode: e.target.value }
                          }))}
                          className="input-field"
                        />
                      </div>
                    </div>

                    <button type="submit" disabled={isLoading} className="btn-primary">
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Orders Tab */}
              {activeTab === 'orders' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="card p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Order History</h2>
                    
                    {orders.length === 0 ? (
                      <div className="text-center py-12">
                        <Package className="w-16 h-16 text-secondary-600 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">No orders yet</h3>
                        <p className="text-secondary-400 mb-6">Start shopping to see your orders here</p>
                        <Link to="/products" className="btn-primary">
                          Browse Products
                        </Link>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div key={order._id} className="p-4 bg-secondary-800/50 rounded-xl">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <p className="text-white font-semibold">{order.orderNumber}</p>
                                <p className="text-secondary-400 text-sm">
                                  {new Date(order.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                                order.status === 'delivered' ? 'bg-success-500/20 text-success-500' :
                                order.status === 'shipped' ? 'bg-primary-500/20 text-primary-400' :
                                order.status === 'cancelled' ? 'bg-danger-500/20 text-danger-500' :
                                'bg-accent-500/20 text-accent-500'
                              }`}>
                                {order.status}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-secondary-400">{order.items?.length} items</p>
                              <p className="text-white font-semibold">${order.total?.toFixed(2)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="card p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Account Settings</h2>
                    
                    <div className="space-y-4">
                      <button className="w-full flex items-center justify-between p-4 bg-secondary-800/50 rounded-xl hover:bg-secondary-800 transition-colors">
                        <div className="flex items-center gap-4">
                          <Shield className="w-5 h-5 text-primary-400" />
                          <div className="text-left">
                            <p className="text-white font-medium">Change Password</p>
                            <p className="text-secondary-400 text-sm">Update your password</p>
                          </div>
                        </div>
                        <ChevronRight className="text-secondary-500" />
                      </button>

                      <button className="w-full flex items-center justify-between p-4 bg-secondary-800/50 rounded-xl hover:bg-secondary-800 transition-colors">
                        <div className="flex items-center gap-4">
                          <Bell className="w-5 h-5 text-primary-400" />
                          <div className="text-left">
                            <p className="text-white font-medium">Notifications</p>
                            <p className="text-secondary-400 text-sm">Manage email preferences</p>
                          </div>
                        </div>
                        <ChevronRight className="text-secondary-500" />
                      </button>

                      <button className="w-full flex items-center justify-between p-4 bg-secondary-800/50 rounded-xl hover:bg-secondary-800 transition-colors">
                        <div className="flex items-center gap-4">
                          <CreditCard className="w-5 h-5 text-primary-400" />
                          <div className="text-left">
                            <p className="text-white font-medium">Payment Methods</p>
                            <p className="text-secondary-400 text-sm">Manage saved cards</p>
                          </div>
                        </div>
                        <ChevronRight className="text-secondary-500" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Account

