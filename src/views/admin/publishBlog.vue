<template>
    <Form ref="formValidate" :model="formItem" :label-width="80" :rules="ruleValidate">
        <Form-item label="标题" prop="title">
            <Input v-model="formItem.title" placeholder="请输入标题"></Input>
        </Form-item>
        <Form-item label="作者" prop="author">
            <Input v-model="formItem.author" placeholder="请输入作者"></Input>
        </Form-item>
        <Form-item label="日期控件" class="time">
            <Date-picker v-model="formItem.date" type="datetime" placeholder="选择日期和时间"></Date-picker>
        </Form-item>
        <Form-item label="内容" prop="content">
            <div class="content-editor">
                <textarea :value="rawContent" @input="update" class="markdown-area fl"></textarea>
                <div class="content-area fl" v-html="compiledMarkdown"></div>
            </div>

        </Form-item>
        <Form-item label="关键字">
            <Input v-model="formItem.keywords" placeholder="请输入关键字"></Input>
        </Form-item>
        <Form-item class="fr">
            <Button type="primary" @click="submitArticle">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
    </Form>
</template>
<script>
    import marked from 'marked'
    import _ from 'underscore'
    import axios from 'axios'
    export default {
        data () {
            return {
                rawContent: '',
                formItem: {
                    title: '',
                    author: '李佳骏',
                    date: '',
                    content: '',
                    keywords: ''
                },
                ruleValidate: {
                    title: [
                        {required: true, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    author: [
                        {required: true, message: '作者不能为空', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '文章内容不能为空', trigger: 'blur'}
                    ]
                }
            }
        },
        computed: {
            compiledMarkdown() {
                this.formItem.content = marked(this.rawContent, { sanitize: true });
                return this.formItem.content;
            }
        },
        methods: {
            update: _.debounce(function (e) {
                this.rawContent = e.target.value
            }, 300),
            submitArticle() {
                this.$refs.formValidate.validate((valid) => {
                    if (valid) {
                        this.$Loading.start();
                        axios.post('/ajax/blogAdmin/save', this.formItem).then(function (response) {
                            this.$Loading.finish();
                            this.$Message.info(response.data.message);
                        }.bind(this)).catch(function (response) {
                            this.$Loading.error();
                            console.log(response);
                        }.bind(this));
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .content-editor{
        height: 600px;
    }
    .markdown-area, .content-area{
        width: 50%;
        height: 100%;
        border-color: #d7dde4;
        font-size: 16px;
        line-height: 1.5;
        padding: 8px 15px;
    }
    .content-area{
        border-width: 1px 1px 1px 0;
        border-style: solid;

    }
    .time{
        width: 600px;
    }
</style>
