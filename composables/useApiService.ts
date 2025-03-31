export const useApiService = () => {
  const { $axios } = useNuxtApp()

  const get = async (endpoint: string) => {
    try {
      const response = await $axios.get(endpoint)
      return { data: response.data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  const post = async (endpoint: string, data: any) => {
    try {
      const response = await $axios.post(endpoint, data)
      return { data: response.data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  return {
    get,
    post
  }
}