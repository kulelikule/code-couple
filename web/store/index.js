import Vue from 'vue';
import Vuex from 'vuex';
import nav from './modules/nav';
import blogList from './modules/blog_list'
import childModule from './modules/child';
import homeModule from './modules/home';

//启用vuex
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		nav,
		blogList,
		home: homeModule,
		child: childModule
	}
});