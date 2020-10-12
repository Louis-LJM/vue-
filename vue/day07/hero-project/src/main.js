// // 使用App.vue作为根组件，渲染index.html
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import axios from 'axios'
// 导入bootstrap的样式，如果没有做模块化处理的一些原生包，需要找到node_modules下的具体包，引入文件
import 'bootstrap/dist/css/bootstrap.min.css'
// 使用App.vue作为根组件，渲染index.html

// 把axios挂在vue原型上，所有vue组件都可以直接访问到了
Vue.prototype.$axios = axios

// 配置基准路径，将来只要axios请求，就可以直接拼上基础路径的前缀
axios.defaults.baseURL = 'http://localhost:3000'

// 这个是全局过滤器
Vue.filter('time', function (value) {
  return moment(+new Date(value)).format('YYYY年MM月DD日 HH:mm:ss')
})

new Vue({
  // vue底层提供的一个渲染函数
  // 可以使用App作为根组件，进行渲染视图
  render: h => h(App),
  router
}).$mount('#app')

// /-------------------------------------------
// const vm = new Vue({
//   el: '#app',
//   // vue底层提供的一个渲染函数
//   // 可以使用App作为根组件，进行渲染视图
//   render: function (createElement) {
//     return createElement(App)
//   }
// })
// console.log(vm)
