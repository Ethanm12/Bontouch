<template>
  <div class="container">
    <div class="nav">
      {{currentRouteName}}
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
    test: [1,2,3,4]
  }),

  mounted(){
      console.log(this.$route);
      console.log(...this.test);
  },

  computed: {
      currentRouteName() {
          return this.$route.path.split("/");

    }
  }
}
</script>

<style>

</style>