import axios from 'axios'

export const config = {
  baseURL: 'https://imdb-api.com',
  apiKey: import.meta.env.VITE_IMDB_API_KEY,
  lang: 'en',
  timeout: 5000 // 5 second
}

export const reqIMDB = axios.create({
  baseURL: `${config.baseURL}/en/API`,
  timeout: config.timeout
})
