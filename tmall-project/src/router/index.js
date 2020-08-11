import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Classify from '../components/Classify.vue'
import Login from '../components/Login.vue'
import Login2 from '../components/Login2.vue'
import Discover from '../components/Discover.vue'
import PingJia from "../components/PingJia.vue";
import Detail1 from "../components/Detail1.vue";
import Detail2 from "../components/Detail2.vue";
import Detail3 from "../components/Detail3.vue";
import One from "../components/ping/One.vue";
import Two from "../components/ping/Two.vue";
import Three from "../components/ping/Three.vue";
import Shopping from "../components/Shopping.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: "/detail1",
    component: Detail1
  },
  {
    path: "/detail2",
    component: Detail2
  },
  {
    path: "/detail3",
    component: Detail3
  },
  {
    path: "/pingjia",
    component: PingJia
  },
  {
    path: "/discover",
    component: Discover
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/login2",
    component: Login2
  },
  {
    path: "/one",
    component: One
  },
  {
    path: "/two",
    component: Two
  },
  {
    path: "/three",
    component: Three
  },
  {
    path:"*",
    component:Home
  },
  {
    path: "/shopping",
    component:Shopping
  }
]

const router = new VueRouter({
  routes
})

export default router
