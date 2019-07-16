<template>
  <div class="bottomBar">
    <ul>
      <li>
        <div class="bottom" @click="addActive(menus[0])">
        <iconSvg  :icon-class="menus[0]"  :class="{active:menus[0]==choosed}" iconSize="small" />
        <div>收藏</div>
        </div>
      </li>
      <li>
        <div class="bottom" @click="addActive(menus[1])">
        <iconSvg   :icon-class="menus[1]" :class="{active:menus[1]==choosed}" iconSize="small" />
        <div>号码</div>
        </div>
      </li>
      <li>
        <div   class="circle inMiddle" @click="addActive(menus[2])" >
        </div>
        <iconSvg   class="inMiddle add"  :icon-class="menus[2]" iconSize="middle"  />
        <div class="bottom">
        <div class="middleFind">发现</div>
        </div>
      </li>
      <li>
        <div class="bottom"  @click="addActive(menus[3])" >
          <iconSvg  :icon-class="menus[3]"  :class="{active:menus[3]==choosed}" iconSize="small" />
          <div>信息</div>
        </div>

      </li>
      <li>
        <div class="bottom" @click="addActive(menus[4])" >
        <iconSvg   :icon-class="menus[4]" :class="{active:menus[4]==choosed}" iconSize="small" />
        <div >客服</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  //TODO 404   嵌套路由
// TODO 引入常量
export default {
  name: 'bottomBar',
  data () {
    return {
      menus: ['xihuan', 'gouwuche', 'add', 'sousuo', 'kefu'],
      choosed: ''
    }
  },
  methods: {
    addActive (className) {
      this.choosed = className
    }
  }
}
</script>

<style scoped>
  .bottomBar {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: white;

  }
  ul{
    margin:0;
    padding: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
  }
  ul li{
    position: relative;
    flex: 1;
    list-style-type: none;
    text-align: center;
    font-size: 22px;
  }
  .circle{
    z-index: 3;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid white;
    background-color: #ede436;
    bottom:35px;
  }
  .bottom{
    margin-top: 10px;
  }
  .inMiddle{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
  .middleFind{
    bottom: -57px;
    position: relative;
  }
  .add{
    z-index: 4;
    bottom:45px;
  }
  /deep/ .icon{
    transition: all .5s;
  }
  .active{
    /**translate3d 硬件加速**/
    transform: scale(1.2) translate3d(0,-30%,0);
    background:url("../assets/img/y.png") no-repeat center/100% 100%;
  }

</style>
