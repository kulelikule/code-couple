<template>
    <div class="admin-container">
        <AdminNav></AdminNav>
        <div class="iframe-wrapper">
            <div class="iframe">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminNav from '../../components/AdminNav.vue';
    export default {
        components: {
            AdminNav
        }
    }
</script>

<style>
    .admin-container{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .iframe-wrapper{
        height: 100%;
        margin-left: 240px;
        overflow: hidden;
    }
    .iframe{
        height: 100%;
        box-sizing: border-box;
        overflow: auto;
        padding: 30px 20px;
    }
</style>
