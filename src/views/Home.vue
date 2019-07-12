<template>
  <div class="home">
    <topbar>
      <template v-slot:title>
         大力哥商店
      </template>
      <template v-slot:number>
        17855827666
      </template>
    </topbar>
    <section>
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide><img src="../assets/img/3.png"></swiper-slide>
      <swiper-slide><img src="../assets/img/1.jpg"></swiper-slide>
      <swiper-slide><img src="../assets/img/2.jpg"></swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </section>
    <section class="chooseIcons">
    <swiper :options="swiperOptionIcon" ref="mySwiperIcon" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <ul>
          <li>
            <iconSvg icon-class="shouji"  />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="anquan" />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="biaoqian" />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="shoucang" />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="tongxunlu" />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="bofang" />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="yonghu" />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="weixin" />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="faxian" />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="rili" />
            <div>手机靓号</div>
          </li>
      </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li>
            <iconSvg icon-class="wanggou" />
            <div>手机靓号</div>
          </li>
          <li>
            <iconSvg icon-class="yinzhang" />
            <div>手机靓号</div>
          </li>
          <li style="flex:8;flex-basis: 120px;"></li>
      </ul>
      </swiper-slide>

      <!-- Optional controls -->
      <div   class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </section>
    <a href="www.baidu.com">link_style</a>
    <iconSvg icon-class="geta" />
    <bottombar></bottombar>
  </div>
</template>
<script>
// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import topbar from '@/components/topbar.vue'
import bottombar from '@/components/bottomBar.vue'
import '../icons/geta.svg'

export default {
  name: 'home',
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop : true,
        effect : 'flip',
        pagination: {
          el: '.swiper-pagination',

        }
      },
      swiperOptionIcon: {
        pagination: {
          el: '.swiper-pagination',

        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
  },
  methods: {
    callback () {

    }
  },
  components: {
    topbar,
    swiper,
    swiperSlide,
    bottombar
  }
}
</script>
<style scoped>
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
