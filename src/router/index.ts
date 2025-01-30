import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutMe from '../views/AboutMe.vue'
import ChatGPTStylerView from '../views/ChatGPTStylerView.vue'
import ChatGPTStylerFEView from '@/components/ChatGPTStylerFE.vue'
import WRView from '../views/WRView.vue'

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
      path: '/projects/chatGPTStyler',
      name: 'chatGPTStyler',
      component: ChatGPTStylerView
    },
    {
      path: '/projects/chatGPTStylerFE',
      name: 'chatGPTStylerFE',
      component: ChatGPTStylerFEView
    },

    {
      path: '/projects/weather-report',
      name: 'Weather Report',
      component: WRView
    }
  ]
})

export default router
