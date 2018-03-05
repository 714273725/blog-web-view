<template>
  <div id="app" background="@/assets/static/head_bg.png">
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /*去掉顶部(四边)留白*/
  body {
    margin: 0;
    background-color: #DAC3C1;
   /* background-image: url("../src/assets/static/head_bg.png");
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-size: 100% auto;
    -moz-background-size: 100% 1500px;*/
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
  }
</style>
