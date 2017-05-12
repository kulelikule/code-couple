<template>
    <div class="article-list">
        <div class="article-list-content">
            <ul>
                <li class="clearfix">
                    <router-link to="/blog/article-details" class="title fl">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</router-link>
                    <span class="fr">2017-01-01</span>
                </li>
                <li class="clearfix mt15">
                    <a class="title fl">标题标题标题标题标题标题标题标题</a>
                    <span class="fr">2017-01-01</span>
                </li>
                <li class="clearfix mt15">
                    <a class="title fl">标题标题标题标题标题标题标题标题</a>
                    <span class="fr">2017-01-01</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="less">
    .article-list-content{
        font-size: 16px;
        li{
            border-bottom: 1px solid #e3e8ee;
        }
    }
    .title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: ~'calc(100% - 100px)';
    }
</style>
