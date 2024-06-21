import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router); // Instala Vue Router en la aplicación Vue

app.mount('#app');
