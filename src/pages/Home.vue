<template>
  <div id="app" class="container home-container">
      <!-- <button><router-link to="/details">Details</router-link></button>
      <button><router-link to="/albums">Albums</router-link></button> -->

      <h1>Favourites</h1>

      <!-- {{favCharacters.name}}
      {{favCharacters.company}} -->
     
        <div v-if="favCharacters.length !== 0" class="container">
          <div class="row">
              <div class="col-md-4" v-for="(user, index) in favCharacters" :key="user + index">
                    <div class="user-card">
                        <div class="user-fav" @click="RemoveFav(user.id)">

                        </div>
                        <router-link :to="`/details/albums/` + user.id">
                        <h3>{{user.username}}</h3>
                        <p>{{user.company.name}}</p>
                        <p>{{user.email}}</p>
                        </router-link>  
                    </div>    
                    
              </div>
              
          </div>
      </div>
        
      <h1>Users</h1>
      <div class="container">
          <div class="row">
              <div class="col-md-4" v-for="(user, index) in characters" :key="user + index">
                    <div class="user-card">
                        <div class="user-fav" @click="addFav(user)">

                        </div>
                        <router-link :to="`/details/albums/` + user.id">
                        <!-- <i height="20px" width="20px" class="far fa-star"></i> -->
                        <h3>{{user.username}}</h3>
                        <p>{{user.company.name}}</p>
                        <p>{{user.email}}</p>
                        </router-link>  
                    </div>    
                    
              </div>
              
          </div>
      </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
//   name: 'App',

//   data: () => ({
//    something: ''
//   }),
methods: {
    addFav(user){
        //Check id it is an object with TypeOf
        this.$store.dispatch('addFavUser', user);
        console.log(user)
    },

    RemoveFav(id){
        this.$store.dispatch('removeFavUser', id);
    }
},


  computed: {
    ...mapGetters({
      characters: "getUserList",
      favCharacters: "getFavUsers"
    }),
  },
}
</script>

<style>

</style>
