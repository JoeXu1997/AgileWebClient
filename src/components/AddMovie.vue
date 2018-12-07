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
import movieform from '@/components/Movieform'

export default {
  data () {
    return {
      movie: {name: '', movietype: '', mainActor: '', Directedby: ''},
      messagetitle: ' Add New Movie '
    }
  },
  components: {
    'movie-form': movieform
  },
  methods: {
    addMovie: function (movie) {
      movieservice.postMovie(movie)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
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
