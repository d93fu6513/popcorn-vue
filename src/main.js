import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import VueClipboard from 'vue-clipboard2';


const app = createApp(App)
app.config.globalProperties.$filters = {
    currency,
    date,
  };
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(VueAxios, axios) //app.use安裝插件
app.use(router)
app.use(MenuIcon)
VueClipboard.config.autoSetContainer = true
app.use(VueClipboard)
app.component('Loading',Loading) //app.component註冊全域元件

app.mount('#app')
