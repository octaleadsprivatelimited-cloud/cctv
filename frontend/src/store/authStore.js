import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import api from '../utils/api'

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        set({ isLoading: true, error: null })
        try {
          const response = await api.post('/auth/login', { email, password })
          const { token, user } = response.data
          set({ token, user, isAuthenticated: true, isLoading: false })
          return { success: true }
        } catch (error) {
          const message = error.response?.data?.message || 'Login failed'
          set({ error: message, isLoading: false })
          return { success: false, message }
        }
      },

      register: async (userData) => {
        set({ isLoading: true, error: null })
        try {
          const response = await api.post('/auth/register', userData)
          const { token, user } = response.data
          set({ token, user, isAuthenticated: true, isLoading: false })
          return { success: true }
        } catch (error) {
          const message = error.response?.data?.message || 'Registration failed'
          set({ error: message, isLoading: false })
          return { success: false, message }
        }
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false, error: null })
      },

      checkAuth: async () => {
        const { token } = get()
        if (!token) return

        try {
          const response = await api.get('/auth/me')
          set({ user: response.data.user, isAuthenticated: true })
        } catch (error) {
          set({ user: null, token: null, isAuthenticated: false })
        }
      },

      updateProfile: async (userData) => {
        set({ isLoading: true, error: null })
        try {
          const response = await api.put('/auth/updateprofile', userData)
          set({ user: response.data.user, isLoading: false })
          return { success: true }
        } catch (error) {
          const message = error.response?.data?.message || 'Update failed'
          set({ error: message, isLoading: false })
          return { success: false, message }
        }
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ token: state.token }),
    }
  )
)

