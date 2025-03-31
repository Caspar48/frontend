export default function useApiFetch(path: string, options: any = {}) {
  const config = useRuntimeConfig()
  
  return useFetch(path, {
    baseURL: config.public.apiBase,
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    ...options
  })
}