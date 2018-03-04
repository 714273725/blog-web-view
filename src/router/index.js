import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import error404 from '@/components/error/404'
import user from '@/components/user/user_page'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/", name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/user',
      name: 'user_page',
      component: user
    },
    {path: '*', component: error404}
  ]
})
