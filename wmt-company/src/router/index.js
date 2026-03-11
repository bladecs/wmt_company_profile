import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/dashboard.vue'
import About_us from '../components/about-us.vue'
import History from '../components/history.vue'
import Certificate from '../components/certificate.vue'
import Customer from '../components/customer.vue'

import TypeMachine from '../components/product/type_machine.vue'
import ReverseEngineering from '../components/product/reverse_engineering.vue'
import QualityControl from '../components/product/quality_control.vue'
import Prototype from '../components/product/prototype.vue'
import MassProduction from '../components/product/mass_production.vue'
import MachineCapabilities from '../components/product/machine_capabilities.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/about-us', component: About_us },
  { path: '/history', component: History },
  { path: '/certificate', component: Certificate },
  { path: '/customer', component: Customer },

  { path: '/product/type-machine', component: TypeMachine },
  { path: '/product/reverse-engineering', component: ReverseEngineering },
  { path: '/product/quality-control', component: QualityControl },
  { path: '/product/prototype', component: Prototype },
  { path: '/product/mass-production', component: MassProduction },
  { path: '/product/machine-capabilities', component: MachineCapabilities },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
