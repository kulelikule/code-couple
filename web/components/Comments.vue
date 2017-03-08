<template>
    <div>
        <p class="comment-title">留言</p>
        <v-comment-item></v-comment-item>
    </div>
</template>

<script>
    import CommentItem from './CommentItem.vue';

    export default {
        components: {
            'v-comment-item': CommentItem
        }
    }
</script>

<style lang="less" scoped>
    @import "../less/dynamic.less";
    .comment-title{
        font-size: 28px;
        padding: 10px 0;
        border-bottom: 1px solid @line-clr;
    }
</style>