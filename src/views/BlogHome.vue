<template>
    <div class="blog-home">
        <TopBar></TopBar>
        <Row class="mt10">
            <Col span="18">
                <Card>
                    <h2 slot="title">最新文章</h2>
                    <router-link slot="extra" to="/blog/blog-articles" class="fr">查看所有文章</router-link>
                    <ArticlesList :items="newArticles"></ArticlesList>
                </Card>
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
    import { mapState, mapActions } from 'vuex'
    import { BLOG } from '../store/namespace'
    export default {
        computed: mapState(BLOG, ['newArticles']),
        components: {
            TopBar: () => import('../components/TopBar.vue'),
            ArticlesList: () => import('../components/ArticlesList.vue'),
            AboutMe: () => import('../components/AboutMe.vue')
        },
        created() {
            this.getNewArticles({
                pageNo: 1,
                limit: 10
            })
        },
        methods: {
            ...mapActions(BLOG, ['getNewArticles'])
        }
    }
</script>

<style scoped>
    .right-bar{
        padding-left: 10px;
    }
</style>
