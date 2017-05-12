<template>
    <div class="main-nav">
        <div class="container">
            <Menu mode="horizontal" theme="dark" :active-name="baseUrl" @on-select="switchPage" class="container">
                <Menu-item name="/blog">
                    <Icon type="ios-book"></Icon>
                    我的博客
                </Menu-item>
                <Menu-item name="/life">
                    <Icon type="heart"></Icon>
                    我的生活
                </Menu-item>
                <Menu-item name="/technology">
                    <Icon type="ionic"></Icon>
                    技术研发
                </Menu-item>
            </Menu>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            let url = this.$route.matched[0];
            return {
                baseUrl: url ? url.path : '/blog/index'
            }
        },
        methods: {
            switchPage(name){
                this.$router.push(name);
            }
        }
    }
</script>

<style scoped>
    .main-nav{
        background-color: #464c5b;
    }
</style>
