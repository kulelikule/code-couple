import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './page/home.vue';
import Child from './page/child.vue';

//启用路由
Vue.use( VueRouter );

const router = new VueRouter({
	routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/child',
            component: Child
        }
    ]
});

export default router;