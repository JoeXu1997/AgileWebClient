import Api from '@/services/api'

export default {
  fetchOneUser (username) {
    return Api().get(`/usr/myself/${username}`)
  },
  addUser (user) {
    return Api().post('/usr', user,
      { headers: {'Content-type': 'application/json'} })
  },
  removeMovie (id) {
    return Api().delete(`/movies/${id}`)
  }
}
