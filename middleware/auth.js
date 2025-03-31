import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()

  // 如果當前路由不需要驗證，則直接放行
  if (!to.meta.auth) return

  // 若用戶尚未認證（例如沒有 token），則重定向到登錄頁面
  if (!authStore.token) {
    return navigateTo('/login')
  }

  // 如果路由有特定的角色要求，進行權限檢查
  if (to.meta.roles && Array.isArray(to.meta.roles)) {
    const userRole = authStore.user?.role
    if (!to.meta.roles.includes(userRole)) {
      // 您可以根據需求提示用戶無訪問權限，這裡示範直接重定向到首頁
      return navigateTo('/')
    }
  }
})
