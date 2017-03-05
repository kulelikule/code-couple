import Vue from 'vue';
import VueRouter from 'vue-router';

import Blog from './page/Blog/Blog.vue';
import BlogHome from './page/Blog/Home.vue';
import BlogList from './page/Blog/List.vue';
import BlogDetail from './page/Blog/Datail.vue';

import Life from './page/Life.vue';
import Product from './page/Product.vue';

//启用路由
Vue.use( VueRouter );

const router = new VueRouter({
	linkActiveClass: 'active',
	routes: [
        {
            path: '/blog',
            component: Blog,
            children: [{
                path: '',
                component: BlogHome
            },{
                path: 'list',
                component: BlogList
            },{
                path: 'detail/:id',
                component: BlogDetail
            }]
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