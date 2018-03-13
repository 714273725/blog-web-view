<template>
  <body id="particles" class="b_container">
  <nav-menu/>
  <ul class="wrapWidth" style="background: transparent">
    <li style="list-style: none">
      <profile-view/>
    </li>
    <li class="art_header"></li>
    <li class="art" style="width: 100%;height: auto">
      <art-item-view v-bind:show_image="true" v-bind:type="1"/>
    </li>
    <li class="art" style="width: 100%;height: auto">
      <art-item-view v-bind:show_image="false" v-bind:type="1"/>
    </li>
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
  import ArtItemView from "../common/view/item/ArtItemView";
  export default {
    components: {
      ArtItemView,
      ProfileView,
      Test,
      TestView,
      NavMenu
    },
    name: "user_page",
  }
</script>

<style scoped>
  @import "~zcs/all-css.css";
</style>
