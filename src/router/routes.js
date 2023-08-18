import Home from '../pages/Home/Home.vue'
import ArticlePage from '../pages/ArticlePage/ArticlePage.vue'

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'article',
    path: '/article',
    component: ArticlePage,
  }
]