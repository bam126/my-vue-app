import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import PortfolioPage from '../views/PortfolioPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/contacts', name: 'contacts', component: ContactsPage },,
  { path: '/portfolio', name: 'portfolio', component: PortfolioPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router