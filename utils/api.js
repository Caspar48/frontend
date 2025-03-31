import { useNuxtApp } from '#app'

export const api = {
  // 用戶認證
  register(payload) {
    return useNuxtApp().$axios.post('/api/auth/register', payload)
  },
  login(payload) {
    return useNuxtApp().$axios.post('/api/auth/login', payload)
  },
  // 車輛預約
  createBooking(payload) {
    return useNuxtApp().$axios.post('/api/bookings', payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  },
  getBookings() {
    return useNuxtApp().$axios.get('/api/bookings', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`  
      }
    })
  },
  // 司機功能
  getDriverBookings() {
    return useNuxtApp().$axios.get('/api/drivers/bookings')
  },
  updateDriverAvailability(payload) {
    return useNuxtApp().$axios.put('/api/drivers/availability', payload)
  },
  // 公司功能
  getCompanyBookings() {
    return useNuxtApp().$axios.get('/api/companies/bookings')
  },
  updateCompanyAvailability(payload) {
    return useNuxtApp().$axios.put('/api/companies/availability', payload)
  },
}
