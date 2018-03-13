<template>
  <body>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
    </el-menu>
  </div>
  </body>
</template>

<script>
  import ElMenu from "element-ui/packages/menu/src/menu";

  export default {
    components: {ElMenu},
    name: "index"
  }
</script>

<style>

</style>
