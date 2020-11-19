<template>
  <div class="page input-form about">
    <form action="">
       Username:
       <input v-autofocus type ="text" v-model="username" placeholder="Username">
       Email:
       <input type ="email" v-model="email" placeholder="Email">
        Password:
        <input type="password" v-model="password" placeholder="Password">
      <button>Sign up</button>
      <button>Forgot your password?</button>
    </form>
  </div>
</template>

<script>
import Vue from 'vue';
import autofocus from 'vue-autofocus-directive';
Vue.directive('autofocus', autofocus);

export default {
  name: 'Signup',

  data(){
    return {
      username: '',
      password: ''
    };
  },

  methods: {
    createUser() {
      this.createUser({
        username: this.username,
        email: this.email,
        password: this.password
      });
      this
    }
  }

}
</script>

<style>

</style>