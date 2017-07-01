import axios from 'axios'
export default {
    state: {
        loginForm: {
            username: '',
            password: ''
        }
    },
    mutations: {
        clearPassword(state) {
            state.loginForm.password = '';
        }
    },
    actions: {
        submitUserInfo({ commit }) {
            axios.post('', this.loginForm).then((res) => {
                console.log(res)
            })
        }
    }
}
