<template>
  <div>
    <Login />
    <Signup />
  </div>
</template>

<script>

import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

export default {
  name: "app",
  components: {
    Login,
    Signup
  }
};
</script>

<style>

</style>