import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SignIn from './views/SignIn.vue'
import Register from './views/Register.vue'
import UserCabinet from './views/UserCabinet.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{requiresAuth:false}
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn,
      meta:{requiresAuth:false}
    },
    {
      path:'/register',
      name: 'register',
      component: Register,
      meta:{requiresAuth:false}
    },
    {
      path: '/usercabinet',
      name: 'usercabinet',
      component: UserCabinet,
      meta:{requiresAuth:true}

    }
  ]
})


router.beforeEach((to, from, next) => {
  console.log(to.matched.some(record => record.meta.requiresAuth))
  if(to.matched.some(record => record.meta.requiresAuth))
  {
    if (localStorage.getItem('username') == null) {
      next({
        name: 'signin',
      })
    }
    else {
      next()
    }

  }
  else {
    next()
  }
})

export default router
