import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import error404 from '@/components/error/404'
import user from '@/components/user/user_page'
import login from '@/components/user/login_page'
import register from '@/components/user/register_page'
import register_success from '@/components/user/register_success'
import edit from '@/components/edit/edit_issue_page'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: 'index',
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
    }, {
      path: '/login',
      name: 'login_page',
      component: login
    }, {
      path: '/register',
      name: 'register_page',
      component: register
    }, {
      path: '/reg_success',
      name: 'register_success_page',
      component: register_success
    },
    {
      path: '/edit',
      name: 'edit_issue_page',
      component: edit
    },
    {path: '*', component: error404}
  ]
})
