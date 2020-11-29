<template>
  <div>
    <form @submit.prevent="editPost">
       <input class="post-input-form" v-model="postBody" type ="text">
        <input class="post-input-form" v-model="video" type="text">
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
      postBody: this.post.postBody,
      video: this.post.video
    };
  },
  methods: {
    ...mapActions(["updatePost"]),
    editPost() {
      this.updatePost({postBody: this.postBody, video: this.video, id: this.post._id});
      // eslint-disable-next-line
      console.log(this.postBody);
    }
  }
};

</script>

<style>

</style>
