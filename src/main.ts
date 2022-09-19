import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
//import 'materialize-css/dist/css/materialize.min.css'
//import 'material-design-icons/iconfont/material-icons.css'




Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
