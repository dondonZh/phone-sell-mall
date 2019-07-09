<template>
  <div class="home">
    <div class="container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>

    </div>
  </div>
</template>
<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
<style scoped>
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
