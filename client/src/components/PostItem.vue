<template>
  <div>
    {{post.postBody}}
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: ["post"]
}
</script>