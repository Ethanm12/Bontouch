<template>
  <div class="albums">
      {{user}}
      {{getSlug}}
      <!-- <button><router-link to="/albums/PageOne">Page ONE</router-link></button> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      characters: "getUserList",
    }),

    getSlug(){
      return this.$route.params.userid;
    },

    user() {
            // for of loop and the slugify the name or array.find which is an arrow function
            return this.characters.find((p) => p.id === this.$route.params.userid)
        },
  }
}
</script>

<style>

</style>