import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ApiPage from '../views/ApiPage.vue'
import FormPage from '../views/FormPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/cats', name: 'api', component: ApiPage },
  { path: '/form', name: 'form', component: FormPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router