<template>
    <div class="top-bar mt20">
        <Row>
            <Col span="18">
                <BreadcrumbNav :paths="paths"></BreadcrumbNav>
            </Col>
            <Col span="6">
                <Input class="top-bar-search fr">
                    <Button slot="append" icon="ios-search-strong"></Button>
                </Input>
            </Col>
        </Row>
    </div>
</template>

<script>
    import { breadcrumbNavMixin } from '@/mixin';
    export default {
        mixins: [breadcrumbNavMixin],
        components: {
            BreadcrumbNav: () => import('./BreadcrumbNav.vue')
        }
    }
</script>

<style scoped>
    .top-bar-search{
        width: 300px;
        margin-top: -7px;
    }
</style>
