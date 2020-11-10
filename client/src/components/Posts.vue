<template>
  <div class="page">
    <h1>not a social media site <img src="../../public/na.png"> </h1>
    <form @submit.prevent="sendPost">
      <div class="input-form">
        <input type ="text" v-model="newPost" placeholder="Write here!">
        <input type="text" v-model="newVideo" placeholder="Video ID links here!">
        <button type = "submit" name="button">Post</button>
      </div>
    </form>
    <div class = "post" v-bind:key="post.id" v-for="post in posts">
      <PostItem class = "post-text" v-html="post.postBody"/>
      <span v-if="typeof post.video !== 'undefined'">
        <PostItem v-html="post.video" />
      </span>
      <hr>    
      <div class = "comment" v-bind:key="comment.id" v-for="comment in comments">
        <div v-if="post._id == comment.post">
        <Comments class ="comment-text" v-html="comment.commentBody" />
          <div class="centerize">
            <hr>
          </div>
        </div>
      </div>
      <hr class="thick-line">
    </div>
  </div>
</template>

<script>
import PostItem from './PostItem.vue';
import Comments from './Comments.vue';
import axios from 'axios';
const url = 'http://localhost:5000/api/';

export default {
  name: "Posts",
  components: {
    PostItem,
    Comments
    },
  props: ["posts"],

  data(){
    return {
      comments: [],
      newPost: '',
      newVideo: null
    }
  },
  methods: {
    sendPost() {
      if (this.video == null) {
        axios.post(`${url}posts`, {
        postBody: this.newPost
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      }
      else {
      axios.post(`${url}posts`, {
        postBody: this.newPost,
        video: this.newVideo
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      }
    }
  },
  created() {
    axios.get(`${url}comments`)
      .then(res => this.comments = res.data)
      .catch(err => console.log(err));
  }
}
</script>
