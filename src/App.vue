<template>
    <div id="app">
        <main-nav></main-nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import MainNav from './components/MainNav.vue';
    export default {
        name: 'app',
        components: {
            MainNav
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
