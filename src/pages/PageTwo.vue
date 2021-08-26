<template>
  <div class="PageTwo">
      This is page two
      {{noice}}
  </div>
</template>

<script>
export default {

    mounted(){
        console.log(this.$route);
    },

    computed: {
        noice(){
            return this.$route;
        }
    }

}
</script>

<style>

</style>