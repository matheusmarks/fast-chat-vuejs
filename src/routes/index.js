import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../pages/Login';
import SignUp from '../pages/SignUp';
import ChatRoom from '../pages/ChatRoom';


Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "LoginPage",
            component: LoginPage
        },
        {
            path: "/signup",
            name: "SignUp",
            component: SignUp,
        },
        {
            path: "/chatroom",
            name: "ChatRoom",
            component: ChatRoom,
        }
    ]
});

export default router;