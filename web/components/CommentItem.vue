<template>
    <div class="comment">
        <p class="comment-meta-area">
            <span class="name">网友1</span>:
        </p>
        <div class="comment-content">
            <p>这是测试内容</p>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @import '../less/dynamic.less';
    .comment{
        border-bottom: 1px dashed @line-clr;
    }
</style>