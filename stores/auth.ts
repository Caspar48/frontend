import { defineStore } from 'pinia'
import { api } from '~/utils/api'

interface User {
  id: string;
  email: string;
  role: string;
  username?: string;
  phone?: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  role: 'passenger' | 'driver' | 'company'; // 添加 'passenger' 到允許的角色類型中
}

interface AuthResponse {
  token: string;
  user: User;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
    loading: false,
    error: null as string | null
  }),

  actions: {
    async login(payload: LoginPayload) {
      this.loading = true
      this.error = null
      
      try {
        const response = await api.login(payload)
        const data = response.data as AuthResponse
        
        this.token = data.token
        this.user = data.user
        localStorage.setItem('token', this.token)
        
        return response
      } catch (error: any) {
        this.error = error.response?.data?.msg || '登入失敗'
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(payload: RegisterPayload) {
      this.loading = true
      this.error = null
      
      try {
        const response = await api.register({
          email: payload.email,
          password: payload.password,
          role: payload.role === 'passenger' ? 'customer' : payload.role // 這裡的轉換現在是類型安全的
        })
        
        const data = response.data as AuthResponse
        this.token = data.token
        this.user = data.user
        localStorage.setItem('token', this.token)
        
        return response
      } catch (error: any) {
        this.error = error.response?.data?.msg || '註冊失敗'
        throw error
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    },
  },

  getters: {
    isAuthenticated(): boolean {
      return !!this.token && !!this.user
    },
    
    currentUser(): User | null {
      return this.user
    }
  }
})