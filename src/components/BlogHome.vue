<template>
    <div class="blog-home">
        <Row class="mt10">
            <Col span="18">
                <Card>
                    <h2 slot="title">最新文章</h2>
                    <router-link slot="extra" to="/blog/all-articles" class="fr">查看所有文章</router-link>
                    <ArticlesList></ArticlesList>
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
    export default {
        data () {
            return {
            }
        },
        components: {
            ArticlesList: () => import('./ArticlesList.vue'),
            AboutMe: () => import('./AboutMe.vue')
        }
    }
</script>

<style scoped>
    .right-bar{
        padding-left: 10px;
    }
</style>
