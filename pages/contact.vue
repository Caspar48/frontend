<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <!-- 主標題區域 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-[#53b17b] mb-4">聯絡我們</h1>
        <div class="w-24 h-1 bg-[#53b17b] mx-auto rounded-full"></div>
        <p class="mt-4 text-gray-600">我們隨時為您提供協助</p>
      </div>

      <!-- 聯絡資訊與表單區域 -->
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- 聯絡資訊 -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">聯絡方式</h2>
          
          <div class="flex items-start space-x-4">
              <div class="text-[#53b17b] text-xl mt-1">
                <i class="fas fa-clock"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">營業時間</h3>
                <p class="text-gray-600">24小時全天候服務</p>
              </div>
          </div>
          <br>
          <div class="flex items-start space-x-4">
            <div class="text-[#53b17b] text-xl mt-1">
                <i class="fas fa-envelope"></i>
            </div>
            <div>
                <h3 class="font-semibold text-gray-800">電子郵件</h3>
                <p class="text-gray-600">info@novatech.com</p>
            </div>
          </div>
          <br>
          <div class="flex items-start space-x-4">
              <div class="text-[#53b17b] text-xl mt-1">
                <i class="fas fa-phone"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">電話</h3>
                <p class="text-gray-600">+852 4410 6368</p>
                <p class="text-gray-600">+853 6569 9822</p>
                <p class="text-gray-600">+86  17205937438</p>
              </div>
          </div>
          <br>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="text-[#53b17b] text-xl mt-1">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">地址</h3>
                <p class="text-gray-600">珠海橫琴琴畫街D1-1110辦公室</p>
              </div>
          </div>

        </div>
      </div>

        <!-- 聯絡表單 -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">發送訊息</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">姓名</label>
              <input 
                type="text" 
                v-model="form.name"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#53b17b] focus:border-[#53b17b] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">電子郵件</label>
              <input 
                type="email" 
                v-model="form.email"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#53b17b] focus:border-[#53b17b] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">主旨</label>
              <input 
                type="text" 
                v-model="form.subject"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#53b17b] focus:border-[#53b17b] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">訊息內容</label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#53b17b] focus:border-[#53b17b] outline-none transition-colors"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full bg-[#53b17b] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#449d67] transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              發送訊息
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('表單提交：', form.value)
  // TODO: 實現表單提交邏輯
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
