import types from '../types';
import uuid from 'uuid';

export default {
	state: {
		items: [{
			id: uuid.v4(),
			name: '首页',
			url: '/',
			isActive: false
		},{
			id: uuid.v4(),
			name: '自页面',
			url: '/child',
			isActive: false
		}]
	},
	mutations: {
		[types.NAV_SWITCH](state, payload) {
			state.items.forEach(item => item.isActive = item.id == payload.id ? true : false);
		}
	},
	actions: {
		[types.NAV_SWITCH]({ commit }, payload) {
			commit(types.NAV_SWITCH, payload);
		}
	}
}