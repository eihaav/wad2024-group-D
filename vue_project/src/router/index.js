import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
<<<<<<< Updated upstream
import SignUpPage from '@/views/SignUpPage.vue' 
=======
import SignUpPage from '@/views/SignUpPage.vue'
import auth from "../auth";
import LoginPage from '@/views/LoginPage.vue';
import SinglePost from '@/views/SinglePost.vue';
import AddPost from '@/views/AddPost.vue';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
  }
=======
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: AddPost,
    meta: { title: "Add Post"},
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
    path: "/api/singlepost/:id",
    name: "SinglePost",
    component: SinglePost,
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
    path: '/contacts',
    name: 'contacts',
    component: () =>
      import ( "../views/ContactPage.vue"),
    meta: { title: "Contact Us"}
  },
>>>>>>> Stashed changes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 
  to.meta.title || "Group D's Project";
  next();
});

export default router
