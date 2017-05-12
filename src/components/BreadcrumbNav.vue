<template>
    <Breadcrumb class="breadcrumb-main">
        <Breadcrumb-item v-for="(item, i) in paths" :href="item.path" :key="i">{{item.name}}</Breadcrumb-item>
    </Breadcrumb>
</template>

<script>
    import { breadcrumbNavMixin } from '@/mixin';
    export default {
        mixins: [breadcrumbNavMixin]
    }
</script>

<style scoped>
    .breadcrumb-main{
        margin-left: 5px;
    }
</style>
