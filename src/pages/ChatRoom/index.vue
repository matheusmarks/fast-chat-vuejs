<template>
    <div id="container">
        <div class="chat-messages">
            <main>
                <div class="message" :key="index" v-for="(message, index) in this.messages">
                    <strong>{{ message['user'] }}</strong>: 
                    {{ message['message'] }}
                </div>
            </main>
            <form>
                <div class="form-group" v-on:submit.prevent="sendMessage">
                    <input type="text" v-model="inputMessage" class="form-control" placeholder="Digite aqui sua mensagem"/>
                    <button type="button" @click="sendMessage" class="btn btn-primary entry">Enviar</button>
                </div>
            </form>
        </div>
           

        <div class="chat-info">
            <h3>Fast Chat <message-square-icon size="1x" class="custom-class"></message-square-icon></h3>
            <p>Online {{ this.connectedUsers }}</p>
            <div class="online">
                <p>Sofia <user-icon size="1x" class="user-icon"></user-icon></p>
                <p>Chad <user-icon size="1x" class="user-icon"></user-icon><p>
                <p>Yardle <user-icon size="1x" class="user-icon"></user-icon></p>
                <p>Zoe <user-icon size="1x" class="user-icon"></user-icon></p>
                <p>Luke <user-icon size="1x" class="user-icon"></user-icon><p>
                <p>Mikaela <user-icon size="1x" class="user-icon"></user-icon></p>
            </div>
            <a href="/">Sair <arrow-right-icon size="1x" class="custom-class"></arrow-right-icon></a>
        </div>
    </div>
</template>

<script>
    import io from 'socket.io-client';
    import { MessageSquareIcon, UserIcon, ArrowRightIcon } from 'vue-feather-icons';

    export default {
        name: 'ChatRoom',
        components: {
            MessageSquareIcon,
            UserIcon,
            ArrowRightIcon
        },
        data() {
            return {
                messages: [],
                inputMessage: '',
                connectedUsers: 0,
                users: [],
                socket: io('http://localhost:3000', {
                    transports: ['websocket'],
                }),
            }
        },
        mounted() {  
                this.socket.emit('newUserConnected', this.$route.query.username); 

                this.socket.on('users', numberOfOnlineUsers => {
                    console.log(numberOfOnlineUsers);
                    this.connectedUsers = numberOfOnlineUsers;
                });
            
            this.getAllMessages();
        },
        methods: {
            getAllMessages() {
                this.socket.on('messages', msg => {
                    this.messages = msg;
                });
            },
             sendMessage(e) {
                 if(this.inputMessage !== '') {
                     e.preventDefault();

                     const message = {
                     id: 3,
                     user: this.$route.query.username,
                     message: this.inputMessage,
                    }

                    this.socket.emit('receivedMessage', message);
                    this.socket.on('message', msg => {
                        this.messages.push(msg);
                    });

                 }

                 this.inputMessage = '';
            }
        },
        beforeDestroy() {
            this.socket.emit('disconnectedUser', this.$route.query.username);
            this.socket.on('users', (numberOfOnlineUsers) => {
                console.log('teste');
                this.connectedUsers = numberOfOnlineUsers;
            });
        }
      }
</script>

<style scoped>
    @import './styles.css';
</style>