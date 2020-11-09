<template>
  <div id="app">
    <Posts v-bind:posts="posts" />
  </div>
</template>

<script>
import Posts from './components/Posts.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Posts
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    axios.get(`http://localhost:5000/api/posts`)
      .then(res => this.posts = res.data)
      .catch(err => console.log(err));
  }
}


</script>

<style>
#app {
  background-color: rgb(250, 235, 215);
  height: fit-content;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
  padding-bottom: 150px;
}

body { 
    animation: fadeInAnimation ease 3s ;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards; 
} 
  
@keyframes fadeInAnimation { 
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
     } 
} 

hr {
  width: 400px;
  opacity: 0.3;
  }

</style>
