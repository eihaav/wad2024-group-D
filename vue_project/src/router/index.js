import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import auth from "../auth";
import LoginPage from '@/views/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
    meta: { title: "Homepage"},
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { title: "Log In"}
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage,
    meta: { title: "Sign Up"}
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: () =>
      import ( "../views/ContactPage.vue"),
    meta: { title: "Contact Us"}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
