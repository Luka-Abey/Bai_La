<template>
  <div>
    <button @click="menuHidden = !menuHidden"><img src='../../public/menu.png'></button>
    
    <div v-if="!menuHidden" class="post-menu-card">
      <button @click="deletePost(post._id)">
            <!-- <img src='../../public/bin.png'> -->
        delete
      </button>

      <button @click="editableHidden = !editableHidden">
        edit
      </button>
      <editPost v-if="!editableHidden" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import editPost from '@/components/EditPost.vue';

export default {
  name: "PostMenu",

  props: ['post'],

  components: {
    editPost
  },

  data() {
    return {
      menuHidden: true,
      editableHidden: true
    }
  },
  
  methods: {
    ...mapActions(["deletePost"]),
  },

  
};

</script>

<style>

</style>