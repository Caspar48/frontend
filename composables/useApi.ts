export const useApi = () => {
  const config = useRuntimeConfig()

  const get = async (endpoint: string) => {
    return await useFetch(`${config.public.apiBase}${endpoint}`, {
      method: 'GET',
      credentials: 'include',
    })
  }

  const post = async (endpoint: string, data: any) => {
    return await useFetch(`${config.public.apiBase}${endpoint}`, {
      method: 'POST',
      body: data,
      credentials: 'include',
    })
  }

  const put = async (endpoint: string, data: any) => {
    return await useFetch(`${config.public.apiBase}${endpoint}`, {
      method: 'PUT',
      body: data,
      credentials: 'include',
    })
  }

  const del = async (endpoint: string) => {
    return await useFetch(`${config.public.apiBase}${endpoint}`, {
      method: 'DELETE',
      credentials: 'include',
    })
  }

  return {
    get,
    post,
    put,
    del
  }
}