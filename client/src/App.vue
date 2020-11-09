<template>
  <div id="app">
    <Posts v-bind:posts="posts" />
    
  </div>
</template>

<script>
import Posts from './components/Posts.vue';
import axios from 'axios';

const url = 'http://localhost:5000/api/';

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
    axios.get(`${url}posts`)
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
  /* opacity: 0.9;  */
  opacity: 0.3;
  /* align-self: left; */
  }

.thick-line {
  width: 600px;
  opacity: 0.9;
}

.centerize {
  margin: auto;
}

h2, h3 {
  opacity: 0.8;
  }

.post-text {
  font-size: 24px;
  text-align: left;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  }

.comment-text {
  font-size: 20px;
  text-align: left;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.post {
  display: flex;
  flex-direction:column;
  align-items: center;
}

.comment {
  background-color: rgb(255, 252, 208);
  width: 800px;
  display: flex;
  justify-content: flex-start;
}

</style>
