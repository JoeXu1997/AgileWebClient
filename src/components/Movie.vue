<template>
  <div >
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <v-client-table :columns="columns" :data="movies" :options="options">
      <a slot="comment" slot-scope="props" class="fa fa-comment fa-2x" @click="commentMovie(props.row.name)"></a>
      <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" v-show="checkUser()" @click="editMovie(props.row._id)"></a>
      <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" v-show="checkUser()" @click="deleteMovie(props.row._id)"></a>
    </v-client-table>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import movieservices from '@/services/movieservices'
import userservice from '@/services/userservices'
import firebase from 'firebase'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Movies',
  data () {
    return {
      messagetitle: ' Movies Vote Rank ',
      admin: false,
      usertype: '',
      movies: [],
      errors: [],
      columns: ['_id', 'name', 'movietype', 'mainActor', 'Directedby', 'comment', 'edit', 'remove'],
      options: {
        headings: {
          _id: 'ID',
          name: 'Movie Name',
          movietype: 'Type',
          mainActor: 'Main Actor',
          Directedby: 'Director'
        }
      }
    }
  },
  created () {
    this.loadMovies()
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
    loadMovies: function () {
      movieservices.fetchMovies()
        .then(response => {
          // JSON responses are automatically parsed.
          this.movies = response.data
          console.log(this.movies)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    commentMovie: function (name) {
      this.$router.params = name
      this.$router.push('comment')
    },
    editMovie: function (id) {
      this.$router.params = id
      this.$router.push('editMovie')
    },
    deleteMovie: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          movieservices.removeMovie(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadMovies()
              console.log('done')
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Movie ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Your Movie still Counts!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
    color: aliceblue;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
