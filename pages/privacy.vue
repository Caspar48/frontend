<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <!-- 主標題區域 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-[#53b17b] mb-4">隱私政策</h1>
        <div class="w-24 h-1 bg-[#53b17b] mx-auto rounded-full"></div>
        <p class="mt-4 text-gray-600">最後更新日期：{{ lastUpdateDate }}</p>
      </div>

      <!-- 內容區域 -->
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div class="space-y-8">
          <!-- 介紹部分 -->
          <section class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">引言</h2>
            <p class="text-gray-700 leading-relaxed">
              我們重視您的隱私，並致力於保護您的個人資料。本隱私政策說明了我們如何收集、使用和保護您的信息。
            </p>
          </section>

          <!-- 信息收集 -->
          <section class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">信息收集</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <ul class="space-y-3">
                <li class="flex items-start space-x-3">
                  <i class="fas fa-check-circle text-[#53b17b] mt-1"></i>
                  <span class="text-gray-700">基本個人信息（姓名、電話、電子郵件）</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="fas fa-check-circle text-[#53b17b] mt-1"></i>
                  <span class="text-gray-700">預約相關信息（行程詳情、乘客人數）</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="fas fa-check-circle text-[#53b17b] mt-1"></i>
                  <span class="text-gray-700">支付相關信息</span>
                </li>
              </ul>
            </div>
          </section>

          <!-- 信息使用 -->
          <section class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">信息使用</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="p-6 bg-gray-50 rounded-lg">
                <h3 class="font-semibold text-gray-800 mb-3">主要用途</h3>
                <ul class="space-y-2 text-gray-700">
                  <li>• 處理您的預約請求</li>
                  <li>• 提供客戶支援服務</li>
                  <li>• 改進我們的服務質量</li>
                </ul>
              </div>
              <div class="p-6 bg-gray-50 rounded-lg">
                <h3 class="font-semibold text-gray-800 mb-3">其他用途</h3>
                <ul class="space-y-2 text-gray-700">
                  <li>• 發送服務更新通知</li>
                  <li>• 處理付款交易</li>
                  <li>• 進行市場研究</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- 信息保護部分 -->
          <section class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">信息保護</h2>
            <div class="bg-gradient-to-br from-white to-gray-50 border border-gray-100 p-8 rounded-xl shadow-sm">
              <div class="flex items-center mb-6">
                <i class="fas fa-shield-alt text-[#53b17b] text-2xl mr-3"></i>
                <h3 class="text-xl font-semibold text-gray-800">安全保障措施</h3>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6">
                我們採用業界標準的安全措施來保護您的個人資料：
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-[#53b17b] transition-colors duration-300">
                  <div class="flex items-center space-x-3 mb-3">
                    <div class="flex items-center space-x-3">
                      <i class="fas fa-shield-alt text-[#53b17b] text-xl"></i>
                    </div>
                    <h4 class="font-semibold text-gray-800">數據加密</h4>
                  </div>
                  <p class="text-gray-600 text-sm">
                    採用高級加密技術確保您的個人資料安全存儲
                  </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-[#53b17b] transition-colors duration-300">
                  <div class="flex items-center space-x-3 mb-3">
                    <div class="flex items-center space-x-3">
                      <i class="fas fa-lock text-[#53b17b] text-xl"></i>
                    </div>
                    <h4 class="font-semibold text-gray-800">支付安全</h4>
                  </div>
                  <p class="text-gray-600 text-sm">
                    使用安全的支付處理系統保護您的交易資料
                  </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-[#53b17b] transition-colors duration-300">
                  <div class="flex items-center space-x-3 mb-3">
                    <div>
                      <i class="fas fa-sync-alt text-[#53b17b] text-xl"></i>
                    </div>
                    <h4 class="font-semibold text-gray-800">定期審查</h4>
                  </div>
                  <p class="text-gray-600 text-sm">
                    進行定期安全審查以確保系統安全性
                  </p>
                </div>
              </div>

              <div class="mt-12 p-6 border-2 border-[#53b17b] rounded-lg">
                <div class="flex items-start space-x-3">
                  <i class="fas fa-info-circle text-[#53b17b] mt-1"></i>
                  <p class="text-sm text-gray-600">
                    我們持續更新和改進我們的安全措施，以確保您的個人資料得到最佳保護。如發現任何安全隱患，我們將立即採取必要措施。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 新增的安全措施區域 -->
          <div class="max-w-3xl mx-auto">
            <div class="bg-white rounded-xl border-2 border-[#53b17b] p-8">
              <div class="space-y-6 px-6">
                <div class="flex items-center space-x-3">
                  <i class="fas fa-shield-alt text-[#53b17b] text-xl"></i>
                  <p class="text-gray-700">數據加密：我們使用先進的加密技術保護您的個人資料。</p>
                </div>
                <div class="flex items-center space-x-3">
                  <i class="fas fa-lock text-[#53b17b] text-xl"></i>
                  <p class="text-gray-700">支付安全：所有支付信息均經過嚴格加密處理。</p>
                </div>
                <div class="flex items-center space-x-3">
                  <i class="fas fa-sync-alt text-[#53b17b] text-xl"></i>
                  <p class="text-gray-700">定期更新：我們定期更新系統安全措施。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 聯絡方式 -->
          <section class="mt-8 border-t pt-8">
            <p class="text-gray-600 text-center">
              如果您對我們的隱私政策有任何疑問，請
              <a href="/contact" class="text-[#53b17b] hover:underline">聯絡我們</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const lastUpdateDate = computed(() => {
  const today = new Date()
  // 設定為每30天更新一次
  const day = today.getDate()
  const updateDay = Math.floor(day / 30) * 30 + 1  // 確保每月1日更新
  
  const date = new Date(today.getFullYear(), today.getMonth(), updateDay)
  
  // 格式化日期為中文格式
  return `${date.getFullYear()}年${date.getMonth() + 1}月${updateDay}日`
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>