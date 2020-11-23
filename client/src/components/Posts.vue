<template>
  <div>
  <div class="page">
    
    <div class = "post" v-bind:key="post._id" v-for="post in allPosts">
      <div class = "post-text-buttons">
        <div class = "post-text" v-html="post.postBody"/>
        <button><img src='../../public/menu.png'></button>
        <button @click="deletePost(post._id)" class="btn btn-warning"><img src='../../public/bin.png'></button>
        <editPost :post="post" />
        <button @click="editPost(post._id)" class="btn btn-edit">edit</button>
      </div>
        <span v-if="post.video !== '<iframe src=https://www.youtube.com/embed/ frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>'">
          <div v-html="post.video" />
        </span>
      <hr>    
      
      <div class = "comment" v-bind:key="comment._id" v-for="comment in allComments">
        <div v-if="post._id == comment.post">
        <div class ="comment-text" v-html="comment.commentBody" />
          <div>
            <button v-on:click="deleteComment(comment._id)" class="btn btn-warning"><img src='../../public/bin.png'></button>
          </div>
        <hr>
        </div>
      </div>
      <form :key="post._id" @submit.prevent="sendComment(post._id)">
        <!-- test build -->
        <div class="input-form">
          <input v-bind:key="post._id" type ="text" v-model="newComment" placeholder="Write comment here!">
          <button type = "submit" class="btn btn-send"><img src='../../public/send.png'></button>
        </div>
      </form>
      <hr class="thick-line">
    </div>
  </div>
  
  </div>

  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import editPost from '@/components/EditPost.vue'

export default {
  name: "Posts",

  components: {
    editPost
  },

  data() {
    return {
      newComment: ''
    }
  },

  methods: {
    ...mapActions(["fetchPosts", "fetchComments", "addComment", "deletePost", "deleteComment", "updatePost"]),
    
    sendComment(postRef) {
      this.addComment({commentBody: this.newComment, post: postRef});
      this.newComment = ''
    },
    

    editPost(post) {
      const updatePost = {
        id: post._id,
        postBody: post.newPost,
        video: post.newVideo
      };

      this.updatePost(updatePost);
    }
  },
  computed: mapGetters(["allPosts", "allComments"]),
  created() {
    this.fetchPosts();
    this.fetchComments();
  }
};
</script>

