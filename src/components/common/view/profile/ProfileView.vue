<template>
  <div style="margin: auto;" class="position-relative">
    <div>
      <img style="width: 100%" src="@/assets/static/head_bg.png"/>
    </div>
    <div class="position-absolute" style="left:15%;top:10vw;width: 70%">
      <img style="width:100%;" src="@/assets/static/head.png"/>
      <img class="position-absolute" style="width: 15vw;height:15vw;top:4vw;
      right:5vw;-webkit-border-radius: 7.5vw;-moz-border-radius: 7.5vw;border-radius: 7.5vw;"
           src="@/assets/static/holder.jpg"/>
      <div class="position-absolute" style="left: 5%;top: 45%;background: #b8daff;width: 45%;height: 45%">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "profile-view"
  }
</script>

<style scoped>
  @import '../../../../assets/css/common.css';
  @import '../../../../assets/css/index.css';
  @import "../../../../assets/css/bootstrap.min.css";
</style>
