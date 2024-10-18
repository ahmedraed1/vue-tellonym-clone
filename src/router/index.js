import { createRouter, createWebHistory } from 'vue-router'
import FeedsView from '../views/FeedView.vue'
import LandingPage from '@/views/LandingPage.vue'
import LoginView from '@/views/registrationPages/LoginView.vue'
import SignView from '@/views/registrationPages/SignView.vue'
import SearchView from '@/views/SearchView.vue'
import TellsView from '@/views/TellsView.vue'
import NotificationsView from '@/views/NotificationsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import authUser from '@/methods/authUser'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage,
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedsView,
      beforeEnter: (to, from, next) => {
        authUser()
        next()
      },
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/tells',
      name: 'tells',
      component: TellsView,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView,
    },
    {
      path: '/:id',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      beforeEnter: (to, from, next) => {
        authUser()
        next()
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignView,
      beforeEnter: (to, from, next) => {
        authUser()
        next()
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

export default router
