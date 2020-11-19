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
                    <input type="text" v-model="username" class="form-control" placeholder="Usuário"/>
                    <input type="password" v-model="password" class="form-control" placeholder="Senha"/>
                    <button type="submit" @click="entry" class="btn btn-primary entry">Entrar</button>
                </div>
            </form>
            <a href="/signup">Não possuo uma conta</a>
        </div>
    </div>
</template>

<script>
    import router from '../../routes/index.js';
    import { MessageSquareIcon, UserIcon } from 'vue-feather-icons';

    export default {
        name: 'LoginPage',
        components: {
            MessageSquareIcon,
            UserIcon
        },
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            entry() {
                router.push({ path: '/chatroom', query: { username: this.username } });
            }
        }
    }
</script>

<style scoped>
    @import './styles.css';
</style>