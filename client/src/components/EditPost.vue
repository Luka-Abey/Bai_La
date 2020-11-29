<template>
  <div>
    <form @submit.prevent="editPost">
       <input class="post-input-form" :value="updatedPost" type ="text">
        <input class="post-input-form" :value="updatedVideo" type="text">
        <button type = "submit" name="button">confirm edit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditPost",

  props: ['post'],

  data() {
    return {
      updatedPost: this.post.postBody,
      updatedVideo: this.post.video
    };
  },
  methods: {
    ...mapActions(["updatePost"]),
    editPost() {
      this.updatePost({postBody: this.updatedPost, video: this.updatedVideo, id: this.post._id});
      // eslint-disable-next-line
      console.log(this.updatedPost);
    }
  }
};

</script>

<style>

</style>
