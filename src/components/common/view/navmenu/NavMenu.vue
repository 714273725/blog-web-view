<template>
  <div id="art_head_view" class="menu fixed-top b_container">
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
          <li v-if="login" class="nav-item">
            <a class="nav-link font" href="/login">登录</a>
          </li>
          <li v-else class="nav-item">
            <a class="nav-link font" href="/login">退出</a>
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
      <img class="right_menu_icon" src="@/image/holder.jpg" style="border-radius:50%"/>
      <!-- src="@/assets/static/head_holder.png"-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "nav_menu",
    data: {
      login: window.localStorage.getItem("token") != null && window.localStorage.getItem("token").length > 0
    }
  }
</script>

<style scoped>
  @import '~zcs/common.css';
  @import '~zcs/index.css';
</style>
