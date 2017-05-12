<template>
    <div class="all-articles">
        <TopBar></TopBar>
        <Card class="mt15">
            <h2 slot="title">所有文章</h2>
            <ArticlesList></ArticlesList>
        </Card>
    </div>
</template>

<script>
    export default {
        components: {
            TopBar: () => import('./TopBar.vue'),
            ArticlesList: () => import('./ArticlesList.vue')
        }
    }
</script>

<style scoped>

</style>
