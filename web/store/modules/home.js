export default {
	state: {
		count: 100
	},
	mutations: {
		increment(state) {
			state.count += 2;
			console.log('home');
		}
	},
	getters: {
		doubleCountHome(state) {
			return state.count * 2;
		}
	},
	actions: {
		// incrementCount({state, rootState, commit}) {
			// commit('increment');
		// }
	}
}