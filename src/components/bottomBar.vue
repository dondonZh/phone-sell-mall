<template>
  <div class="bottomBar">
    <ul>
      <li>
        <div class="bottom">
        <iconSvg  icon-class="xihuan" iconSize="small" />
        <div>收藏</div>
        </div>
      </li>
      <li>
        <div class="bottom">
        <iconSvg   icon-class="gouwuche" iconSize="small" />
        <div>号码</div>
        </div>
      </li>
      <li>
        <div   class="circle inMiddle">
        </div>
        <iconSvg   class="inMiddle add" icon-class="add" iconSize="middle" />
        <div class="bottom">
        <div class="middleFind">发现</div>
        </div>
      </li>
      <li>
        <div class="bottom">
          <iconSvg  icon-class="sousuo"  iconSize="small"/>
          <div>信息</div>
        </div>

      </li>
      <li>
        <div class="bottom">
        <iconSvg   icon-class="kefu" iconSize="small" />
        <div >客服</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'bottomBar'
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

</style>
