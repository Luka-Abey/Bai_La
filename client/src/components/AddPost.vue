<template>
  <div class="page">
    <form @submit.prevent="sendPost" class="input-form">
      <div class="input-form">
        <input type ="text" v-model="newPost" placeholder="Write here!">
        <input type="text" v-model="newVideo" placeholder="Video ID links here!">
        <button type = "submit" name="button" class="btn-send"><img src='../../public/send.png'></button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddPost",
  data() {
    return {
      newPost: '',
      newVideo: ''
    }
  },
  methods: {
    ...mapActions(['addPost']),

    sendPost() {
      console.log(this.newPost); 
      this.addPost(this.newPost, this.newVideo)
    }
  }
}
</script>

<style>

</style>