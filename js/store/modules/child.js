export default {
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count += 3;
			console.log('child');
		}
	},
	getters: {
		doubleCountChild(state) {
			return state.count * 2;
		}
	},
	actions: {
		incrementCount({state, rootState, commit}) {
			commit('increment');
		}
	}
}