import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1) => {
        const { items } = get()
        const existingItem = items.find(item => item._id === product._id)

        if (existingItem) {
          set({
            items: items.map(item =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            )
          })
        } else {
          set({
            items: [...items, { ...product, quantity }]
          })
        }
      },

      removeItem: (productId) => {
        set({
          items: get().items.filter(item => item._id !== productId)
        })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity < 1) {
          get().removeItem(productId)
          return
        }
        set({
          items: get().items.map(item =>
            item._id === productId ? { ...item, quantity } : item
          )
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      toggleCart: () => {
        set({ isOpen: !get().isOpen })
      },

      openCart: () => {
        set({ isOpen: true })
      },

      closeCart: () => {
        set({ isOpen: false })
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => {
          const price = item.onSale && item.salePrice ? item.salePrice : item.price
          return total + (price * item.quantity)
        }, 0)
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getShippingCost: () => {
        const subtotal = get().getSubtotal()
        return subtotal >= 500 ? 0 : 29.99
      },

      getTax: () => {
        return get().getSubtotal() * 0.08 // 8% tax
      },

      getTotal: () => {
        return get().getSubtotal() + get().getShippingCost() + get().getTax()
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)

