<template>
  <body>
  <div>
    <div>
      <title-with-search :defaultMsg=defaultMsg :config=config ref="ue"></title-with-search>
    </div>
  </div>
  </body>
</template>

<script>
  import ElMenu from "element-ui/packages/menu/src/menu";
  import ElContainer from "element-ui/packages/container/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  import TitleWithSearch from "../common/view/navmenu/TitleWithSearch";

  export default {
    components: {
      TitleWithSearch,
      ElHeader,
      ElContainer,
      ElMenu},
    name: "index"
  }
</script>

<style>

</style>
