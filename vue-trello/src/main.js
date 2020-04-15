import Vue from 'vue'
import App from './App.vue'

const Login = { template : '<div>login Page </div>'}

const routes = {
  '/' : App,
  '/login' : Login
}


new Vue({
  el: '#app',
  computed: {
    vueComponent() {
      return routes[window.location.pathname] || 
      { template : '<div>not found page</div>'}
    }
  },
  render(h) {
    return h(this.vueComponent)
  }
})
