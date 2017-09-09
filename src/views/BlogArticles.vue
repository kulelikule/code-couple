<template>
    <div class="all-articles">
        <TopBar :paths="paths"></TopBar>
        <Card class="mt15">
            <h2 slot="title">所有文章</h2>
            <ArticlesList :items="allArticles"></ArticlesList>
        </Card>
        <Page :total="articleCount" :page-size="limit" show-elevator class="articles-pager fr mt15" @on-change="switchPage"></Page>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import { BLOG } from '../store/namespace'
    export default {
        data() {
            return {
                paths: [{
                    name: '首页',
                    path: '/blog'
                },{
                    name: '文章列表'
                }],
                limit: 15
            }
        },
        computed: {
            ...mapState(BLOG, ['allArticles', 'articleCount']),
        },
        components: {
            TopBar: () => import('../components/TopBar.vue'),
            ArticlesList: () => import('../components/ArticlesList.vue')
        },
        created() {
            this.switchPage(1)
        },
        methods: {
            ...mapActions(BLOG, ['getAllArticles']),
            switchPage(pageNo) {
                this.getAllArticles({
                    pageNo,
                    limit: this.limit
                })
            }
        }
    }
</script>

<style scoped>
    .articles-pager{
        margin-bottom: 20px;
    }
</style>
