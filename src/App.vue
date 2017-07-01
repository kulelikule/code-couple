<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'app',
        created() {
            axios.interceptors.response.use(response => {
                if(response.data.success === true){
                    return response.data;
                }else{
                    if(response.data.result === 403) {
                        this.$router.push({name: 'Login'})
                    }
                    return Promise.reject(response.data);
                }
            }, error => {
                return Promise.reject(error);
            });
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
