<template>
    <div class="container">
      <div>{{env}}</div>
      <div>{{env}}</div>
      <div>{{env}}</div>
      <div>{{env}}</div>
      <div>{{env}}</div>
      <div>{{env}}</div>
      <div>{{env}}</div>
      <div>{{env}}</div>
      <div>{{env}}</div>
      <div>tes123t</div>
<div>所以说这是我的冲突点</div>
    </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      env: process.env.NODE_ENV
    }
  }
}

</script>
<style>
  .container {
    width: 100%;
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 50px);
  }
  .container  div:nth-child(even){
    background-color: yellow;
  }
  .container  div:nth-child(odd){
    background-color: green;
  }
</style>
