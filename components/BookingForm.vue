<template>
  <div class="bg-white shadow-2xl rounded-xl p-8 mt-10 max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold text-center text-[#53b17b] mb-8">預約服務</h2>
    <form @submit.prevent="handleSubmit" class="space-y-8">
      <!-- 1. 起始地與目的地 (最先填寫的基本信息) -->
      <div class="space-y-6">
        <div class="relative group">
          <label class="block text-gray-700 text-sm font-semibold mb-2">起始地</label>
          <div class="relative">
            <input 
              type="text"
              v-model="booking.startLocation"
              class="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 pl-10"
              placeholder="請輸入上車地點"
              required 
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fas fa-map-marker-alt text-gray-400"></i>
            </div>
          </div>
        </div>
        <div class="relative group">
          <label class="block text-gray-700 text-sm font-semibold mb-2">目的地</label>
          <div class="relative">
            <input 
              type="text"
              v-model="booking.endLocation"
              class="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 pl-10"
              placeholder="請輸入下車地點"
              required 
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fas fa-map-marker text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. 日期與時間 (第二重要的信息) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="relative group">
          <label class="block text-gray-700 text-sm font-semibold mb-2">預約日期</label>
          <div class="relative">
            <input 
              type="date" 
              v-model="booking.date"
              :min="minDate"
              class="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 appearance-none pr-10 cursor-pointer"
              required 
            />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <i class="fas fa-calendar-alt text-gray-400"></i>
            </div>
          </div>
          <p class="mt-1 text-xs text-gray-500">請選擇預約日期</p>
        </div>
        <div class="relative group">
          <label class="block text-gray-700 text-sm font-semibold mb-2">預約時間</label>
          <div class="flex space-x-2 items-center">
            <!-- 小時選擇 -->
            <div class="relative flex-1">
              <select 
                v-model="booking.hour"
                class="w-full border-2 border-gray-200 p-3 rounded-l-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 appearance-none"
                required 
              >
                <option value="" disabled>時</option>
                <option v-for="hour in 12" :key="hour" :value="hour">
                  {{ hour.toString().padStart(2, '0') }}
                </option>
              </select>
              <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">:</span>
            </div>

            <!-- 分鐘選擇 -->
            <div class="relative flex-1">
              <select 
                v-model="booking.minute"
                class="w-full border-y-2 border-gray-200 p-3 focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 appearance-none"
                required 
              >
                <option value="" disabled>分</option>
                <option v-for="minute in ['00', '15', '30', '45']" :key="minute" :value="minute">
                  {{ minute }}
                </option>
              </select>
            </div>

            <!-- AM/PM 選擇 -->
            <div class="relative w-20">
              <select 
                v-model="booking.period"
                class="w-full border-2 border-gray-200 p-3 rounded-r-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 appearance-none"
                required 
              >
                <option value="" disabled>選擇</option>
                <option value="AM">上午</option>
                <option value="PM">下午</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fas fa-clock text-gray-400"></i>
              </div>
            </div>
          </div>
          <p class="mt-1 text-xs text-gray-500">請選擇預約時段</p>
        </div>
      </div>

      <!-- 3. 乘客與行李信息 (服務細節) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="relative group">
          <label class="block text-gray-700 text-sm font-semibold mb-2">乘客人數</label>
          <div class="relative">
            <input 
              type="number"
              v-model="booking.passengers"
              :max="maxPassengers"
              min="1"
              class="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 pr-8"
              required 
            />
            <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">人</span>
          </div>
          <p class="mt-1 text-xs text-gray-500">最多 {{ maxPassengers }} 人</p>
        </div>
        <div class="relative group">
          <label class="block text-gray-700 text-sm font-semibold mb-2">行李件數</label>
          <div class="relative">
            <input 
              type="number"
              v-model="booking.luggage"
              min="0"
              max="4"
              class="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 pr-8"
              required 
            />
            <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">件</span>
          </div>
          <p class="mt-1 text-xs text-gray-500">
            {{ booking.luggage > 2 ? `額外行李將減少可載人數（目前可載 ${maxPassengers} 人）` : '最多 4 件' }}
          </p>
        </div>
      </div>

      <!-- 4. 聯絡資訊 (最後填寫的個人信息) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="relative group">
          <label class="block text-gray-700 text-sm font-semibold mb-2">電子郵件</label>
          <div class="relative">
            <input 
              type="email"
              v-model="booking.email"
              class="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 pl-10"
              placeholder="example@email.com"
            />
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <i class="fas fa-envelope text-gray-400"></i>
            </div>
          </div>
        </div>
        <div class="relative group">
          <label class="block text-gray-700 text-sm font-semibold mb-2">聯絡電話</label>
          <div class="flex space-x-2">
            <div class="relative w-28">
              <select 
                v-model="booking.phonePrefix"
                class="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200 appearance-none"
              >
                <option value="+86">+86</option>
                <option value="+852">+852</option>
                <option value="+853">+853</option>
                <option value="other">其他</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fas fa-chevron-down text-gray-400 text-xs"></i>
              </div>
            </div>
            <input 
              type="tel"
              v-model="booking.phone"
              class="flex-1 border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#53b17b] focus:ring-2 focus:ring-[#53b17b] focus:ring-opacity-20 transition-all duration-200"
              placeholder="請輸入電話號碼"
            />
          </div>
        </div>
      </div>

      <!-- 5. 提交按鈕 -->
      <div class="flex justify-center">
        <button 
          type="submit"
          class="w-1/2 bg-[#53b17b] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-[#449d67] transform transition-all duration-200 shadow-md hover:shadow-lg relative border-2 border-transparent"
          :class="{
            'animate-pulse-strong': isValidForm,
            'hover:scale-[1.02]': isValidForm
          }"
        >
          <div class="flex items-center justify-center">
            <span>確認預約</span>
          </div>
          <i 
            class="fas fa-check-circle absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-500" 
            :class="{
              'opacity-0': !isValidForm,
              'opacity-100 animate-bounce': isValidForm
            }"
          ></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const booking = ref({
  date: '',
  hour: '',
  minute: '',
  period: '',
  passengers: 1,
  luggage: 0,
  startLocation: '',
  endLocation: '',
  email: '',
  phonePrefix: '+86',
  phone: ''
})

