import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import top from '../vue_movie/top.vue';
import sideNavbar from '../vue_movie/sideNavbar.vue';
import contentInner from '../vue_movie/contentInner.vue';
import pageFooter from '../vue_movie/pageFooter.vue';
// import bottom from '../vue/bottom.vue'; 



// 在main.js中， 创建的路由，用于了 Vue实例！！
// 该app实例下的所有子组件（比如App组件），就可以直接使用上路由中的配置（App组件中的 router-view可以显示组件！）
var router = new VueRouter({
	routes: [
		{
			path: "/*", components: {
				"top":top,
				"sideNavbar":sideNavbar,
				"contentInner":contentInner,
				"pageFooter":pageFooter
			}
		}
	]
});

export default router;