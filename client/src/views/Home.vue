<template>
  <div id="app">
    <div class="container">
      <AddPost />
      <Posts />
    </div>
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import AddPost from '@/components/AddPost.vue'
import axios from 'axios'

const url = 'http://localhost:5000/api/'

export default {
  name: 'app',
  components: {
    Posts,
    AddPost
  },
  data() {
    return {}
  },
  created() {
    axios
      .get(`${url}users/views`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
}
</script>

<style></style>
