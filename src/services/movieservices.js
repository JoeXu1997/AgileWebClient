import Api from '@/services/api'

export default {
  fetchMovies () {
    return Api().get('/movies')
  },
  postMovie (movie) {
    return Api().post('/addmoviestest', movie,
      { headers: {'Content-type': 'application/json'} })
  },
  removeMovie (id) {
    return Api().delete(`/movies/${id}`)
  },
  fetchOneMovie (id) {
    return Api().get(`/movie/${id}`)
  },
  putMovie (id, movie) {
    console.log('REQUESTING ' + movie._id + ' ' +
      JSON.stringify(movie, null, 5))
    return Api().put(`/movie/change/${id}`, movie,
      { headers: {'Content-type': 'application/json'} })
  }
}
