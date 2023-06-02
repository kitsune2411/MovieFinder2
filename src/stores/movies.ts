import { defineStore } from 'pinia'
import { getTopMovies } from '@/api/movie'
import { type movies } from '@/types'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    id: 0,
    moviesList: [] as movies[]
  }),
  actions: {
    async getTopMoviesList() {
      try {
        const TopMovies = await getTopMovies()
        const isError = TopMovies.status !== 200 && TopMovies.data.errorMessage !== ''
        if (isError) throw TopMovies
        this.moviesList = TopMovies.data.items
      } catch (error) {
        console.error(error)
      }
    }
  }
})
