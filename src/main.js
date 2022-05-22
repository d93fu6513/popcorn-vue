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
import VueClipboard from 'vue-clipboard2'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGem, faHeart, faCartPlus, faCartShopping, faMagnifyingGlass, faTent, faStore, faArrowPointer, faCircleInfo, faGear, faQuoteLeft, faQuoteRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare, faLine } from '@fortawesome/free-brands-svg-icons'
library.add(faGem, faHeart, faCartPlus, faCartShopping, faMagnifyingGlass, faTent, faStore, faArrowPointer, faCircleInfo, faGear, faQuoteLeft, faQuoteRight, faCheck, faFacebookSquare, faInstagramSquare, faLine);


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
app.use(VueClipboard)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component('Loading', Loading) //app.component註冊全域元件

app.mount('#app')
