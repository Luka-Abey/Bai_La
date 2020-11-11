<template>
  <div class="page">
    <h1>not a social media site <img src="../../public/na.png"> </h1>
    <form @submit.prevent="sendPost" class="input-form">
      <div class="input-form">
        <input type ="text" v-model="newPost" placeholder="Write here!">
        <input type="text" v-model="newVideo" placeholder="Video ID links here!">
        <button type = "submit" name="button" class="btn-send"><img src='../../public/send.png'></button>
      </div>
    </form>
    <div class = "post" v-bind:key="post.id" v-for="post in posts">
      <PostItem class = "post-text" v-html="post.postBody"/>
      <span v-if="post.video !== '<iframe src=https://www.youtube.com/embed/ frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>'">
        <PostItem v-html="post.video" />
      </span>
      <button v-on:click="deletePost(post._id)" class="btn-warning"><img src='../../public/bin.png'></button>
      <hr>    
      
      <div class = "comment" v-bind:key="comment.id" v-for="comment in comments">
        <div v-if="post._id == comment.post">
        <Comments class ="comment-text" v-html="comment.commentBody" />
          <div>
            <button v-on:click="deleteComment(comment._id)" class="btn-warning"><img src='../../public/bin.png'></button>
          </div>
        <hr>
        </div>
      </div>
      <form @submit.prevent="sendComment(post._id)">
        <div class="input-form">
          <input type ="text" v-model="newComment" placeholder="Write comment here!">
          <button type = "submit" class="btn-send"><img src='../../public/send.png'></button>
        </div>
      </form>
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
      newVideo: '',
      newComment: ``
    }
  },
  methods: {
    sendPost() {
      axios.post(`${url}posts`, {
        postBody: this.newPost,
        video: this.newVideo.trim()})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },

    sendComment(refPost){
      axios.post(`${url}comments`, {
        post: refPost,
        commentBody: this.newComment
      })
      .then(this.newComment = '')
        .catch(err => console.log(err));
    },

    deletePost(refPost){
      axios.delete(`${url}posts/${refPost}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    },

    deleteComment(refComment){
      axios.delete(`${url}comments/${refComment}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  },
  created() {
    axios.get(`${url}comments`)
      .then(res => this.comments = res.data)
      .catch(err => console.log(err));
  }
}
</script>
