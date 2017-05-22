<template>
    <div class="login">
        <Card :bordered="false" class="login-card" shadow>
            <p slot="title">登录</p>
            <Form>
                <Form-item prop="user">
                    <Input type="text" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" class="fr">登录</Button>
                </Form-item>
            </Form>
        </Card>
    </div>
</template>

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
