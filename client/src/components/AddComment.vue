<template>
  <form :key="post._id" @submit.prevent="sendComment(post._id)">
    <div class="input-form">
      <input v-bind:key="post._id" type ="text" v-model="newComment" placeholder="Write comment here!">
      <button type = "submit" class="btn btn-send">
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
  data() {
    return {
      newPost: '',
      newVideo: ''
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    sendPost() {
      this.addPost({postBody: this.newPost, video: this.newVideo});
      this.newPost = '',
      this.newVideo = ''
    }
  }
};
</script>


<style>

</style>


