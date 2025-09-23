<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to Your MEVN App</h1>
    <p>{{ serverMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      serverMessage: 'Loading message from server...'
    };
  },
  async created() {
    try {
      // Make a request to our test API endpoint
      const response = await axios.get('/api/test');
      this.serverMessage = response.data.message;
    } catch (error) {
      console.error("There was an error fetching the data:", error);
      this.serverMessage = 'Failed to load message. Is the server running?';
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>