import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';

let app = createApp(App);
app.use(store);
app.use(router);

store.dispatch("products/load").then(()=>{app.mount('#app');});

import 'bootstrap/dist/css/bootstrap.min.css';
