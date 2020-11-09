<template>
<div>
  <div v-bind:key="comment.id" v-for="comment in comments">
        <CommentItem v-html="comment.commentBody" />
      </div>
  </div>
</template>

<script>
import CommentItem from './CommentItem';

export default {
  name: "Comments",
  components: {
    CommentItem
  },
  props:["comments"]
}
</script>

