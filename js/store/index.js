import Vue from 'vue';
import Vuex from 'vuex';
import childModule from './modules/child';
import homeModule from './modules/home';

//启用vuex
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		navItems: [{
			name: '首页',
			url: '/',
			isActive: false
		},{
			name: '自页面',
			url: '/child',
			isActive: false
		}]
	},
	modules: {
		home: homeModule,
		child: childModule
	}
});