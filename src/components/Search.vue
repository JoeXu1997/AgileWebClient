<template>
  <div>
    <div id="container">
      <div class="search bar1">
      <form>
        <input id="searchValue" type="text" placeholder="MovieName/Director/MainActor">
        <button type="button" @click="findMovies"></button>
      </form>
     </div>
      <div>
        <v-client-table :columns="columns" :data="movies" :options="options">
          <a slot="detail" slot-scope="props" class="fa fa-film fa-2x"  @click="displayInfo(props.row.name)"></a>
        </v-client-table>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import movieservices from '@/services/movieservices'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Search',
  data () {
    return {
      movies: [],
      columns: ['name', 'movietype', 'mainActor', 'Directedby', 'detail'],
      options: {
        headings: {
          name: 'Movie Name',
          movietype: 'Type',
          mainActor: 'Main Actor',
          Directedby: 'Director'
        }
      }
    }
  },
  methods: {
    findMovies: function () {
      console.log(document.getElementById('searchValue').value)
      movieservices.findMoviesByName(document.getElementById('searchValue').value)
        .then(response => {
          this.movies = response.data
          console.log(this.movies)
        })
    },
    displayInfo: function (name) {
      console.log(name)
      this.$router.params = name
      this.$router.push('detail')
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
  /*Style: https://blog.csdn.net/zuncle/article/details/62888725*/
  #container {
    width: 500px;
    height: 820px;
    margin: 0 auto;
  }
  div.search {padding: 30px 0;}

  form {
    position: relative;
    width: 300px;
    margin: 0 auto;
  }

  input, button {
    border: none;
    outline: none;
  }

  input {
    width: 100%;
    height: 42px;
    padding-left: 13px;
  }

  button {
    height: 42px;
    width: 42px;
    cursor: pointer;
    position: absolute;
  }
  .bar1 input {
    border: 2px solid #7BA7AB;
    border-radius: 5px;
    background: #F9F0DA;
    color: #9E9C9C;
  }
  .bar1 button {
    top: 0;
    right: 0;
    background: #7BA7AB;
    border-radius: 0 5px 5px 0;
  }
  .bar1 button:before {
    content: "\f002";
    font-family: FontAwesome;
    font-size: 16px;
    color: #F9F0DA;
  }
</style>
