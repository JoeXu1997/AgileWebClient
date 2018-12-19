<template>
  <div >
      <div class="movie__poster">
       <img :src="poster"/>
      </div>
      <div class="movie__details" v-if="!error">
        <h2 class="movie__title">{{movies[0].name}}</h2>
        <ul class="movie__tags list--inline">
          <li class="movie__year">{{movie.Year}}</li>
          <li class="movie__genre">{{movie.Genre}}</li>
        </ul>
        <p class="movie__plot">{{movie.Plot}}</p>
        <div class="movie__credits">
          <p><strong>Movie type:</strong>{{movies[0].movietype}}</p>
          <p><strong>Written by:</strong> {{movie.Writer}}</p>
          <p><strong>Directed by:</strong> {{movie.Director}}</p>
          <p><strong>Starring:</strong>{{movies[0].mainActor}}</p>
        </div>
      </div>
  </div>
</template>
<script>
import movieservices from '@/services/movieservices'
const key = '2fb7569a'
const url = `https://www.omdbapi.com/?apikey=${key}&t=`
export default {
  name: 'MovieDetail',
  data () {
    return {
      movie: [],
      movies: [],
      poster: ''
    }
  },
  created () {
    this.loadOneMovie()
    this.getPoster()
  },
  methods: {
    loadOneMovie: function () {
      movieservices.findMoviesByName(this.$router.params)
        .then(response => {
          this.movies = response.data
        })
    },
    getPoster: function () {
      fetch(url + this.$router.params)
        .then(res => res.json())
        .then(data => {
          this.movie = data
          this.poster = data.Poster
          console.log(this.poster)
        })
    }
  }
}
</script>

<style scoped>

  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    min-height: 100vh;
    font-family: "Lato", sans-serif;
    background-color: whitesmoke;
  }

  h1, h2, p, ul {
    line-height: 1.2;
  }
  h1:not(:last-child), h2:not(:last-child), p:not(:last-child), ul:not(:last-child) {
    margin-bottom: 12px;
  }

  p, li {
    font-size: 0.9em;
    line-height: 1.5;
  }

  p + ul {
    margin-top: -10px;
  }

  h1, h2, strong {
    font-weight: 900;
  }
</style>
