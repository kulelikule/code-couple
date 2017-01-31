import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './page/app.vue';
//引入状态机
import store from './store';
//引入路由
import router from './router';
//引入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css'

new Vue({
	el: '#app',
    store,
	router,
	render: h => h(App)
});
