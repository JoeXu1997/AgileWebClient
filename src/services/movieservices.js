import Api from '@/services/api'

export default {
  fetchMovies () {
    return Api().get('/movies')
  },
  postMovie (donation) {
    return Api().post('/donations', donation,
      { headers: {'Content-type': 'application/json'} })
  },
  removeMovie (id) {
    return Api().delete(`/movies/${id}`)
  },
  fetchMovie (id) {
    return Api().get(`/donations/${id}`)
  },
  putMovie (id, donation) {
    console.log('REQUESTING ' + donation._id + ' ' +
      JSON.stringify(donation, null, 5))
    return Api().put(`/donations/change/${id}`, donation,
      { headers: {'Content-type': 'application/json'} })
  }
}
