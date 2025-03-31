<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold text-[#53b17b] mb-6">公司訂單管理</h2>
    <button @click="toggleAvailability"
      class="mb-4 bg-[#53b17b] text-white py-2 px-4 rounded hover:bg-[#449d67] transition">
      {{ isAvailable ? '設為不可用' : '設為可用' }}
    </button>
    <div v-if="loading" class="text-center">載入中...</div>
    <div v-else>
      <div v-for="order in orders" :key="order.id" class="bg-white shadow rounded p-4 mb-4">
        <p><strong>日期：</strong>{{ order.date }}</p>
        <p><strong>時間：</strong>{{ order.time }}</p>
        <p><strong>起始地：</strong>{{ order.startLocation }}</p>
        <p><strong>目的地：</strong>{{ order.endLocation }}</p>
        <p><strong>狀態：</strong>{{ order.status }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api } from '~/utils/api'

const orders = ref([])
const loading = ref(true)
const isAvailable = ref(true)

const fetchCompanyOrders = async () => {
  try {
    const res = await api.getCompanyBookings()
    orders.value = res.data
  } catch (error) {
    console.error('取得公司訂單列表失敗：', error)
  } finally {
    loading.value = false
  }
}

const toggleAvailability = async () => {
  try {
    isAvailable.value = !isAvailable.value
    await api.updateCompanyAvailability({ isAvailable: isAvailable.value })
    // 提示或處理成功
  } catch (error) {
    console.error('更新可用狀態失敗：', error)
  }
}

onMounted(fetchCompanyOrders)
</script>
