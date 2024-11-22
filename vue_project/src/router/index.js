import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import SignUpPage from '@/views/SignUpPage.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
    meta: { title: "Homepage"}
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage,
    meta: { title: "Sign Up"}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 
  to.meta.title || "Group D's Project";
  next();
});

export default router
