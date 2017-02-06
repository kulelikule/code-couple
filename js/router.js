import Vue from 'vue';
import VueRouter from 'vue-router';
import Blog from './page/blog.vue';
import Life from './page/life.vue';
import Product from './page/product.vue';

//启用路由
Vue.use( VueRouter );

const router = new VueRouter({
	linkActiveClass: 'active',
	routes: [
        {
            path: '/blog',
            component: Blog
        }, {
            path: '/life',
            component: Life
        }, {
            path: '/product',
            component: Product
        }
    ]
});

export default router;