<template>
<div>
  <div id="app">
    <button @click="back">back</button>
    <lottie :options="defaultOptions" :height="300" :width="300" v-on:animCreated="handleAnimation"/>
    <!--<div>
      <p>Speed: x{{animationSpeed}}</p>
      <input type="range" value="1" min="0" max="3" step="0.5"
             v-on:change="onSpeedChange" v-model="animationSpeed">
    </div>-->
    <!--<button v-on:click="stop">stop</button>
    <button v-on:click="pause">pause</button>
    <button v-on:click="play">play</button>-->
  </div>

</div>
</template>

<script>
import Lottie from '../components/lottie.vue'
import * as animationData from '../assets/lottie/404.json'
export default {
  name: 'notFound',
  components: {
    'lottie': Lottie
  },
  data () {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
    back () {
      this.$router.back()
    },
    stop: function () {
      this.anim.stop()
    },

    play: function () {
      this.anim.play()
    },

    pause: function () {
      this.anim.pause()
    },

    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed)
    }
  }

}
</script>

<style scoped>

</style>
