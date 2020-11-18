<template>
  <div class="page input-form about">
    <form action="">
       Username:
       <input v-autofocus type ="text" v-model="username" placeholder="Username">
        Password:
        <input type="password" v-model="password" placeholder="Password">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import autofocus from 'vue-autofocus-directive';
Vue.directive('autofocus', autofocus);

export default {
  name: 'Login',

  data(){
    return {
      
    }
  }

}
</script>

<style>

</style>