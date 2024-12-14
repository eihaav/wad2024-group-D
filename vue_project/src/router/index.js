import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import auth from "../auth";
import LoginPage from '@/views/LoginPage.vue';
import SinglePost from '@/views/SinglePost.vue';
import AddPost from '@/views/AddPost.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
    meta: { title: "Homepage" },
    beforeEnter: async (to, from, next) => {
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
    meta: { title: "Log In" }
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage,
    meta: { title: "Sign Up" }
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: () =>
      import("../views/ContactPage.vue"),
    meta: { title: "Contact Us" }
  },
{
  path: '/addpost',
    name: 'addpost',
      component: AddPost,
        meta: { title: "Add Post" },
  beforeEnter: async (to, from, next) => {
    let authResult = await auth.authenticated();
    if (!authResult) {
      next('/login')
    } else {
      next();
    }
  }
},
{
  path: "/api/singlepost/:id",
    name: "SinglePost",
      component: SinglePost,
        beforeEnter: async (to, from, next) => {
          let authResult = await auth.authenticated();
          if (!authResult) {
            next('/login')
          } else {
            next();
          }
        }
},
{
  path: '/contacts',
    name: 'contacts',
      component: () =>
        import("../views/ContactPage.vue"),
        meta: { title: "Contact Us" }
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
