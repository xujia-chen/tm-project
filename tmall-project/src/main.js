import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import Swiper ,{Navigation,Pagination,Autoplay} from "swiper";
Swiper.use([Navigation,Pagination,Autoplay]);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
