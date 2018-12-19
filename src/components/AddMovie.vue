<template>
  <div>
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <movie-form :movie="movie" MovieBtnTitle="Add New Movie"
                      @movie-is-created-updated="addMovie"></movie-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import movieservice from '@/services/movieservices'
import userservice from '@/services/userservices'
import movieform from '@/components/Movieform'
import firebase from 'firebase'

export default {
  data () {
    return {
      movie: {name: '', movietype: '', mainActor: '', Directedby: ''},
      messagetitle: ' Add New Movie ',
      admin: false
    }
  },
  components: {
    'movie-form': movieform
  },
  created () {
    this.checkUser()
  },
  methods: {
    checkUser: function () {
      if (firebase.auth().currentUser) {
        var username = firebase.auth().currentUser.email
        userservice.fetchOneUser(username)
          .then(user => {
            if (user) {
              this.usertype = user.data.usertype
              if (this.usertype === 'admin') {
                console.log('in')
                this.admin = true
              }
            } else console.log('user not exist')
          })
      }
      return this.admin
    },
    addMovie: function (movie) {
      if (this.admin) {
        movieservice.postMovie(movie)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      } else {
        this.$swal({
          title: 'You are NOT Admin user',
          text: 'You can\'t Undo this action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          showCloseButton: true
          // showLoaderOnConfirm: true
        })
      }
    }
  }
}
</script>
  <style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  </style>
