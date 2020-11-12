<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <h1>not a social media site <img src="../public/na.png"> </h1>
    </div>
    <router-view/>
  </div>
</template>

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
  display: inline;
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
  display: inline;
  flex-direction: column;
  align-items: flex-end;
  justify-content: right;
  width:50px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-warning {
  width: 35px;
  height: 30px;
  background-color: #502c2c;
}

.btn-edit {
  background-color: #37502c;
}

.btn-send {
  height: 30px;
  width: 35px;
}

#nav {
  padding: 3px;
}

#nav a {
  font-weight: bold;
    text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
