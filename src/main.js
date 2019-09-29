//importing Vue like the CDN but its in node modules (package management system)
//import external packages from node
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import app created files
import router from './router'


Vue.config.productionTip = false
Vue.use(BootstrapVue);
//renders vueInstance with mount method to #app in the public directory
//when I import from the top, I must add it down below
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
