<template>
  <div id="register_box">
    <div class="cent-box register-box">
      <div class="cent-box-header">
        <h1 class="main-title hide">GeGe</h1>
        <h2 class="sub-title"> 生活热爱分享 - Thousands Find </h2>
      </div>
      <div class="clearfix">
        <div class="login form">
          <div class="group">
            <div class="group-ipt email">
              <input ref="email" type="email" name="email" id="email"
                     class="ipt" placeholder="邮箱地址" required>
            </div>
            <div class="group-ipt user">
              <input ref="user" type="text" name="user" id="user"
                     class="ipt" placeholder="请输入用户名" required>
            </div>
            <div class="group-ipt password">
              <input ref="password" type="password" name="password"
                     id="password" class="ipt" placeholder="设置登录密码"
                     required>
            </div>
            <div class="group-ipt password1">
              <input ref="repassword" type="password" name="repassword" id="repassword" class="ipt" placeholder="重复密码"
                     required>
            </div>
            <div class="group-ipt verify">
              <input type="text" name="verify" id="verify" class="ipt" placeholder="输入验证码" required>
              <img class="imgcode">
            </div>
          </div>
        </div>

        <div class="button">
          <button v-on:click="this.doRegister" type="submit" class="login-btn register-btn" id="button"> 注册</button>
        </div>
      </div>
      <div class="footer">
        <p> GeGe之家 - GeGe</p>
        <p> Designed By ZengRong & Amended By GeGe & 2016 </p>
      </div>
    </div>
  </div>

</template>

<script>
  import config from '@/assets/config/particles.js'
  import {register} from '@/js/register_page.js'

  export default {
    name: "register_page",
    mounted() {
      if (!window.particlesJS) {

        console.log('particles.js has not load!')
        return
      }
      particlesJS("register_box", config)
    },methods: {
      doRegister() {
        register(this.$refs.user.value,
          this.$refs.email.value,
          this.$refs.password.value);
      }
    }
  }
</script>

<style scoped>

</style>
