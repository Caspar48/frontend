<template>
    <nav class="bg-white shadow-lg">
      <div class="container mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo 和品牌名稱 -->
        <div class="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
          <img 
            src="@/assets/images/logo.png" 
            alt="NovaBooking Logo" 
            class="h-12 w-auto"
          />
          <a href="/" class="text-2xl font-bold text-[#53b17b]">小花專線</a>
        </div>
        <!-- 桌機版選單 -->
        <div class="hidden md:flex space-x-8 ml-auto mr-8">
          <a href="/" class="text-gray-600 hover:text-[#53b17b] font-medium transition-colors duration-300">首頁</a>
          <a href="/about" class="text-gray-600 hover:text-[#53b17b] font-medium transition-colors duration-300">關於我們</a>
          <a href="/contact" class="text-gray-600 hover:text-[#53b17b] font-medium transition-colors duration-300">聯繫我們</a>
        </div>
        <!-- 用戶操作 -->
        <div class="hidden md:flex space-x-4">
          <a href="/login" class="px-4 py-2 text-[#53b17b] border-2 border-[#53b17b] rounded-lg hover:bg-[#53b17b] hover:text-white transition-colors duration-300">登錄</a>
          <a href="/register" class="px-4 py-2 bg-[#53b17b] text-white border-2 border-[#53b17b] rounded-lg hover:bg-[#449d67] hover:border-[#449d67] transition-colors duration-300">註冊</a>
        </div>
        <!-- 行動裝置選單按鈕 -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden text-gray-600 focus:outline-none hover:text-[#53b17b] transition-colors duration-300">
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <!-- 行動裝置選單 -->
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="px-6 pt-2 pb-4 space-y-3 bg-gray-50">
          <a href="/" class="block text-gray-600 hover:text-[#53b17b] transition-colors duration-300 py-2">首頁</a>
          <a href="/about" class="block text-gray-600 hover:text-[#53b17b] transition-colors duration-300 py-2">關於我們</a>
          <a href="/contact" class="block text-gray-600 hover:text-[#53b17b] transition-colors duration-300 py-2">聯繫我們</a>
          <div class="pt-2 space-y-3">
            <a href="/login" class="block text-center px-4 py-2 text-[#53b17b] border-2 border-[#53b17b] rounded-lg hover:bg-[#53b17b] hover:text-white transition-colors duration-300">登錄</a>
            <a href="/register" class="block text-center px-4 py-2 bg-[#53b17b] text-white border-2 border-[#53b17b] rounded-lg hover:bg-[#449d67] hover:border-[#449d67] transition-colors duration-300">註冊</a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
const isMobileMenuOpen = ref(false)
</script>
