import { createRouter, createWebHistory } from 'vue-router'
import FeedsView from '../views/FeedView.vue'
import LandingPage from '@/views/LandingPage.vue'
import LoginView from '@/views/registrationPages/LoginView.vue'
import SignView from '@/views/registrationPages/SignView.vue'
import SearchView from '@/views/SearchView.vue'
import TellsView from '@/views/TellsView.vue'
import NotificationsView from '@/views/NotificationsView.vue'
import ProfileView from '@/views/ProfileView.vue'

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
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
      // redirect: '/',
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
