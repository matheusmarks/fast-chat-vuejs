<template>
    <div id="container">
        <section>
            <h1>Fast Chat  <message-square-icon size="1x" class="custom-class"></message-square-icon></h1>
            <p>Converse, faça novas amizades e divirta-se</p>
        </section>
        <div class="login-form">
            <h2>Login <user-icon size="1.5x" class="custom-class"></user-icon></h2>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Usuário"/>
                    <input type="password" class="form-control" placeholder="Senha"/>
                    <button type="submit" class="btn btn-primary entry">Entrar</button>
                </div>
            </form>
            <a href="/signup">Não possuo uma conta</a>
        </div>
    </div>
</template>

<script>
    import { MessageSquareIcon, UserIcon } from 'vue-feather-icons';

    export default {
        name: 'LoginPage',
        components: {
            MessageSquareIcon,
            UserIcon
        }
    }
</script>

<style scoped>
    @import './styles.css';
</style>