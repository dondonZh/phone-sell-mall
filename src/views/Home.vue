<template>
  <div class="home">
    <transition name="move" mode="out-in">
        <router-view></router-view>
    </transition>
    <bottombar></bottombar>
  </div>
</template>
<script>
// require styles
import bottombar from '@/components/bottomBar.vue'

export default {
  name: 'home',
  components: {
    bottombar
  }

}
</script>
<style scoped>
.move-active, .move-leave-active {
  transition: opacity .3s ease;
}
.move, .move-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
section{
  position: relative;
  top:-280px;
  left: 50%;
  transform: translateX(-50%);
}
  section img{
    width: 710px;
    height: 200px;
    border-radius: 50px;
    object-fit: cover;
  }
  .chooseIcons{
    margin-top: 10px;
    color: #666;
    background: #fcfcfc;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    width: 710px;
    border-radius: 50px;
    height: 340px;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
  }
  ul{
    padding: 0;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
  }
  ul li{
    flex: 1;
    flex-basis: 120px;
    width: 120px;
    height: 120px;
    list-style-type: none;
    color: #666666;
    margin: 5px;
    text-align: center;
    font-size: 22px;
  }
  .chooseIcons /deep/ .swiper-pagination-bullet{
    width: 20px;
  }
  .chooseIcons /deep/ .swiper-pagination-bullet-active {
    opacity: 1;
    background: #333333;
  }
</style>
