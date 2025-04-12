const apiUrl = import.meta.env.VITE_API_URL

export const fetchJokes = (category: string): Promise<Response> => {
  if (category === 'random') {
    return fetch(`${apiUrl}/random/10`)
  } else if (category === 'programming') {
    return fetch(`${apiUrl}/programming/ten`)
  }
  return Promise.reject(new Error(`Invalid category: ${category}`))
}
