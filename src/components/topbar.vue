<template>
<div class="topbar">

  <span> <slot name="title">小东靓号商城</slot></span>&nbsp;<div class="inner"><slot name="number">17855827439</slot></div>
</div>
</template>

<script>
  export default {
    name: 'topbar'
  }
</script>

<style scoped>
.topbar{
  padding-top: 10px;
  height: 380px;
  font-weight: bold;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #3a3b3c;
  font-size: 35px;
  color: #dde1e4;
  text-align: center;
}
  .inner{
    display: inline-block;
    background-color: #14ff2c;
    border-radius: 10px;
    font-size: 30px;
    color: white;
  }
</style>
