<template>
<div>
  <div class="container">
    <div>{{env}}</div>
    <div>{{env}}</div>
    <div>{{env}}</div>
    <div>{{env}}</div>
    <div>{{env}}</div>
    <div>{{env}}</div>
    <div>{{env}}</div>
    <div>{{env}}</div>
    <br>
    <div>我是来测试冲突解决的第二个地方哈哈</div>
    <div class="icon1"></div>
    <div class="icon2"></div>
    <div>我是来测试冲突解决的 试试看</div>
    </div>
</div>
</template>
<script>
console.log('process', process)
export default {
  name: 'add',
  data () {
    return {
      env: this.$baseUrl
    }
  }
}
</script>
<style>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(2, 50px);
}
.container div:nth-child(even) {
  background-color: yellow;
}
.container div:nth-child(odd) {
  background-color: green;
}
/*三道杠*/
.icon1 {
  box-sizing: border-box;
  display: inline-block;
  width: 24px;
  height: 20px;
  padding: 4px 0;
  border-top: 4px solid currentColor;
  border-bottom: 4px solid currentColor;
  background: currentColor; /*注意如果此处背景颜色属性用缩写的话，需要放到其他背景属性的前面，否则会覆盖前面的属性值（此处为background-clip）为默认值*/
  background-clip: content-box;
}
/*双层圆点*/
.icon2 {
  display: inline-block;
  width: 12px;
  height: 12px;
  padding: 2px;
  border: 2px solid currentColor;
  border-radius: 50%;
  background-color: currentColor;
  background-clip: content-box;
}
</style>
