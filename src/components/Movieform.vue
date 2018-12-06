<template>
  <form @submit.prevent="submit">
    'name', 'movietype', 'mainActor', 'Directedby',
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Movie Name</label>
      <input class="form__input" placeholder="Movie Name" v-model.trim="$v.message.$model"/>
    </div>
    <div class="error" v-if="!$v.name.required">Name is Required</div>

    <div class="form-group" :class="{ 'form-group--error': $v.movietype.$error }">
      <label class="form__label">Movie Type</label>
      <input class="form__input" placeholder="Movie Type" v-model.trim="$v.movietype.$model"/>
    </div>
    <div class="error" v-if="!$v.movietype.required">Type is Required</div>

    <div class="form-group" :class="{ 'form-group--error': $v.mainActor.$error }">
      <label class="form__label">Main Actor</label>
      <input class="form__input" placeholder="Main Actor(only one, null is accrpted if that is Documentary )" v-model.trim="$v.mainActor.$model"/>
    </div>
    <div class="error" v-if="!$v.mainActor.required">Actor is Required(even null)</div>


    <div class="form-group" :class="{ 'form-group--error': $v.Directedby.$error }">
      <label class="form__label">Director</label>
      <input class="form__input" placeholder="Main Actor(only one, null is accrpted if that is Documentary )" v-model.trim="$v.Directedby.$model"/>
    </div>
    <div class="error" v-if="!$v.Directedby.required">Director is Required</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ donationBtnTitle }}</button>
    </p>
    <p>
      <a href="#/donations" class="btn btn-primary btn1" role="button">Manage Movies</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Add...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['donationBtnTitle', 'donation'],
  data () {
    return {
      messagetitle: ' Donate ',
      message: this.donation.message,
      paymenttype: this.donation.paymenttype,
      amount: this.donation.amount,
      upvotes: 0,
      submitStatus: null
    }
  },
  validations: {
    message: {
      required,
      minLength: minLength(5)
    },
    amount: {
      required,
      between: between(1, 1000)
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
          var donation = {
            paymenttype: this.paymenttype,
            amount: this.amount,
            upvotes: this.upvotes,
            message: this.message
          }
          this.donation = donation
          console.log('Submitting in DonationForm : ' +
              JSON.stringify(this.donation, null, 5))
          this.$emit('donation-is-created-updated', this.donation)
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
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
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
    width: 300px;
    font-size: x-large;
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
