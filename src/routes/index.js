import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../pages/Login';
import SignUp from '../pages/SignUp';


Vue.use(VueRouter);

const Router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: LoginPage
        },
        {
            path: "/signup",
            name: "SignUp",
            component: SignUp,
        }
    ]
});

export default Router;