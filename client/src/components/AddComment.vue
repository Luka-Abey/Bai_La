<template>
  <form :key="post._id" @submit.prevent="sendComment(post._id)">
    <div class="input-form">
      <input v-bind:key="post._id" type ="text" v-model="newComment" placeholder="Write comment here!">
      <!-- <button type = "submit" class="btn btn-send"> -->
      <button type = "submit">
        <!-- <img src='../../public/send.png'> -->
        Send comment
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddComment",

  props: ['post'],

  data() {
    return {
      newComment: ''
    };
  },
  methods: {
    ...mapActions(["addComment"]),
    
    sendComment() {
      this.addComment({commentBody: this.newComment, post: this.post._id});
      this.newComment = ''
    }
  }
};
</script>


<style>

</style>


