<template>
    <div id="container">
        <div class="chat-messages">
            <main>
            </main>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Digite aqui sua mensagem"/>
                    <button type="submit" class="btn btn-primary entry">Enviar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CharRoom',
    }
</script>

<style scoped>
    @import './styles.css';
</style>