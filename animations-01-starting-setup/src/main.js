import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue'
import CourseGoals from './pages/CourseGoals.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals }
  ]
})
const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

router.isReady().then(function () {
  app.mount('#app');
}); // 적절한 페이지가 로드되고 이를 라우터가 성공적으로 확인했을떄 실행



