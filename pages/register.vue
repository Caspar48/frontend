<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <div class="flex-grow flex items-center justify-center py-12 px-4">
      <div class="w-full max-w-md">
        <!-- 添加錯誤提示 -->
        <div v-if="error || authStore.error" 
             class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {{ error || authStore.error }}
        </div>

        <!-- 註冊表單卡片 -->
        <div class="bg-white p-8 rounded-xl shadow-lg">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-[#53b17b]">創建您的帳戶</h2>
            <p class="mt-2 text-gray-600">開始您的旅程</p>
          </div>

          <form @submit.prevent="handleRegister" class="space-y-6">
            <!-- 電子郵件輸入框 -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">電子郵件</label>
              <div class="relative">
                <input 
                  v-model="form.email" 
                  type="email" 
                  class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#53b17b] focus:border-[#53b17b] outline-none transition-colors"
                  required 
                  placeholder="example@email.com"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-envelope text-gray-400"></i>
                </div>
              </div>
            </div>

            <!-- 密碼輸入框 -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">密碼</label>
              <div class="relative">
                <input 
                  v-model="form.password" 
                  :type="showPassword ? 'text' : 'password'"
                  class="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#53b17b] focus:border-[#53b17b] outline-none transition-colors"
                  required 
                  placeholder="至少8個字符"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i class="fas fa-lock text-gray-400"></i>
                </div>
                <button 
                  type="button"
                  @click="togglePassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </button>
              </div>
              <div class="flex space-x-2 mt-1">
                <div class="flex-1 h-1 rounded-full" :class="[passwordStrength >= 1 ? 'bg-red-400' : 'bg-gray-200']"></div>
                <div class="flex-1 h-1 rounded-full" :class="[passwordStrength >= 2 ? 'bg-yellow-400' : 'bg-gray-200']"></div>
                <div class="flex-1 h-1 rounded-full" :class="[passwordStrength >= 3 ? 'bg-green-400' : 'bg-gray-200']"></div>
              </div>
              <p class="text-xs text-gray-500">密碼強度：{{ passwordStrengthText }}</p>
            </div>

            <!-- 用戶類型選擇 -->
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">您是</label>
              <div class="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  @click="form.userType = 'passenger'"
                  class="group p-4 border-2 rounded-lg flex flex-col items-center transition-all duration-200"
                  :class="[
                    form.userType === 'passenger' 
                      ? 'border-[#53b17b] shadow-sm' 
                      : 'border-gray-200 hover:border-[#53b17b]'
                  ]"
                >
                  <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <i class="fas fa-user text-2xl text-gray-400"></i>
                  </div>
                  <span class="text-sm font-medium transition-colors"
                    :class="[
                      form.userType === 'passenger' ? 'text-[#53b17b]' : 'text-gray-600 group-hover:text-[#53b17b]'
                    ]"
                  >乘客</span>
                </button>

                <button
                  type="button"
                  @click="form.userType = 'driver'"
                  class="group p-4 border-2 rounded-lg flex flex-col items-center transition-all duration-200"
                  :class="[
                    form.userType === 'driver' 
                      ? 'border-[#53b17b] shadow-sm' 
                      : 'border-gray-200 hover:border-[#53b17b]'
                  ]"
                >
                  <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                    <i class="fas fa-car text-2xl text-gray-400"></i>
                  </div>
                  <span class="text-sm font-medium transition-colors"
                    :class="[
                      form.userType === 'driver' ? 'text-[#53b17b]' : 'text-gray-600 group-hover:text-[#53b17b]'
                    ]"
                  >司機</span>
                </button>
              </div>
            </div>

            <!-- 服務條款 -->
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  v-model="form.agreeToTerms"
                  type="checkbox"
                  class="h-4 w-4 text-[#53b17b] border-gray-300 rounded focus:ring-[#53b17b]"
                  required
                />
              </div>
              <label class="ml-2 block text-sm text-gray-500">
                我同意
                <a href="/terms" class="text-[#53b17b] hover:underline">服務條款</a>
                和
                <a href="/privacy" class="text-[#53b17b] hover:underline">隱私政策</a>
              </label>
            </div>

            <!-- 註冊按鈕 -->
            <button 
              type="submit"
              :disabled="authStore.loading"
              class="w-full bg-[#53b17b] text-white py-3 px-4 rounded-lg text-lg font-semibold transform transition-all duration-200 shadow-md hover:shadow-lg relative border-2 border-transparent"
              :class="{
                'animate-pulse-strong': isFormValid && !authStore.loading,
                'hover:scale-[1.02]': isFormValid && !authStore.loading,
                'opacity-75 cursor-not-allowed': authStore.loading
              }"
            >
              <div class="flex items-center justify-center">
                <span>{{ authStore.loading ? '註冊中...' : '立即註冊' }}</span>
                <i v-if="!authStore.loading" class="fas fa-arrow-right ml-2"></i>
                <i v-else class="fas fa-spinner fa-spin ml-2"></i>
              </div>
            </button>

            <!-- 分隔線 -->
            <div class="relative mt-8">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">已經有帳戶？</span>
              </div>
            </div>

            <!-- 登入連結 -->
            <div class="mt-6 text-center">
              <a href="/login" class="text-[#53b17b] hover:underline font-medium">
                登入您的帳戶
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from '#app'

const router = useRouter()
const authStore = useAuthStore()
const error = ref(null)

const form = ref({
  email: '',
  password: '',
  userType: 'passenger',
  agreeToTerms: false
})

const showPassword = ref(false)
const passwordStrength = ref(0)

// 切換密碼顯示/隱藏
const togglePassword = () => {
  showPassword.value = !showPassword.value
}

// 計算密碼強度
const calculatePasswordStrength = (password) => {
  let strength = 0
  if (password.length >= 8) strength++
  if (password.match(/[A-Z]/) && password.match(/[a-z]/)) strength++
  if (password.match(/[0-9]/) || password.match(/[^A-Za-z0-9]/)) strength++
  return strength
}

// 密碼強度文字描述
const passwordStrengthText = computed(() => {
  switch (passwordStrength.value) {
    case 0: return '弱'
    case 1: return '中等'
    case 2: return '強'
    case 3: return '非常強'
    default: return '弱'
  }
})

// 監聽密碼變化
watch(() => form.value.password, (newPassword) => {
  passwordStrength.value = calculatePasswordStrength(newPassword)
})

// 表單驗證 (只檢查email和password)
const isFormValid = computed(() => {
  return form.value.email &&
         form.value.password.length >= 8
})

// 修改處理註冊函數
const handleRegister = async () => {
  if (!isFormValid.value) return
  
  try {
    error.value = null
    await authStore.register({
      email: form.value.email,
      password: form.value.password,
      role: form.value.userType === 'passenger' ? 'customer' : 'driver'
    })
    
    // 註冊成功後跳轉
    router.push('/dashboard')
  } catch (err) {
    error.value = err.response?.data?.msg || '註冊失敗，請稍後再試'
  }
}
</script>

<style scoped>
@keyframes pulseStrong {
  0%, 100% { 
    opacity: 1;
    background-color: #53b17b;
    border-color: transparent;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  50% { 
    opacity: 0.9;
    background-color: #449d67;
    border-color: #53b17b;
    box-shadow: 0 0 30px rgba(83, 177, 123, 0.8);
  }
}

.animate-pulse-strong {
  animation: pulseStrong 1s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-25%); }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
