import Vue from 'vue';
import Vuex from 'vuex';
import nav from './modules/nav';
import blogDatas from './modules/blog'
import childModule from './modules/child';
import homeModule from './modules/home';

//启用vuex
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		nav,
        blogDatas,
		home: homeModule,
		child: childModule
	}
});