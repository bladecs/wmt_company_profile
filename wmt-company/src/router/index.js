import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/dashboard.vue'
import About_us from '../components/about-us.vue'
import History from '../components/history.vue'
import Certificate from '../components/certificate.vue'
import Customer from '../components/customer.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/about-us', component: About_us },
  { path: '/history', component: History },
  { path: '/certificate', component: Certificate },
  { path: '/customer', component: Customer },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
