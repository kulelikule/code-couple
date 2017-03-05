<template>
    <ol class="breadcrumb">
        <li v-for="(path, index) in paths">
            <router-link v-if="paths.length - 1 != index" :to="path.url">{{path.name}}</router-link>
            <span v-else>{{path.name}}</span>
        </li>
    </ol>
</template>

<script>
    export default {
        props: {
            paths: {
                required: true,
                type: Array
            }
        }
    }
</script>