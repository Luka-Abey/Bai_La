<template>
  <div>
    <h1>not a social media site</h1>
    <div v-bind:key="post.id" v-for="post in posts">
      <PostItem v-bind:post="post" />
    </div>
  </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
  name: "Posts",
  components: {
    PostItem
    },
  props: ["posts"]
}
</script>