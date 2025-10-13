import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Dashboard from './components/dashboard.vue'
import About_us from './components/about-us.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: Dashboard },
        { path: '/about-us', component: About_us }
    ]
})

const app = createApp(App)

app.use(router);
app.component('dashboard', Dashboard);
app.component('about-us', About_us);

app.mount('#app')