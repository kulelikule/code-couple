<template>
    <div class="article-details">
        <TopBar :paths="paths"></TopBar>
        <Row class="mt20">
            <Col span="18">
                <div class="article-area">
                    <h1 class="article-title">{{articleDetails.title}}</h1>
                    <div class="mt20" :class="$style.articleContent" v-html="articleDetails.content"></div>
                </div>
            </Col>
            <Col span="6">
                <div class="right-bar">
                    <AboutMe></AboutMe>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                paths: [{
                    name: '首页',
                    path: '/blog'
                },{
                    name: '文章列表',
                    path: '/blog/blog-articles'
                },{
                    name: '详情列表'
                }]
            }
        },
        computed: mapState({
            articleDetails: state => state.blog.articleDetails
        }),
        components: {
            TopBar: () => import('../components/TopBar.vue'),
            BreadcrumbNav: () => import('../components/BreadcrumbNav.vue'),
            AboutMe: () => import('../components/AboutMe.vue')
        }
    }
</script>

<style lang="less" scoped>
    .right-bar{
        padding-left: 10px;
    }
    .article-area{
        margin-right: 20px;
    }
    .article-title{
        padding-bottom: 10px;
        border-bottom: 1px solid #e3e8ee;
    }
</style>

<style lang="less" module>
    .article-content{
        font-size: 16px;
        line-height: 2;
        p{
            text-indent: 2em;
        }
    }
</style>
