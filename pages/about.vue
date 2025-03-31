<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <!-- 主標題區域 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-[#53b17b] mb-4">關於我們</h1>
        <div class="w-24 h-1 bg-[#53b17b] mx-auto rounded-full"></div>
      </div>

      <!-- 內容區域 -->
      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <!-- 主要介紹 -->
          <p class="text-gray-700 text-lg leading-relaxed">
            我們致力於提供專業且可靠的跨境接送服務，無論是商務出行或私人旅遊，都能滿足您的需求。憑藉先進的預約系統和優質的客服團隊，我們確保每一趟行程都準時、安全且舒適。
          </p>

          <!-- 服務特點 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="text-center p-6 bg-gray-50 rounded-lg">
              <div class="text-[#53b17b] text-4xl mb-4">
                <i class="fas fa-car"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">專業車隊</h3>
              <p class="text-gray-600">配備現代化車輛，確保舒適安全的乘車體驗</p>
            </div>

            <div class="text-center p-6 bg-gray-50 rounded-lg">
              <div class="text-[#53b17b] text-4xl mb-4">
                <i class="fas fa-clock"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">準時可靠</h3>
              <p class="text-gray-600">嚴格的時間管理，保證準時接送</p>
            </div>

            <div class="text-center p-6 bg-gray-50 rounded-lg">
              <div class="text-[#53b17b] text-4xl mb-4">
                <i class="fas fa-headset"></i>
              </div>
              <h3 class="text-xl font-semibold text-gray-800 mb-2">24/7 支援</h3>
              <p class="text-gray-600">全天候客服支援，解決您的任何疑問</p>
            </div>
          </div>

          <!-- 服務承諾 -->
          <div class="mt-12 p-6 border-2 border-[#53b17b] rounded-lg">
            <h3 class="text-2xl font-bold text-[#53b17b] mb-4">我們的承諾</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <i class="fas fa-check-circle text-[#53b17b] mr-3"></i>
                <span class="text-gray-700">提供最優質的跨境接送服務</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check-circle text-[#53b17b] mr-3"></i>
                <span class="text-gray-700">確保乘客安全舒適的乘車體驗</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check-circle text-[#53b17b] mr-3"></i>
                <span class="text-gray-700">靈活的預約系統滿足不同需求</span>
              </li>
            </ul>
          </div>

          <!-- 聯絡資訊 -->
          <div class="mt-12 text-center">
            <p class="text-gray-600">
              如有任何疑問，請隨時
              <a href="/contact" class="text-[#53b17b] hover:underline">聯絡我們</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 可以添加需要的邏輯
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
