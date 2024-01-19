import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from "../components/IndexPage.vue"
import AboutPage from "../components/AboutPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})

export default router
