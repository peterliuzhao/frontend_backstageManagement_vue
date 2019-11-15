import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import top from '../vue_movie/top.vue';
import middle from '../vue_movie/middle.vue';
import contentInner from '../vue_movie/contentInner.vue';
import pageFooter from '../vue_movie/pageFooter.vue';


import chart1 from '../vue_movie/chart1.vue';

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
			path: "/login",
			component: login
		},
		{
			path: "/register",
			component: register
		},
		{

			path: "/*",
			components: {
				"top": top,
				"pageFooter": pageFooter,
				"middle": middle,
			},
			children: [

				{
					path: "/contentInner",
					component: contentInner
				},
				{
					path: "/orders",
					component: orders,
					children: [{
						path: "/*",
						components: {
                          "ordersChart":chart1
						}
					}]
				},


				{
					path: "/",
					component: contentInner
				},

			]
		}
	]


});


//确定是否登录，不是则一直在登陆页面
router.beforeEach(function (to, from, next) {
	const isLogin = sessionStorage.getItem('isLogin')
	if (isLogin) {
		next()
	} else {
		if (to.path === '/login') { //这就是跳出循环的关键
			next()
		} else {
			next('/login')
		}
	} 
});

export default router;
