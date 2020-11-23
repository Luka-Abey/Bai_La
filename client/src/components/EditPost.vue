<template>
  <div>
    <form @submit.prevent="updatePost">
       <input class="post-input-form" :value="post.postBody" type ="text">
        <input class="post-input-form" :value="post.video" type="text">
        <button type = "submit" name="button" class="btn btn-send"><img src='../../public/send.png'></button>
    </form>
  </div>
</template>

template needs:
open as a pop up/layered component 

<script>

export default {
  props: ['post'],
  components: {

  }
}
</script>

<style>

</style>
