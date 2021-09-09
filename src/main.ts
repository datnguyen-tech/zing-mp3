import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import './icons'
import './assets/styles/index.scss'

// import module
import listModules from '@/modules'


//plugins
import './plugins/element-ui'

// import module
import { forEach } from 'lodash'

// base components
import components from './components/base'

Vue.config.productionTip = false

forEach(components, (value, key) => {
  Vue.component(key, value)
})
// modules
forEach(listModules, module => {
  // register route
  forEach(module.router, value => {
    router.addRoute(value)
  })

  // // register store
  // forEach(module.stores, (value, key) => {
  //   store.registerModule(key, value)
  // })

  // //register component
  // forEach(module.components, (value, key) => {
  //   Vue.component(key, value)
  // })
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
