<template>
    <div class="blog-home">
        <div class="blog-title">
            <h3>李佳骏&范申妮的技术博客</h3>
        </div>
        <article-list :items="newArticles">
            <div slot="header">
                <router-link class="blog-list pull-right" to="/blog/list">查看更多文章</router-link>
                <h4>最近发表</h4>
            </div>
        </article-list>
    </div>
</template>

<script>
    import Vuex from 'vuex';
    import ArticleList from '../../components/ArticleList.vue';
    import types from '../../store/mutation-types';

    export default {
        computed: Vuex.mapGetters(['newArticles']),
        components: {
            'article-list': ArticleList
        },
        methods: {
        }
    }
</script>

<style lang="less">
    @import '../../less/dynamic.less';
    .blog-title{
        border-bottom: 1px solid @line-clr;
    }
</style>