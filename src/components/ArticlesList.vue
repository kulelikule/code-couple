<template>
    <div class="article-list">
        <div class="article-list-content">
            <ul>
                <li class="clearfix" v-for="(item, i) in items" :key="item._id" :class="{mt15: i !== 0}">
                    <router-link :to="'/blog/article-details/' + item._id" class="title fl">{{item.title}}</router-link>
                    <span class="fr">{{item.date | dateFormat('yyyy-MM-dd')}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import filters from '@/filters'
    export default {
        filters,
        props: {
            items: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

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
