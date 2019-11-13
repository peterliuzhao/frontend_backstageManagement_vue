import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import top from '../vue_movie/top.vue';
import middle from '../vue_movie/middle.vue';
import contentInner from '../vue_movie/contentInner.vue';
import pageFooter from '../vue_movie/pageFooter.vue';

import chart from '../vue_movie/chart.vue';
import orders from '../vue_movie/orders.vue';

import login from '../vue_movie/login.vue';
import register from '../vue_movie/register.vue'; 

// import bottom from '../vue/bottom.vue'; 



// 在main.js中， 创建的路由，用于了 Vue实例！！
// 该app实例下的所有子组件（比如App组件），就可以直接使用上路由中的配置（App组件中的 router-view可以显示组件！）
var router = new VueRouter({

	routes: [
		{
			path:"/",component:login
		},
		{
			path:"/login",component:login
		},
		{
			path:"/register",component:register
		},
		{
		path: "/*",
		components: {
			"top": top,
			"pageFooter": pageFooter,
			"sideNavbar": middle,
		},
		children: [
			
			{path: "/contentInner",component: contentInner},
			{path: "/orders",component: orders},
			{path: "/chart",component: chart},
			// {path: "/",component: contentInner},			
		]

	}]


});

export default router;
