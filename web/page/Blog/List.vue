<template>
    <div class="blog-list">
        <v-crumbs :paths="paths"></v-crumbs>
        <v-article-list :items="allArticles">
            <div slot="header">
                <h4>所有文章</h4>
            </div>
        </v-article-list>
    </div>
</template>

<script>
    import Vuex from 'vuex';
    import types from '../../store/mutation-types';
    import ArticleList from '../../components/ArticleList.vue';
    import Crumbs from '../../components/Crumbs.vue';

    export default {
        data() {
            return {
                paths: [{
                    name: '首页',
                    url: '/blog'
                },{
                    name: '文章列表'
                }]
            }
        },
        computed: Vuex.mapGetters(['allArticles']),
        components: {
            'v-article-list': ArticleList,
            'v-crumbs': Crumbs
        },
        methods: {
        }
    }
</script>

<style lang="less">
    @import '../../less/dynamic.less';
</style>