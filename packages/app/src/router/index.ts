import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import Tabs from '@/components/Tabs.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'home',
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import(`@/views/home.vue`),
      },
      {
        path: 'parse',
        name: 'Parse',
        component: () => import(`@/views/parse.vue`),
      },
      {
        path: 'library',
        name: 'Library',
        component: () => import('@/views/library.vue'),
      },
    ],
  },
]

// https://vitejs.dev/guide/env-and-mode.html
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
