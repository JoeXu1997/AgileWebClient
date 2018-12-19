<template>
  <div>
    <div class="hero">
      <p>{{this.username}}</p>
      <p>YOUR USERTYPE IS {{this.usertype}}</p><br>
      <label>Here are your comments!</label>
      <v-client-table :columns="columns" :data="comments" :options="options">
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x"  @click="deleteComment(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import userservice from '@/services/userservices'
import commentservice from '@/services/commentservices'

export default {
  name: 'UserProfile',
  data () {
    return {
      username: '',
      usertype: '',
      comments: [],
      errors: [],
      columns: ['_id', 'date', 'commentfor', 'content', 'remove'],
      options: {
        headings: {
          _id: 'ID',
          date: 'Comment Time',
          commentfor: 'Movie Name',
          content: 'Conetent'
        }
      }
    }
  },
  created () {
    this.showUserInfo()
    this.loadComments()
  },
  methods: {
    showUserInfo: function () {
      var username = firebase.auth().currentUser.email
      userservice.fetchOneUser(username)
        .then(user => {
          if (user) {
            this.usertype = user.data.usertype
            this.username = user.data.username
          }
        })
    },
    deleteComment: function (id) {
      commentservice.removeComment(id)
        .then(response => {
          console.log('remove successfully')
          this.loadComments()
        })
    },
    loadComments: function () {
      commentservice.fetchCommentsByUser(firebase.auth().currentUser.email)
        .then(response => {
          // JSON responses are automatically parsed.
          this.comments = response.data
          console.log(this.comments)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style type="text/css">
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  p {
    font-size: 20px;
    text-align: center;
  }
</style>
