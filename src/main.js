import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import { currency } from './methods/filters';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

const app = createApp(App)
app.config.globalProperties.$filters = {
    currency,
  };
app.use(VueAxios, axios) //app.use安裝插件
app.use(router)
app.component('Loading',Loading) //app.component註冊全域元件

app.mount('#app')
