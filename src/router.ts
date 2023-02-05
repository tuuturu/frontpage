import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
