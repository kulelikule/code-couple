import axios from 'axios'
export default {
    namespaced: true,
    actions: {
        submitUserInfo({}, payload) {
            return axios.post('/ajax/login', payload)
        }
    }
}
