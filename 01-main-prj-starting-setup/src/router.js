import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/choaches/CoachDetail.vue'
import CoachesList from './pages/choaches/CoachesList.vue'
// import CoachRegistraction from './pages/choaches/CoachRegistraction.vue'
// import ContactCoach from './pages/requests/ContactCoach.vue'
// import RequestsReceived from './pages/requests/RequestsReceived.vue'
// import UserAuth from './pages/auth/UserAuth.vue'
import NotFound from './pages/NotFound.vue'
import store from './store/index.js' // router 에서 store 값 참조

const CoachDetail = defineAsyncComponent(() => import('./pages/choaches/CoachDetail.vue'))
const CoachRegistraction = defineAsyncComponent(() => import('./pages/choaches/CoachRegistraction.vue'))
const ContactCoach = defineAsyncComponent(() => import('./pages/requests/ContactCoach.vue'))
const RequestsReceived = defineAsyncComponent(() => import('./pages/requests/RequestsReceived.vue'))
const UserAuth = defineAsyncComponent(() => import('./pages/auth/UserAuth.vue'))

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/contact
      ]
    },
    { path: '/register', component: CoachRegistraction, meta: { requiresAuth: true } },
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFount(.*)', component: NotFound },
  ]
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router