    <template>
        <div class="article-details">
            <TopBar :paths="paths"></TopBar>
            <Row class="mt20">
                <Col span="18">
                <div class="article-area">
                    <div class="article-title">
                        <span class="title">{{articleDetails.title}}</span>
                        <div class="fr meta-info">
                            <span>作者 : {{articleDetails.author}}</span>
                            <span>时间 : {{articleDetails.date | dateFormat('yyyy-MM-dd')}}</span>
                        </div>

                    </div>
                    <div class="mt20 markdown-display-area" :class="$style.articleContent" v-html="articleDetails.content"></div>
                </div>
                </Col>
                <Col span="6">
                <div class="right-bar">
                    <AboutMe></AboutMe>
                </div>
                </Col>
            </Row>
        </div>
    </template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    import { BLOG } from '../store/namespace'
    import { dateFormat } from '@/utils'
    export default {
        data() {
            return {
                paths: [{
                    name: '首页',
                    path: '/blog'
                },{
                    name: '文章列表',
                    path: '/blog/blog-articles'
                },{
                    name: '详情列表'
                }]
            }
        },
        computed: mapState(BLOG, ['articleDetails']),
        components: {
            TopBar: () => import('../components/TopBar.vue'),
            BreadcrumbNav: () => import('../components/BreadcrumbNav.vue'),
            AboutMe: () => import('../components/AboutMe.vue')
        },
        filters: {
            dateFormat
        },
        activated() {
            this.getArticleDetails({
                id: this.$route.params.id
            })
        },
        deactivated() {
            this.clearAricleDetails()
        },
        methods: {
            ...mapMutations(BLOG, ['clearAricleDetails']),
            ...mapActions(BLOG, ['getArticleDetails'])
        }
    }
</script>

<style lang="less" scoped>
    .right-bar{
        padding-left: 10px;
    }
    .article-area{
        margin-right: 20px;
    }
    .article-title{
        padding-bottom: 10px;
        border-bottom: 1px solid #e3e8ee;
        .title{
            font-size: 24px;
            font-weight: bold;
        }
        .meta-info{
            font-size: 14px;
            margin-top: 10px;
            span:first-child{
                margin-right: 20px;
            }
        }
    }
</style>

<style lang="less" module>
    .article-content{
        font-size: 16px;
        line-height: 2;
        p{
            text-indent: 2em;
        }
    }
</style>
