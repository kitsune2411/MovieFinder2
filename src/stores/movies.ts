import { defineStore } from 'pinia'
import { getTopMovies } from '@/api/movie'

interface movies {
  id: string
  title: string
  description?: string
  image: string
}

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    id: 0,
    moviesList: [] as movies[]
  }),
  actions: {
    async getTopMoviesList() {
      try {
        const TopMovies = await getTopMovies()
        if (TopMovies.status !== 200) throw TopMovies
        this.moviesList = TopMovies.data.items
      } catch (error) {
        console.error(error)
      }
    }
  }
})
