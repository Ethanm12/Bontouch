import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from "vuex-persistedstate";

import { getUsers } from "@/apiRequests";

Vue.use(Vuex);

const state = {
    userList: null,
    favUsers: []
};

const mutations = {
    addUsers(state, payload){
        state.userList = payload;
    },

    addFavUser(state, payload){
        //This will need to be updated as a push
        state.favUsers.push(payload);
    },

    removeFavUser(state, payload){
        console.log("FEW")
        state.favUsers.splice(payload, 1);
    }
};

const actions = {
    async getUsers({ commit, state }){
        if (!state.userList) {
            console.log("WE IN");
            const userList = await getUsers();
            commit('addUsers', userList);
        }
    },

    addFavUser({commit}, payload){
        commit('addFavUser', payload);
        console.log(payload)
    },

    removeFavUser({state, commit}, payload){

        const itemIndex = state.favUsers.findIndex(
            (item) => item.id === payload.id
          );
          console.log(itemIndex)
          commit("removeFavUser", itemIndex);
          if (itemIndex !== -1) {
            commit("removeFavUser", itemIndex);
          }else{
              console.error("Shit")
          }
    }
};

const getters = {
    getUserList: (state) => state.userList,
    getFavUsers: (state) => state.favUsers
}

export default new Vuex.Store({
        state,
        mutations,
        actions,
        getters,
        // plugins: [createPersistedState()]
});
