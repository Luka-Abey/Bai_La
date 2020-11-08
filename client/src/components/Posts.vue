<template>
  <div>
    <h1>not a social media site</h1>
    <div v-bind:key="post.id" v-for="post in posts">
      {{post.postBody}}
    </div>
  </div>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
  name: "Posts",
  props: ["posts"]
}
</script>