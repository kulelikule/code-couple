<template>
    <div class="all-articles">
        <TopBar :paths="paths"></TopBar>
        <Card class="mt15">
            <h2 slot="title">所有文章</h2>
            <ArticlesList :items="allArticles"></ArticlesList>
        </Card>
        <Page :total="100" :page-size="10" show-elevator class="articles-pager fr mt15"></Page>
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
                    name: '文章列表'
                }]
            }
        },
        computed: mapState({
            allArticles: state => state.blog.allArticles
        }),
        components: {
            TopBar: () => import('../components/TopBar.vue'),
            ArticlesList: () => import('../components/ArticlesList.vue')
        }
    }
</script>

<style scoped>
    .articles-pager{
        margin-bottom: 20px;
    }
</style>
