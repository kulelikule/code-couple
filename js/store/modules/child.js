export default {
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++;
		}
	},
	getters: {
		doubleCount(state) {
			return state.count * 2;
		}
	},
	actions: {
		incrementCount({state, rootState, commit}) {
			commit('increment');
		}
	}
}