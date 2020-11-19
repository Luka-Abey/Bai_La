<template>
  <div class="page">
    <form @submit.prevent="sendPost">
      <div>
        <input class="post-input-form" type ="text" v-model="newPost" placeholder="Write here!">
        <input class="post-input-form" type="text" v-model="newVideo" placeholder="Video ID links here!">
        <button type = "submit" name="button" class="btn btn-send"><img src='../../public/send.png'></button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPost",
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


