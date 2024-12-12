import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
<<<<<<< Updated upstream
=======
import SignUpPage from '@/views/SignUpPage.vue'
import auth from "../auth";
import LoginPage from '@/views/LoginPage.vue';
>>>>>>> Stashed changes

const routes = [
  {
    path: '/',
    name: 'home',
<<<<<<< Updated upstream
    component: MainPage
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpPage.vue')
=======
    component: SignUpPage,
    meta: { title: "Sign Up"}
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: () =>
      import ( "../views/ContactPage.vue"),
    meta: { title: "Contact Us"}
>>>>>>> Stashed changes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
