import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/home/HomeView.vue'
import About from '@/about/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
