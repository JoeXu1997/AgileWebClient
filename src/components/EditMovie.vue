<template>
  <div>
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <movie-form :movie="movie" MovieBtnTitle="Update Movie Information" @movie-is-created-updated="updateMovie"></movie-form>
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
      childDataLoaded: false,
      movie: {},
      temp: {},
      messagetitle: 'Update Movie Information'
    }
  },
  components: {
    'movie-form': movieform
  },
  created () {
    this.getDonation()
  },
  methods: {
    getDonation: function () {
      movieservice.fetchOneMovie(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.movie = this.temp[0]
          this.childDataLoaded = true
          console.log('get' + JSON.stringify(this.movie, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateMovie: function (movie) {
      movieservice.putMovie(this.$router.params, movie)
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
