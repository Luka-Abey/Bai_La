<template>
  <div class="home">
    <AddPost />
    <Posts v-bind:posts="posts" />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import AddPost from '@/components/AddPost.vue'
import axios from 'axios'

const url = 'http://localhost:5000/api/';

export default {
  name: 'Home',
  components: {
    Posts,
    AddPost
  },
  data() {
    return {
      posts: [],
      newPost: '',
      newVideo: ''
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




