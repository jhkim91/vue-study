import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js'

const app = createApp(App);
app.use(router); // 서드 파티 패키지와 다른 기능을 연결해주는 역할

app.mount('#app');
