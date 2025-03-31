<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center">
    <div class="container mx-auto px-4">
      <div class="max-w-md mx-auto">
        <!-- 登入卡片 -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <!-- Logo -->
          <div class="text-center mb-8">
            <img src="@/assets/images/logo.png" alt="NovaBooking Logo" class="h-12 mx-auto mb-4"/>
            <h2 class="text-2xl font-bold text-[#53b17b]">歡迎回來</h2>
          </div>

          <!-- 登入表單 -->
          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- 電子郵件 -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">電子郵件</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-envelope text-gray-400"></i>
                </div>
                <input 
                  v-model="email" 
                  type="email" 
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#53b17b] focus:border-[#53b17b] outline-none transition-colors"
                  required 
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <!-- 密碼 -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">密碼</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-lock text-gray-400"></i>
                </div>
                <input 
                  v-model="password" 
                  type="password" 
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#53b17b] focus:border-[#53b17b] outline-none transition-colors"
                  required 
                  placeholder="••••••••"
                />
              </div>
            </div>

            <!-- 記住我 & 忘記密碼 -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input 
                  type="checkbox" 
                  v-model="rememberMe"
                  class="h-4 w-4 text-[#53b17b] border-gray-300 rounded focus:ring-[#53b17b]" 
                />
                <label class="ml-2 block text-sm text-gray-700">記住我</label>
              </div>
              <a href="#" class="text-sm text-[#53b17b] hover:underline">忘記密碼？</a>
            </div>

            <!-- 登入按鈕 -->
            <button 
              type="submit"
              class="w-full bg-[#53b17b] text-white py-3 px-4 rounded-lg text-lg font-semibold hover:bg-[#449d67] transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
            >
              <span>登入</span>
              <i class="fas fa-arrow-right ml-2"></i>
            </button>
          </form>

          <!-- 分隔線 -->
          <div class="relative mt-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">或</span>
            </div>
          </div>

          <!-- 註冊連結 -->
          <div class="mt-6 text-center">
            <p class="text-gray-600">
              還沒有帳戶？
              <a href="/register" class="text-[#53b17b] hover:underline font-medium">立即註冊</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const authStore = useAuthStore()

const handleLogin = async () => {
  try {
    await authStore.login({ email: email.value, password: password.value })
    // 根據用戶角色跳轉或提示
  } catch (error) {
    console.error('登錄失敗：', error)
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
