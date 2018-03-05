<template>
  <body class="b_container" style="background: transparent">
  <nav-menu/>
  <ul class="wrapWidth" style="background: transparent">
    <li style="list-style: none">
      <profile-view/>
    </li>
    <li class="art_header"></li>
    <li class="art" style="height: 300px"></li>
    <li class="art_foot"></li>
    <li style="list-style: none;padding: 0;margin: 0">
      <test-view/>
    </li>
    <li style="list-style: none;padding: 0;margin: 0">
      <test/>
    </li>
  </ul>
  </body>
</template>

<script>
  import NavMenu from "../common/view/navmenu/NavMenu";
  import TestView from "../common/view/navmenu/TestView";
  import Test from "../common/view/test/Test";
  import ProfileView from "../common/view/profile/ProfileView";
  export default {
    components: {
      ProfileView,
      Test,
      TestView,
      NavMenu
    },
    name: "user_page"
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
  @import '../../assets/css/index.css';
  @import '../../assets/css/bootstrap.min.css';
</style>
