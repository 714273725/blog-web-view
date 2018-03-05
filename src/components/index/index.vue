<template>
  <body style="margin-top: 0" class="container">
  <!--顶部菜单-->
  <!--<div class="menu fixed-top container">
    <nav style="width: 50%;display: inline-block;"
         class="navbar navbar-expand-md bg-transparent navbar-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link font" href="#">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font" href="#">分类</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font" href="#">归档</a>
          </li>
          <li class="nav-item">
            <a class="font nav-link" href="#">友链</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font" href="#">关于</a>
          </li>
          <li class="nav-item">
            <a class="nav-link font" href="#">登录</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="right_menu_container">
      <div class="right_menu_search">
        <form style="padding: 0;margin: 0" id="searchForm" action="">
          <input type="text" name="q" id="q" value="" autocomplete="off" placeholder="搜索" class="search-input"/>
        </form>
      </div>
      <div class="right_menu_nick_container">
        <span class="right_menu_nick">我是一只小白猪</span>
      </div>
      <img class="right_menu_icon"
           src="@/assets/static/head_holder.png"/>
    </div>
  </div>-->
  <div class="position-relative">
    <img class="head_bg  position-absolute container" src="@/assets/static/bg.jpg"/>
    <div class="position-absolute container" style="padding-top: 10%;">
      <div style="vertical-align:top;width: 14%;height:200px;
      display: inline-block;"></div>
      <ul style="vertical-align:top;width: 70%;display: inline-block;padding: 0;">
        <li style="list-style: none;padding: 0;margin: 0">
          <img style="width: 100%" src="@/assets/static/head.png"/>
        </li>
      </ul>
      <div
        style="vertical-align:top;float:right;width: 14%;height:200px;
        display: inline-block;"></div>
    </div>

  </div>
  <div class="position-absolute container" style="vertical-align:center;margin-top: 40%">
    <ul style="width: 70%; margin: auto">
      <li style="list-style: none;padding: 0;margin: 0">
        <img style="width: 100%" src="@/assets/static/head.png"/>
      </li>
      <li style="list-style: none;padding: 0;margin: 0">
        <img style="width: 100%" src="@/assets/static/head.png"/>
      </li>
      <li style="list-style: none;padding: 0;margin: 0">
        <img style="width: 100%" src="@/assets/static/head.png"/>
      </li>
      <li style="list-style: none;padding: 0;margin: 0">
        <img style="width: 100%" src="@/assets/static/head.png"/>
      </li>
    </ul>
  </div>
  </body>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  @import '../../assets/css/common.css';
  @import '../../assets/css/index.css';
  @import "../../assets/css/bootstrap.min.css";

</style>
