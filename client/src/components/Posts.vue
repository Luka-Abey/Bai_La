<template>
  <div>
    <h1>not a social media site <img src="../../public/na.png"> </h1>
    <div v-bind:key="post.id" v-for="post in posts">
      <PostItem v-html="post.postBody"/>
      <span v-if="typeof post.video !== 'undefined'">
        <PostItem v-html="post.video" />
      </span>
      <hr>    
      <div v-bind:key="comment.id" v-for="comment in comments">
        <CommentItem v-html="comment.commentBody" />
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from './PostItem.vue';
import CommentItem from './CommentItem.vue';

export default {
  name: "Posts",
  components: {
    PostItem,
    CommentItem
    },
  props: ["posts", "comments"]

}
</script>