<template>
  <div>
    <h1>not a social media site</h1>
    <div v-bind:key="post.id" v-for="post in posts">
      <PostItem v-html="post.postBody" />
      <div>
      <iframe width="800" src="https://www.youtube.com/embed/AZiJxNTdzwI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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