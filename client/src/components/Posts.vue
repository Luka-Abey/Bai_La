<template>
  <div>
  <div class="page">
    <div class = "post" v-bind:key="post._id" v-for="post in allPosts">
      <div class = "post-text-buttons">
        <div class = "post-text" v-html="post.postBody"/>
        <postMenu :post="post" />
      </div>
        <span v-if="post.video">
          <!-- <div v-html="post.video" /> deprecated method --> 
          <vue-media-embed class="media" :source="post.video" />
        </span>
        <!-- from now, input url instead of youtube code been using previously -->
        <!-- <vue-media-embed class="media" source="https://vimeo.com/498010744"/> -->
        <!--
        need to try get working with soundcloud and mixcloud      
        <vue-media-embed class="media" source="https://www.mixcloud.com/sableradio/dj-babygod-7121/"/>
        <vue-media-embed class="media" source="https://soundcloud.com/avigad/red-light-radio?fbclid=IwAR106Hl0yhSIrWjWbiLAtSDT_LmwQAGX3jAYS2-a7awwp81CEB-r98JE7l4"/> 
        -->

      <hr>    
      
      <div class = "comment" v-bind:key="comment._id" v-for="comment in allComments">
        <div v-if="post._id == comment.post">
          <div class ="comment-text" v-html="comment.commentBody" />
            <div>
              <button v-on:click="deleteComment(comment._id)" class="btn btn-warning">
                <!-- <img src='../../public/bin.png'> -->
                DEL
                ETE
              </button>
            </div>
            <hr>
          </div>
        </div>
        <addComment :post="post" />
        <hr class="thick-line">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import addComment from '@/components/AddComment.vue';
import postMenu from '@/components/PostMenu.vue';

export default {
  name: "Posts",

  data() {
    return {
    isHidden: true
    }
  },

  components: {
    addComment,
    postMenu
  },

  methods: {
    ...mapActions(["fetchPosts", "fetchComments", "addComment", "deletePost", "deleteComment"]),
  },

  computed: mapGetters(["allPosts", "allComments"]),
  created() {
    this.fetchPosts();
    this.fetchComments();
  }
};
</script>

