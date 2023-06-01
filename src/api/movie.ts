import { reqIMDB, config } from '@/utils/axiosIMDB'

export function getMoviebyName(movieName: string) {
  return reqIMDB.get(`/SearchMovie/${config.apiKey}/${movieName}`)
}

export function getTopMovies() {
  return reqIMDB.get(`/Top250Movies/${config.apiKey}`)
}
