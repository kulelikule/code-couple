<template>
    <div class="blog-details">
        <v-crumbs :paths="paths"></v-crumbs>
        <div class="blog-details-main">
            <div class="title-area">
                <p>大标题</p>
            </div>
            <div class="meta-area">
                <p class="grey">
                    <span>作者：</span>
                    <span>李佳骏</span>
                </p>
                <p class="grey">
                    <span>时间：</span>
                    <span>2015-10-10</span>
                </p>
            </div>
            <div class="content-area">
                这里是主题内容
            </div>
        </div>
        <v-comments></v-comments>
    </div>
</template>

<script>
    import Vuex from 'vuex';
    import types from '../../store/mutation-types';
    import Crumbs from '../../components/Crumbs.vue';
    import Comments from '../../components/Comments.vue';

    export default {
        data() {
            return {
                paths: [{
                    name: '首页',
                    url: '/blog'
                },{
                    name: '文章详情'
                }]
            }
        },
        components: {
            'v-crumbs': Crumbs,
            'v-comments': Comments
        }
    }
</script>

<style lang="less">
    @import '../../less/dynamic.less';
    .blog-details{
        .blog-details-main{
            padding-bottom: 20px;
            border-bottom: 1px solid @line-clr;
        }
        .title-area{
            border-bottom: 1px solid @line-clr;
            p{
                font-size: 28px;
            }
        }
        .meta-area{
            padding: 20px 0 5px;
            font-size: 16px;
        }
        .content-area{
            font-size: 16px;
        }
    }
</style>