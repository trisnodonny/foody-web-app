import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RecipesView from '../views/RecipesView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import RecipeDetailsView from '../views/RecipeDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView
        },
        {
          path: 'recipes',
          name: 'recipes',
          component: RecipesView
        },
        {
          path: 'recipes/:id',
          name: 'recipe-details',
          component: RecipeDetailsView
        },
        {
          path: 'favorites',
          name: 'favorites',
          component: FavoritesView
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("access_token")

  if (to.name === "login" && isAuthenticated || to.name === "register" && isAuthenticated) {
    next('/')
  } else if (to.name === "favorites" && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
