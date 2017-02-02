import Vue from 'vue';
import Vuex from 'vuex';
import navModule from './modules/nav';
import childModule from './modules/child';
import homeModule from './modules/home';

//启用vuex
Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		nav: navModule,
		home: homeModule,
		child: childModule
	}
});