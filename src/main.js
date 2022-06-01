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
import animated from "animate.css";
import { Field, Form, ErrorMessage, defineRule, configure, } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import { MotionPlugin } from '@vueuse/motion'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck, faTrashCan, faMinus, faPlus, faLightbulb, faCircleQuestion, faGem, faHeart, faCartPlus, faCartShopping, faMagnifyingGlass, faTent, faStore, faArrowPointer, faCircleInfo, faGear, faQuoteLeft, faQuoteRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare, faLine } from '@fortawesome/free-brands-svg-icons'
library.add( faCircleCheck, faTrashCan, faMinus, faPlus, faLightbulb, faCircleQuestion, faGem, faHeart, faCartPlus, faCartShopping, faMagnifyingGlass, faTent, faStore, faArrowPointer, faCircleInfo, faGear, faQuoteLeft, faQuoteRight, faCheck, faFacebookSquare, faInstagramSquare, faLine);

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency,
  date,
};

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系 
  validateOnInput: true, // 當輸入任何內容直接進行驗證 
 });
setLocale('zh_TW');

// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState;

app.use(VueAxios, axios) //app.use安裝插件
app.use(router)
app.use(MenuIcon)
app.use(VueClipboard)
app.use(animated)
app.use(MotionPlugin)
app.component("font-awesome-icon", FontAwesomeIcon)
app.component('Loading', Loading) //app.component註冊全域元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app')
