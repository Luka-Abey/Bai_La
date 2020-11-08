<template>
  <div>
    <h1>not a social media site</h1>
    <div v-bind:key="post.id" v-for="post in posts">
      {{post.postBody}}
    </div>
  </div>
</template>

<script>

export default {
  name: "Posts",
  props: ["posts"]
}
</script>