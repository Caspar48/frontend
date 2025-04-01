import { useNuxtApp } from '#app'

export const api = {
  register(payload) {
    return useNuxtApp().$axios.post('/api/auth/register', payload)
  },
  
  login(payload) {
    return useNuxtApp().$axios.post('/api/auth/login', payload)
  }
}
