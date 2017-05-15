import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/blog',
        component: () => import('@/views/Blog'),
        children: [{
            path: '',
            name: 'BlogHome',
            component: () => import('@/views/BlogHome')
        },{
            path: 'blog-articles',
            name: 'BlogArticles',
            component: () => import('@/views/BlogArticles')
        },{
            path: 'article-details/:id',
            name: 'ArticleDetails',
            component: () => import('@/views/ArticleDetails')
        }]
    }]
})
