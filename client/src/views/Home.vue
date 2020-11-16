<template>
  <div class="home">
    <AddPost />
    <Posts />
  </div>
</template>

<script>
import Posts from '@/components/Posts.vue'
import AddPost from '@/components/AddPost.vue'

export default {
  name: 'Home',
  components: {
    Posts,
    AddPost
  }
}
</script>




