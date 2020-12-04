<template>
  <div class="page input-form about">
    <form @submit.prevent="signUp">
      <div>
       Username:
       <input v-autofocus type ="text" v-model="username" placeholder="Username">
       Email:
       <input type ="email" v-model="email" placeholder="Email">
        Password:
        <input type="password" v-model="password" placeholder="Password">
      <button>Sign up</button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import autofocus from 'vue-autofocus-directive';
Vue.directive('autofocus', autofocus);
import { mapActions } from 'vuex';

export default {
  name: 'Signup',

  data(){
    return {
      username: '',
      password: '',
      email: ''
    };
  },

  methods: {
    ...mapActions(["createUser"]),

    signUp() {
      this.createUser({
        username: this.username,
        email: this.email,
        password: this.password
      });
      this.username ='', this.email = '', this.password = ''
    }
  }
}
</script>

<style>

</style>