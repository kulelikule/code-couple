<template>
    <div class="top-bar mt20">
        <Row>
            <Col span="18" class="breadcrumb-nav-col">
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
    .breadcrumb-nav-col{
        min-height: 1px;
    }
    .top-bar-search{
        margin-top: -7px;
    }
    .top-bar-search{
        padding-left: 10px;
    }
</style>
