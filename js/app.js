import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './page/app.vue';
import Home from './page/home.vue';
import Child from './page/child.vue';
//引入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'
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

new Vue({
	el: '#app',
	router,
	render: h=>h(App)
});
