import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue'
import UsersList from './pages/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersFooter from './pages/UsersFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams', path: '/teams', meta: { needsAuth: true }, components: { default: TeamsList, footer: TeamsFooter }, children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, // /teams/:teamId
      ]
    }, // , alias: '/'
    {
      path: '/users', components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from)
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }//redirect: '/teams' 
  ],
  // linkActiveClass: 'active', // active class name 변경
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    if (savedPosition) {
      return {
        left: savedPosition.left, top: savedPosition.top,
      }
    }
    return { left: 0, top: 0 }
  } // 페이지 변경될떄마다 호출
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach')
  console.log(to, from)
  next(); // 이동안할시 next(flase)

  if (to.meta.needsAuth) {
    console.log('Needs auth!')
    next();
  } else {
    next();
  }

  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } })
  // }
})

router.afterEach(function (to, from) {
  // sending analytics data
  console.log('Global afterEach')
  console.log(to, from);
})

export default router;