<template>
  <div id="app">
    <div class="container">
      <AddPost/>
      <Posts />
    </div>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
import AddPost from "@/components/AddPost.vue";

export default {
  name: "app",
  components: {
    Posts,
    AddPost
  }
};
</script>

<style>
</style>
