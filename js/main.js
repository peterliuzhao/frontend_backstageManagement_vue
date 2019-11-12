import $ from 'jquery';
Window.$=$
// import 'bootstrap3/dist/css/bootstrap.min.css';

import axios from 'axios'
window.axios=axios

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from '../vue_movie/App.vue';
import router from '../vue_movie/router.js';


var app = new Vue({
	el:"#app",
	render: function(c) {
		return c(App);
	},
	router
});