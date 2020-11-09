<template>
  <div>
    <h1>not a social media site <img src="../../public/na.png"> </h1>
    <div v-bind:key="post.id" v-for="post in posts">
      <PostItem className ="post-text" v-html="post.postBody"/>
      <PostItem v-text="post.date" />
      <span v-if="typeof post.video !== 'undefined'">
        <PostItem v-html="post.video" />
      </span>
      <hr>    
      <div v-bind:key="comment.id" v-for="comment in comments">
        <Comments v-html="comment.commentBody" />
      </div>
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
  props: ["posts", "comments"],

  created() {
    axios.get(`${url}comments`)
      .then(res => this.comments = res.data)
      .catch(err => console.log(err));
  }

}
</script>