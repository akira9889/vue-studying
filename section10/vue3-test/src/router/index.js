import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChildrenView from '@/views/ChildrenView'
import TeleportTest from '@/views/TeleportTest'
import CompositionTest from '@/views/CompositionTest'
import PropsEmitTest from '@/views/PropsEmitTest'
import FunctionTest from '@/views/FunctionTest'
import RouterTest from '@/views/RouterTest'
import VuexTest from '@/views/VuexTest'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/children',
    name: 'Children',
    component: ChildrenView
  },
  {
    path: '/teleport-test',
    name: 'Teleport',
    component: TeleportTest
  },
  {
    path: '/composition-test',
    name: 'Composition',
    component: CompositionTest
  },
  {
    path: '/props-emit-test',
    name: 'PropsEmit',
    component: PropsEmitTest
  },
  {
    path: '/function-test',
    name: 'Function',
    component: FunctionTest
  },
  {
    path: '/router-test',
    name: 'Router',
    component: RouterTest
  },
  {
    path: '/vuex-test',
    name: 'Vuex',
    component: VuexTest
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
