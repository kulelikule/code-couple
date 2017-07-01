<template>
    <Menu theme="dark" class="nav fl" :active-name="baseUrl" @on-select="switchPage">
        <Input class="search-all" :class="$style.searchAll"></Input>
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                博客管理
            </template>
            <Menu-item name="/admin/index/publish-blog">发表博客</Menu-item>
            <Menu-item name="1-2">博客列表</Menu-item>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                生活经营
            </template>
            <Menu-item name="2-1">增添色彩</Menu-item>
            <Menu-item name="2-2">锦上添花</Menu-item>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                技术探索
            </template>
            <Menu-item name="3-1">研究发表</Menu-item>
        </Submenu>
    </Menu>
</template>

<script>
    export default {
        data() {
            return {
                baseUrl: this.$route.matched[this.$route.matched.length - 1].path
            }
        },
        methods: {
            switchPage(name){
                this.$router.push(name);
            }
        }
    }
</script>

<style scoped lang="less">
    .nav{
        height: 100%;
    }
    .search-all{
        width: 90%;
        height: 30px;
        margin: 15px 5%;
        border-radius: 3px;
    }
</style>

<style module lang="less">
    .search-all{
        input[type=text]{
            background: #5b6270;
            border: none;
            color: #bbb;
        }
    }
</style>
