// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import viewPlugin from './components/common/view'
import particles from 'particles.js'
import ElementUI from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.min.js'
import MarkdownEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(MarkdownEditor)
Vue.use(BootstrapVue)
Vue.use(viewPlugin)
Vue.use(particles)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
