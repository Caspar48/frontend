<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-[#53b17b] mb-6">我的預約</h2>
    <div v-if="loading" class="text-center">載入中...</div>
    <div v-else>
      <div v-for="booking in bookings" :key="booking.id" class="bg-white shadow rounded p-4 mb-4">
        <p><strong>日期：</strong>{{ booking.date }}</p>
        <p><strong>時間：</strong>{{ booking.time }}</p>
        <p><strong>起始地：</strong>{{ booking.startLocation }}</p>
        <p><strong>目的地：</strong>{{ booking.endLocation }}</p>
        <p><strong>狀態：</strong>{{ booking.status }}</p>
        <!-- 可加入取消/修改按鈕 -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '~/utils/api'

const bookings = ref([])
const loading = ref(true)

const fetchBookings = async () => {
  try {
    const res = await api.getBookings()
    bookings.value = res.data
  } catch (error) {
    console.error('取得預約列表失敗：', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchBookings)
</script>
