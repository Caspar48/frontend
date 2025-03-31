<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <!-- 主標題區域 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-[#53b17b] mb-4">服務條款</h1>
        <div class="w-24 h-1 bg-[#53b17b] mx-auto rounded-full"></div>
        <p class="mt-4 text-gray-600">最後更新日期：2024年3月12日</p>
      </div>

      <!-- 內容區域 -->
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div class="space-y-8">
          <!-- 簡介 -->
          <section class="space-y-4">
            <p class="text-gray-700 leading-relaxed">
              歡迎使用 NovaBooking 的服務。本服務條款規定了您使用我們服務時的權利和義務。請仔細閱讀以下內容。
            </p>
          </section>

          <!-- 預約規則 -->
          <section class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800 flex items-center">
              <i class="fas fa-calendar-alt text-[#53b17b] mr-3"></i>
              預約規則
            </h2>
            <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-8 h-8 bg-[#53b17b] bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span class="text-[#53b17b] font-semibold">1</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">預約確認</h4>
                    <p class="text-gray-600">預約成功後，您將收到確認電子郵件和短信通知。請確保提供的聯絡資訊準確無誤。</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-8 h-8 bg-[#53b17b] bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span class="text-[#53b17b] font-semibold">2</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">修改和取消</h4>
                    <p class="text-gray-600">您可以在出發前24小時免費修改或取消預約。之後的修改或取消可能會產生費用。</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0 w-8 h-8 bg-[#53b17b] bg-opacity-10 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span class="text-[#53b17b] font-semibold">3</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">準時要求</h4>
                    <p class="text-gray-600">請在預約時間前10分鐘到達指定地點。超過15分鐘未到可能被視為取消。</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <!-- 支付條款 -->
          <section class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800 flex items-center">
              <i class="fas fa-credit-card text-[#53b17b] mr-3"></i>
              支付條款
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:border-[#53b17b] transition-colors duration-300">
                <h3 class="font-semibold text-gray-800 mb-3">付款方式</h3>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-check text-[#53b17b] mr-2"></i>
                    信用卡支付
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-check text-[#53b17b] mr-2"></i>
                    電子錢包
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-check text-[#53b17b] mr-2"></i>
                    現金支付
                  </li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:border-[#53b17b] transition-colors duration-300">
                <h3 class="font-semibold text-gray-800 mb-3">退款政策</h3>
                <ul class="space-y-2">
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-clock text-[#53b17b] mr-2"></i>
                    24小時內取消全額退款
                  </li>
                  <li class="flex items-center text-gray-600">
                    <i class="fas fa-clock text-[#53b17b] mr-2"></i>
                    12小時內取消退款50%
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <!-- 服務保證 -->
          <section class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800 flex items-center">
              <i class="fas fa-award text-[#53b17b] mr-3"></i>
              服務保證
            </h2>
            <div class="bg-[#53b17b] bg-opacity-5 p-6 rounded-lg border border-[#53b17b] border-opacity-20">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="text-center">
                  <i class="fas fa-car text-[#53b17b] text-2xl mb-3"></i>
                  <h4 class="font-semibold text-gray-800 mb-2">車輛品質</h4>
                  <p class="text-sm text-gray-600">所有車輛定期維護，確保安全舒適</p>
                </div>
                <div class="text-center">
                  <i class="fas fa-user-tie text-[#53b17b] text-2xl mb-3"></i>
                  <h4 class="font-semibold text-gray-800 mb-2">專業司機</h4>
                  <p class="text-sm text-gray-600">經驗豐富的專業司機團隊</p>
                </div>
                <div class="text-center">
                  <i class="fas fa-headset text-[#53b17b] text-2xl mb-3"></i>
                  <h4 class="font-semibold text-gray-800 mb-2">全天候支援</h4>
                  <p class="text-sm text-gray-600">24/7客戶服務支援</p>
                </div>
              </div>
            </div>
          </section>

          <!-- 免責聲明 -->
          <section class="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 class="text-xl font-bold text-gray-800 mb-4">免責聲明</h2>
            <p class="text-gray-600 text-sm leading-relaxed">
              本公司保留在必要時修改服務條款的權利。如有任何更改，我們將通過網站或電子郵件通知您。繼續使用我們的服務即表示您同意這些條款。
            </p>
          </section>

          <!-- 聯絡方式 -->
          <section class="mt-8 border-t pt-8">
            <p class="text-gray-600 text-center">
              如有任何疑問，請
              <a href="/contact" class="text-[#53b17b] hover:underline">聯絡我們</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>