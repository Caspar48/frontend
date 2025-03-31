<template>
  <div class="min-h-screen bg-gray-50">
    <section class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center text-[#53b17b] mb-8">
        頂尖接送服務
      </h1>
      <!-- 預約表單 -->
      <BookingForm />
    </section>
  </div>
</template>

<script setup>
import BookingForm from '~/components/BookingForm.vue'
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
