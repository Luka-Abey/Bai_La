<template>
  <div class="home">
    <Posts v-bind:posts="posts" />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import axios from 'axios'

const url = 'http://localhost:5000/api/'

export default {
  name: 'Home',
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




