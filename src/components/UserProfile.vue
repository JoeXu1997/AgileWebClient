<template>
  <div class="hero">
    <p>pictiure and user information here</p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'UserProfile',
  data () {
    return {
      user_: [],
      rows: ['DisplayName', 'Email', 'Usertype'],
      options: {
        headings: {
          DisplayName: 'Display Name',
          Usertype: 'Usertype'
        }
      }
    }
  },
  created () {
    this.showUserInfo()
  },
  methods: {
    showUserInfo: function () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          this.user_.displayName = user.displayName
          this.user_.email = user.email
        } else {
          this.user_.displayName = null
          this.user_.email = null
        }
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
</style>
