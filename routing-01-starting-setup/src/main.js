import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList }, // our-domain.com/teams => TeamsList
    { path: '/users', component: UsersList },
  ],
  // linkActiveClass: 'active' // active class name 변경
});
const app = createApp(App);
app.use(router); // 서드 파티 패키지와 다른 기능을 연결해주는 역할

app.mount('#app');
