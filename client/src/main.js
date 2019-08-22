import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index';
//import components for vue router
import MealList from './components/meals/MealList.vue'
import NewMeal from './components/meals/NewMeal.vue'
import Register from './components/user/Register.vue'
import Login from './components/user/Login.vue'
import Landing from './components/layouts/Landing.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/meals', component: MealList, name: 'MealList' },
    { path: '/new', component: NewMeal, name: 'NewMeal' },
    { path: '/login', component: Login, name: 'Login' },
    { path: '/register', component: Register, name: 'Register' },
    { path: '/', component: Landing, name: Landing }
  ]
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
