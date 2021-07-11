import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css'
//路由
import VueRouter from 'vue-router';
import router from './router/router';
Vue.use(VueRouter)
Vue.use(VueAxios,axios)
Vue.config.productionTip=false;
//vuex

import store from './store/store'

import 'video.js';



new Vue({
    el:"#app",
    components:{App},
    template:`<App/>`,
    router,
    store
})