import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/blog',
        component: () => import('@/components/Blog'),
        children: [{
            path: '',
            name: 'BlogHome',
            component: () => import('@/components/BlogHome')
        },{
            path: 'all-articles',
            name: 'BlogArticles',
            component: () => import('@/components/BlogArticles')
        },{
            path: 'article-details',
            name: 'ArticleDetails',
            component: () => import('@/components/ArticleDetails')
        }]
    }]
})
