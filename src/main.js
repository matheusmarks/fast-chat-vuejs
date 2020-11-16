import Vue from 'vue';
import App from './App.vue';
import Router from './routes/index';
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3333',
}))

new Vue({
  Router,
  render: (h) => h(App),
}).$mount('#app');
