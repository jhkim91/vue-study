import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/choaches/CoachDetail.vue'
import CoachesList from './pages/choaches/CoachesList.vue'
import CoachRegistraction from './pages/choaches/CoachRegistraction.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import NotFound from './pages/NotFound.vue'

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
    { path: '/register', component: CoachRegistraction },
    { path: '/requests', component: RequestsReceived },
    { path: '/auth', component: UserAuth },
    { path: '/:notFount(.*)', component: NotFound },
  ]
})

export default router