<template>
  <div class="page input-form about">
    <form>
       Username:
       <input v-autofocus type ="text" v-model="username" placeholder="Username">
        Password:
        <input type="password" v-model="password" placeholder="Password">
      <button @click.prevent="loginSubmit">Submit</button>
      <button>Forgot your password?</button>
    </form>
    {{StateUser}}
  </div>
</template>

<script>
import Vue from 'vue';
import autofocus from 'vue-autofocus-directive';
Vue.directive('autofocus', autofocus);
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Login',

  data(){
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions(["loginUser"]),

    loginSubmit() {
      this.loginUser({username: this.username, password: this.password});
      this.username='',
      this.password=''
      }
  },

  computed: mapGetters(["isAuthenticated", "StatePosts", "StateUser"])

}
</script>

<style>

</style>