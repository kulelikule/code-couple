<template>
    <div>
        <main-nav></main-nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import MainNav from '../components/MainNav.vue';
    export default {
        components: {
            MainNav
        }
    }
</script>
