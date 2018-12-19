import Api from '@/services/api'

export default {
  fetchComments (commentfor) {
    return Api().get(`/comment/movie/${commentfor}`)
  },
  fetchCommentsByUser (username) {
    return Api().get(`/comment/${username}`)
  },
  addComment (comment) {
    return Api().post('/comment', comment,
      { headers: {'Content-type': 'application/json'} })
  },
  removeComment (id) {
    return Api().delete(`/comment/${id}`)
  }
}
