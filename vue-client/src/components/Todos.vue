<template>
  <div>
  <div class="page">
    <div class = "post" v-bind:key="post._id" v-for="post in allPosts">
      <div class = "post-text" v-html="post.postBody"/>
      <span v-if="post.video !== '<iframe src=https://www.youtube.com/embed/ frameborder=0 allow=accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>'">
        <div v-html="post.video" />
      </span>
      <button @click="deletePost(post._id)" class="btn-warning"><img src='../../public/bin.png'></button>
      <hr>    
      
      <!-- <div class = "comment" v-bind:key="comment.id" v-for="comment in comments">
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
          <input v-bind:key="post._id" type ="text" v-model="newComment" placeholder="Write comment here!">
          <button type = "submit" class="btn-send"><img src='../../public/send.png'></button>
        </div>
      </form> -->
      <hr class="thick-line">
    </div>
  </div>
  
  </div>

  
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchPosts", "deletePost", "updatePost"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };

      this.updateTodo(updTodo);
    }
  },
  computed: mapGetters(["allPosts"]),
  created() {
    this.fetchPosts();
  }
};
</script>

