<template>
  <div>
    <div class="hero">
      <h3>Comments for {{name}}</h3>
      <div v-show="comments.length===0">
        <p style="font-size: 15px">NO COMMENTS RIGHT NOW! WRITE SOMETHING!</p>
      </div >
      <div>
        <textarea v-model="content" class="textarea" placeholder="Brief Comment"></textarea><br/>
        <button class="button" @click="comment">Submit</button><br/>
      </div>
      <br>
      <div>
        <table class="table table-striped">
          <thead>
          <tr>
            <th scope="col">_id</th>
            <th scope="col">Time</th>
            <th scope="col">Username</th>
            <th scope="col">Content</th>
          </tr>
          </thead>
          <tbody v-for="(comment, index) in comments" :key="index">
          <td>{{comment._id}}</td>
          <th scope="date">{{comment.date}}</th>
          <td>{{comment.username}}</td>
          <td>{{comment.content}}</td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import commentservice from '@/services/commentservices'
import firebase from 'firebase'
export default {
  name: 'Comment',
  data () {
    return {
      username: '',
      content: '',
      name: '',
      comments: [],
      loginuser: '',
      delete: false
    }
  },
  created () {
    this.name = this.$router.params
    this.loadComments()
  },
  methods: {
    loadComments: function () {
      commentservice.fetchComments(this.$router.params)
        .then(response => {
          this.comments = response.data
        })
    },
    comment: function () {
      if (firebase.auth().currentUser) {
        var comment = {
          commentfor: this.name,
          username: firebase.auth().currentUser.email,
          content: this.content
        }
        commentservice.addComment(comment)
          .then(response => {
            console.log(response.data)
          })
        this.loadComments()
      } else {
        this.$swal({
          title: 'You need to login first!',
          text: 'You can\'t do this action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'OK, Go login',
          cancelButtonText: 'No, thx',
          showCloseButton: true
          // showLoaderOnConfirm: true
        }).then((result) => {
          if (result.value === true) {
            this.$router.replace('login')
          } else this.$router.replace('/')
        })
      }
    }
  }
}
</script>s

<style scoped>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .reply {
    margin-top: 0px;
  }
  li {
    transition: .5s;
    overflow: hidden;
  }
  .textarea{
    width: 540px;
    height: 80px;
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
  }
  .handle a {
    display: block;
    text-decoration: none;
  }
  .button {
    width: 170px;
    height: 40px;
    border-width: 0px;
    border-radius: 3px;
    background: #1E90FF;
    cursor: pointer;
    outline: none;
    color: white;
    font-size: 17px;
  }
  .button:hover {
    background: #5599FF;
  }
</style>
