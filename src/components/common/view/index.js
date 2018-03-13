import * as nav_menu from './navmenu'
import * as test from './test'
import * as profile from './profile'
import * as artitem from './profile'
// ----- 2
const components = {
  ...nav_menu,
  ...test,
  ...profile,
  ...artitem
}
// ----- 3
const install = function (Vue, Option) {
  // ----- 4
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}
export default {
  install
}
