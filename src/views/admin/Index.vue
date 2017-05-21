<template>
    <div class="admin-container">
        <AdminNav></AdminNav>
        <router-view></router-view>
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
</style>
