import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: () => import('@/views/Index'),
            children: [
                {
                    path: 'blog',
                    component: () => import('@/views/Blog'),
                    children: [
                        {
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
                        }
                    ]
                }
            ]
        }, {
            path: '/admin',
            component: () => import('@/views/admin/Admin'),
            children: [
                {
                    path: 'login',
                    name: 'Login',
                    component: () => import('@/views/admin/Login')
                },{
                    path: 'index',
                    component: () => import('@/views/admin/Index'),
                    children: [
                        {
                            path: 'publish-blog',
                            name: 'publishBlog',
                            component: () => import('@/views/admin/publishBlog')
                        }
                    ]
                }
            ]
        }
    ]
})
