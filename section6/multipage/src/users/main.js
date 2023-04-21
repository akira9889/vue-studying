import Vue from 'vue'
import Users from './UsersIndex.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Users),
}).$mount('#app')
