if(module.hot) {
    module.hot.accept();
}

import Vue from 'vue';
import App from './page/App.vue';
//引入状态机
import store from './store';
//引入路由
import router from './router';
//引入样式
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './less/base.less';

new Vue({
	el: '#app',
    store,
	router,
	render: h => h(App)
});
