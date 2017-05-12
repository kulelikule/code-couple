<template>
    <div class="article-details">
        <TopBar></TopBar>
        <Row class="mt20">
            <Col span="18">
                <h1>文章标题</h1>
                <div class="article-content"></div>
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
        components: {
            TopBar: () => import('./TopBar.vue'),
            BreadcrumbNav: () => import('./BreadcrumbNav.vue'),
            AboutMe: () => import('./AboutMe.vue')
        }
    }
</script>

<style scoped>
    .right-bar{
        padding-left: 10px;
    }
</style>
