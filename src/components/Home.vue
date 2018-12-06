<template>
  <div class="hero">
    <h1 class="vue-title">Movie Time !!</h1>
    <br/>
    <h2 class="vue-title">Just go to the Movie page and make your choice</h2>
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