// 取得今天日期作為最小可選日期
const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

// 計算完整時間字串
const formattedTime = computed(() => {
  if (!booking.value.hour || !booking.value.minute || !booking.value.period) {
    return ''
  }
  
  let hour = parseInt(booking.value.hour)
  if (booking.value.period === 'PM' && hour !== 12) {
    hour += 12
  } else if (booking.value.period === 'AM' && hour === 12) {
    hour = 0
  }
  
  return `${hour.toString().padStart(2, '0')}:${booking.value.minute}`
})

// 計算最大乘客數
const maxPassengers = computed(() => {
  const baseMax = 6
  const extraLuggage = Math.max(0, booking.value.luggage - 2)
  return Math.max(1, baseMax - extraLuggage)
})

// 監聽行李件數變化，確保乘客數不超過最大值
watch(() => booking.value.luggage, (newValue) => {
  if (booking.value.passengers > maxPassengers.value) {
    booking.value.passengers = maxPassengers.value
  }
})

// 聯絡方式驗證
const isValidContact = computed(() => {
  return booking.value.email || (booking.value.phonePrefix && booking.value.phone)
})

// 表單驗證
const isValidForm = computed(() => {
  const requiredFields = 
    booking.value.date && 
    booking.value.hour && 
    booking.value.minute && 
    booking.value.period && 
    booking.value.passengers && 
    booking.value.startLocation && 
    booking.value.endLocation

  return requiredFields && isValidContact.value
})

// 在 handleSubmit 函数内替换 console.log
const handleSubmit = async () => {
  if (!isValidForm.value) {
    alert('請填寫必要的預約信息');
    return;
  }

  try {
    const response = await $fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      body: {
        ...booking.value,
        time: formattedTime.value
      }
    });
    alert('預約成功！');
  } catch (err) {
    alert(`預約失敗: ${err.data?.message || err.message}`);
  }
};
</script>

<style scoped>
/* 自定義日期選擇器的樣式 */
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

/* 移除 Safari 上的預設樣式 */
input[type="date"]::-webkit-date-and-time-value {
  text-align: left;
}

/* 移除 Firefox 上的預設樣式 */
input[type="date"] {
  text-align: left;
}

/* 新增動畫效果 */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-2px); }
  40%, 80% { transform: translateX(2px); }
}

.animate-shake {
  animation: shake 0.5s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-25%); }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

/* 確保 email 圖標不會與 placeholder 重疊 */
input[type="email"] {
  padding-left: 2.5rem;
}

/* 提交按鈕 hover 效果 */
button[type="submit"]:hover {
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
}

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

/* 移除之前的 pulseWithBorder 動畫 */
/* @keyframes pulseWithBorder {
  0%, 100% { 
    opacity: 1;
    border-color: transparent;
  }
  50% { 
    opacity: 0.95;
    border-color: #53b17b;
    box-shadow: 0 0 20px rgba(83, 177, 123, 0.6);
  }
}

.animate-pulse-with-border {
  animation: pulseWithBorder 1.5s ease-in-out infinite;
} */
</style>