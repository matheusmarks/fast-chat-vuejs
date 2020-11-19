<template>
    <div id="container">
        <div class="form-signup">
            <h3>Cadastro</h3>
            <p>Atenção: Preencha todos os campos !</p>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Usuário"/>
                    <input type="email" class="form-control" placeholder="E-mail"/>
                    <input type="password" class="form-control" placeholder="Senha"/>
                    <input type="password" class="form-control" placeholder="Confirme sua senha"/>
                    <button type="submit" class="btn btn-primary entry">Cadastrar</button>
                </div>
            </form>
            <a href="/">Voltar</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SignUp'
    }
</script>

<style scoped>
    @import './styles.css';
</style>