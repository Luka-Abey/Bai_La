<template>
  <div id="app">
    <Posts />
  </div>
</template>

<script>
import Posts from './components/Posts.vue';
// import axios from 'axios';


export default {
  name: 'App',
  components: {
    Posts
  }
  // data() {
  //   return {
  //     posts: []
  //   }
  // },
  // created() {
  //   axios.get('http://localhost:5000/api/posts')
  //     .then(res => this.posts = res.data)
  //     .catch(err => console.log(err));
  // }
}


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
