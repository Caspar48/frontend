<script setup lang="ts">
const api = useApiService()

// 使用示例
const fetchData = async () => {
  const { data, error } = await api.get('/users')
  if (error) {
    console.error('Error fetching users:', error)
    return
  }
  console.log('Users:', data)
}
</script>

<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
  </div>
</template>