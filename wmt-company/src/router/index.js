import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/dashboard.vue'
import About_us from '../components/about-us.vue'
import History from '../components/history.vue'
import Certificate from '../components/certificate.vue'
import Customer from '../components/customer.vue'

import TypeMachine from '../components/product/type_machine.vue'
import ReverseEngineering from '../components/product/reverse_engineering.vue'
import QualityControl from '../components/product/quality_control.vue'
import MachineCapabilities from '../components/product/machine_capabilities.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/about-us', component: About_us },
  { path: '/history', component: History },
  { path: '/certificate', component: Certificate },
  { path: '/customer', component: Customer },

  { path: '/product/cnc-machine', component: TypeMachine },
  { path: '/product/reverse-engineering', component: ReverseEngineering },
  { path: '/product/inspection', component: QualityControl },
  { path: '/product/special-treatment', component: MachineCapabilities },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
