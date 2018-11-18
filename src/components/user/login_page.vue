<template>
  <div id="box">
    <div id="wrapper">
      <div id="wrappertop"></div>
      <div id="wrappermiddle">
        <h2>登录</h2>
        <div id="username_input">
          <div id="username_inputleft"></div>
          <div id="username_inputmiddle">
            <form>
              <input ref="account" type="text" name="account" id="login_user_name" placeholder="请输入用户名"
                     onclick="this.value = ''">
              <img id="url_user" src="@/image/mailicon.png" alt="">
            </form>
          </div>

          <div id="username_inputright"></div>

        </div>

        <div id="password_input">

          <div id="password_inputleft"></div>

          <div id="password_inputmiddle">
            <form>
              <input ref="password" type="password" name="password" id="login_user_password" placeholder="password">
              <img id="url_password" src="@/image/passicon.png" alt="">
            </form>
          </div>

          <div id="password_inputright"></div>

        </div>

        <div id="submit">
          <img type="image" v-on:click="this.doLogin" src="@/image/submit_hover.png" id="login" value="登录"
               class="login"/>
        </div>


        <div id="links_left">

          <a href="#">忘记密码?</a>

        </div>

        <div id="links_right"><a href="register.html">注册账号></a></div>

      </div>

      <div id="wrapperbottom"></div>
      <div id="powered">
        <p>Powered by <a href="">GeGe</a></p>
      </div>
    </div>
  </div>
</template>

<script>
 import {login} from '@/js/login_page.js'
  export default {
    name: "login_page",
    mounted() {
      if (!window.particlesJS) {
        console.log('particles.js has not load!')
        return
      }
      this.initParticleJS();
    },
    methods: {
      initParticleJS() {
        particlesJS("box", config);
      },
      doLogin() {
        login(this.$refs.account.value, this.$refs.password.value);
      }
    }
  }
 /* import config from '@/assets/config/login_config.js'*/
</script>

<style scoped>

</style>
