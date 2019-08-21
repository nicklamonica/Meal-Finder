import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import components for vue router
import MealList from './components/meals/MealList.vue'
import NewMeal from './components/meals/NewMeal.vue'
import Register from './components/user/Register.vue'
import Login from './components/user/Login.vue'


Vue.use(VueRouter);


export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MealList, name: 'MealList' },
    { path: '/new', component: NewMeal, name: 'NewMeal' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/register', component: Register, name: 'Register' }
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
