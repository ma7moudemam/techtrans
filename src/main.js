import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.scss';
import router from './router/router';


const app = createApp(App);
app.use(router);
createApp(App).mount('#app')
