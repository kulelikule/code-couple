import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import blog from './modules/blog'
import life from './modules/life'
import technology from './modules/technology'

//启用Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login,
        blog,
        life,
        technology
    }
});
