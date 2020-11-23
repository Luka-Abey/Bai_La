<template>
  <div>
    <form @submit.prevent="editPost">
       <input class="post-input-form" :value="post.postBody" type ="text">
        <input class="post-input-form" :value="post.video" type="text">
        <button type = "submit" name="button" class="btn btn-send"><img src='../../public/send.png'></button>
    </form>
    
  </div>
</template>

template needs:
open as a pop up/layered component 

<script>
import { mapActions } from "vuex";

export default {
  name: "EditPost",

  props: ['post'],

  data() {
    return {
      updatedPost: 'new values: this is what edits',
      updatedVideo: 'and this'
    };
  },
  methods: {
    ...mapActions(["updatePost"]),
    editPost() {
      this.updatePost({postBody: this.updatedPost, video: this.updatedVideo, id: this.post._id});
    }
  }
};

</script>

<style>

</style>
