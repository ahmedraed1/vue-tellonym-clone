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
import SettingsCom from '@/components/profile/SettingsCom.vue'

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
      meta: { requiresAuth: true },
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      meta: { requiresAuth: true },
    },
    {
      path: '/tells',
      name: 'tells',
      component: TellsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView,
      meta: { requiresAuth: true },
    },
    {
      path: '/:username',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'settings',
          name: 'profile-settings',
          component: SettingsCom,
          meta: { requiresAuth: true },
        },
      ],
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
    },
  ],
})

router.beforeEach((to, from, next) => {
  const response = authUser()

  response
    .then(res => {
      const isAuthenticated = res.status === 200 // Check if user is authenticated

      if (to.meta.requiresAuth && !isAuthenticated) {
        next({ name: 'landing-page' }) // Redirect to landing page
      } else if (
        isAuthenticated &&
        (to.name === 'login' || to.name === 'landing-page')
      ) {
        next({ name: 'feed' }) // Redirect to feed if logged in
      } else {
        next() // Proceed to the route
      }
    })
    .catch(() => {
      next() // Handle errors gracefully
    })
})

export default router
