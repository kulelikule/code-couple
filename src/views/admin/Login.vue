<template>
    <div class="login">
        <Card :bordered="false" class="login-card" shadow>
            <p slot="title">登录</p>
            <Form ref="loginForm" :model="loginForm" :rules="ruleLogin">
                <Form-item prop="username">
                    <Input type="text" placeholder="Username" v-model="loginForm.username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" placeholder="Password" v-model="loginForm.password">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" class="fr" @click="handleSubmit">登录</Button>
                </Form-item>
            </Form>
        </Card>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { LOGIN } from '@/store/namespace'
    export default {
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                ruleLogin: {
                    username: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            ...mapActions(LOGIN, ['submitUserInfo']),
            handleSubmit() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.submitUserInfo(this.loginForm).then(() => {
                            this.$router.push('/admin/index')
                        })
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #f5f7f9;
    }
    .login-card{
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -200px;
        margin-left: -200px;
    }
</style>
