<template>
  <div>
    <!-- <button v-on:click="isHidden = !isHidden">Login</button> -->
    <!-- <button>Signup</button> -->

    <label for="toggle_button">
      <span v-if="currentState"><Login/></span>
      <span v-if="! currentState"><Signup/></span>
<input type="checkbox" id="toggle_button" v-model="checkedValue">
<span class="toggle__switch"></span>

    </label>

  </div>
</template>

<script>

import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

export default {
  name: "login",
  components: {
    Login,
    Signup
  },
  
  data(){
    return {
      currentState: true
    }
  },

  computed: {
    isActive() {
        return this.currentState;
    },

    checkedValue: {
        get() {
            return this.currentState
        },
        set(newValue) {
            this.currentState = newValue;
        }
    }
}
};
</script>

<style>

</style>