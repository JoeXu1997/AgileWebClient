<template>
  <div class="hero">
    <h3 style="font-size: 30px">Each One You Like Is Here!</h3>
    <div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
      <div class="slideshow">
        <transition-group tag="ul" name="image">
          <li class="newli" v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
              <img class="slideimg" :src='img'>
          </li>
        </transition-group>
      </div>
      <div class="controlbar">
      <span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
            @click="change(index)" :key="index"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null, // 定时器
      mark: 0, // 比对图片索引的变量
      imgArray: [
        require('../assets/slide/civilization.jpg'),
        require('../assets/slide/conjuring.jpg'),
        require('../assets/slide/dahuaxiyou.jpg'),
        require('../assets/slide/deme.jpg'),
        require('../assets/slide/holiday.jpg'),
        require('../assets/slide/mission.jpg'),
        require('../assets/slide/shining.jpg'),
        require('../assets/slide/shuai.jpg'),
        require('../assets/slide/deme.jpg'),
        require('../assets/slide/inception.jpg')
      ]
    }
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark === 9) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, 2500)
    }
  },
  created () {
    this.play()
  }
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
  .slide {
    width: 1024px;
    height: 320px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
  }
  .slideshow {
    width: 1024px;
    height: 320px;
  }
  .newli {
    position: absolute;
  }
  .slideimg {
    width: 1024px;
    height: 320px;
  }
  .controlbar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }
  .controlbar span {
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }
  .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }

</style>
