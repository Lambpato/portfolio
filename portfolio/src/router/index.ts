import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMe.vue'
import LSPView from '../views/LSPView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'About Me',
      component: AboutMe
    },
    {
      path: '/projects/LSP',
      name: 'LSP',
      component: LSPView
    },
    {
      path: '/projects/weather-report',
      name: 'Weather Report',
      component: HomeView
    }
  ]
})

export default router
