import $ from 'jquery';
Window.$;

import axios from 'axios';
window.axios = axios;

Vue.prototype.$axios = axios;
axios.defaults.baseURL = "http://192.168.9.217:8888/";
axios.defaults.withCredentials = true;


import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
Vue.component('v-chart', ECharts);


import App from '../vue_movie/App.vue';
import router from '../vue_movie/router.js';




var app = new Vue({
	el:"#app",
	render: function(c) {
		return c(App);
	},
	router
});