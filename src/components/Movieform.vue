<template>
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Movie Name</label>
      <input class="form__input" placeholder="Movie Name" v-model.trim="$v.name.$model"/>
    </div>
    <div class="error" v-if="!$v.name.required">Name is Required</div>

    <div class="form-group">
      <label class="form-label">Select Movie Type</label>
      <select id="movietype" name="movietype" class="form-control"
              type="text" v-model="movietype">
        <option value="null" selected disabled hidden>Choose Movie Type</option>
        <option value="Horror">Horror</option>
        <option value="Comedy">Comedy</option>
        <option value="Document">Document</option>
        <option value="ScienceFiction">ScienceFiction</option>
        <option value="Suspense">Suspense</option>
        <option value="Romance">Romance</option>
        <option value="Children">Children</option>
        <option value="Sports">Sports</option>
        <option value="Others">Others</option>
      </select>
    </div>

    <div class="form-group" :class="{ 'form-group--error': $v.mainActor.$error }">
      <label class="form__label">Main Actor</label>
      <input class="form__input" placeholder="Main Actor(only one, null is accrpted if that is Documentary )" v-model.trim="$v.mainActor.$model"/>
    </div>
    <div class="error" v-if="!$v.mainActor.required">Actor is Required(even null)</div>

    <div class="form-group" :class="{ 'form-group--error': $v.Directedby.$error }">
      <label class="form__label">Director</label>
      <input class="form__input" placeholder="Director" v-model.trim="$v.Directedby.$model"/>
    </div>
    <div class="error" v-if="!$v.Directedby.required">Director is Required</div>

    <div class="form-group" :class="{ 'form-group--error': $v.description.$error }">
      <label class="form__label">Description</label>
      <textarea class="textarea" placeholder="Brief Description" v-model.trim="$v.description.$model"/>
    </div>
    <div class="error" v-if="!$v.description.required">Description is Required</div>

    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ MovieBtnTitle }}</button>
    </p>
    <p>
      <a href="#/movie" class="btn btn-primary btn1" role="button">Manage Movies</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Add Successfully!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Add...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['MovieBtnTitle', 'movie'],
  data () {
    return {
      messagetitle: ' AddMovie ',
      name: this.movie.name,
      movietype: this.movie.movietype,
      mainActor: this.movie.mainActor,
      Directedby: this.movie.Directedby,
      description: this.movie.description,
      upvotes: 0,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required
    },
    movietype: {
      required
    },
    mainActor: {
      required
    },
    Directedby: {
      required
    },
    description: {
      required
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var movie = {
            name: this.name,
            movietype: this.movietype,
            mainActor: this.mainActor,
            Directedby: this.Directedby,
            description: this.description
          }
          this.movie = movie
          console.log('Submitting in DonationForm : ' +
              JSON.stringify(this.movie, null, 5))
          this.$emit('movie-is-created-updated', this.movie)
        }, 500)
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
  .textarea{
    width: 540px;
    height: 80px;
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .movie-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 190px;
    font-size: 20px;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
