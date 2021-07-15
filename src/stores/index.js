import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // put variables and collections here
    userData: null,
  },
  actions: {
   //  getUser({ commit }) {
   //    if (localStorage.token && localStorage.token !== undefined) {
   //      axios
   //        .get("http://kareem.kreatifin.com/api/user", {
   //          headers: {
   //            Authorization: `Bearer ${localStorage.token}`,
   //          },
   //        })
   //        .then((res) => {
   //          console.log(res);
   //          commit("SET_POSTS", res.data);
   //        })
   //        .catch((err) => {
   //          console.log(err);
   //          // localStorage.clear();
   //        });
   //    }
   //    // axios
   //    //   .get("https://swapi.dev/api/people/1")
   //    //   .then(function(response) {
   //    //     commit("SET_POSTS", response.data);
   //    //   })
   //    //   .catch(function(error) {
   //    //     console.log(error);
   //    //   });
   //  },
  },
  getters: {
    // put sychronous functions for changing state e.g. add, edit, delete
  },
  mutations: {
   //  SET_POSTS(state, data) {
   //    state.userData = data;
   //  },
    // put sychronous functions for changing state e.g. add, edit, delete
  },
});
