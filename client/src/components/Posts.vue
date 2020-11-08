<template>
  <div>
    <h1>not a social media site</h1>
    <div v-bind:key="post.id" v-for="post in posts">
      <PostItem v-html="post.postBody" />
      <span v-if="typeof post.video !== 'undefined'">
        <PostItem v-html="post.video" />
      </span>
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