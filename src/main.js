import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import store from './store/index'
import swiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.use(swiper);

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

//引入布局组件
import navbar from './layout/navbar.vue';
Vue.component('navbar', navbar);
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})