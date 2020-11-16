<template>
  <div id="app">
    <ChatRoom />
  </div>
</template>

<script>
// import LoginPage from './pages/Login/index.vue';
import ChatRoom from './pages/ChatRoom/index.vue';

export default {
  name: 'App',
  components: {
    ChatRoom
  }
}

</script>

<style>

  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f1;
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 15px;
    font-weight: 400;
  }

</style>
