import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // put variables and collections here
    userData: null,
    url: 'https://gmedia.primakom.co.id/'
  },
  actions: {
    getMahasiswa({ commit }) {
      if (localStorage.token && localStorage.token !== undefined) {
        axios
          .get("https://gmedia.primakom.co.id/auth/mahasiswa/profil", {
            headers: {
              Authorization: localStorage.token,
            },
          })
          .then((res) => {
            console.log(res);
            console.log("mahasiswa");
            commit("SET_POSTS", res.data);
          })
          .catch((err) => {
            console.log(err);
            // localStorage.clear();
          });
      } else {
        // window.location.replace("/");
        console.log("Login First")
      }
    },
    getPemandu({ commit }) {
      if (localStorage.token && localStorage.token !== undefined) {
        axios
          .get("https://gmedia.primakom.co.id/auth/pemandu/profil/", {
            headers: {
              Authorization: localStorage.token,
            },
          })
          .then((res) => {
            console.log(res);
            console.log("pemandu");
            commit("SET_POSTS", res.data);
          })
          .catch((err) => {
            console.log(err);
            // localStorage.clear();
          });
      } else {
        // window.location.replace("/");
        console.log("Login First")
      }
    },
    getAdmin({ commit }) {
      if (localStorage.token && localStorage.token !== undefined) {
        axios
          .get("https://gmedia.primakom.co.id/gmedia/superadmin/profil/", {
            headers: {
              Authorization: localStorage.token,
            },
          })
          .then((res) => {
            console.log(res);
            commit("SET_POSTS", res.data);
          })
          .catch((err) => {
            console.log(err);
            // localStorage.clear();
          });
      } else {
        // window.location.replace("/");
        console.log("Login First")
      }
    },
  },
  getters: {
    // put sychronous functions for changing state e.g. add, edit, delete
  },
  mutations: {
    SET_POSTS(state, data) {
      state.userData = data;
    },
    // put sychronous functions for changing state e.g. add, edit, delete
  },
});
