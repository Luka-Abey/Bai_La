<template>
  <div id="app">
    <Posts v-bind:posts="posts" />
  </div>
</template>

<script>
import Posts from './components/Posts.vue'
import axios from 'axios'

const url = 'http://localhost:5000/api/'

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
    axios
      .get(`${url}posts`)
      .then(res => (this.posts = res.data))
      .catch(err => console.log(err))
  }
}
</script>

<style>
#app {
  background-color: rgb(255, 226, 189);
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
  animation: fadeInAnimation ease 3s;
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

h2,
h3 {
  opacity: 0.8;
}
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-text {
  font-size: 24px;
  text-align: left;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.post {
  display: block;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin-left: 20px;
  margin-right: 20px;
}

.comment {
  text-align: left;
  max-width: 100%;
  display: block;
}

iframe {
  width: 100%;
}

.comment-text {
  font-size: 20px;
  text-align: left;
  min-width: 100%;
  max-width: 800px;
  margin-right: auto;
}

hr {
  width: 50%;
  opacity: 0.3;
}

.thick-line {
  width: 70%;
  opacity: 0.9;
}


input {
    width: 100%;
    height: 30px;
    opacity: 0.5;
    font-size: 20px;
    border: 0ch;
    display: inline-block;
}

button {
  color: rgb(255, 226, 189);
  background-color: #2c3e50;
  opacity: 0.9;
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: right;
  width:50px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-warning {
  width: 40px;
  background-color: #502c2c;
}

.btn-edit {
  background-color: #37502c;
}

.btn-send {
  height: 30px;
  width: 35px;

}

</style>
