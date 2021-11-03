import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null,
            userId: '',
            namaLengkap: '',
            jenisKelamin: '',
            kota: '',
            provinsi: '',
            role: '',
            tanggalLahir: '',
            telfon: '',
            profilePicture: '',
            email: '',
        },

        dataUser: []
    },
    getters: {
        user(state){
            return state.user
        },
        dataUser(state){
            return state.dataUser
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SET_DATA_USER(state, data){
            state.dataUser = data;
        }
    },
    actions: {
        fetchUser({ commit }, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email,
                    userID: user.userId
                });
            } else {
                commit("SET_USER", null);
            }
        },
        getUser({ commit }) {
            const userID = firebase.auth().currentUser.uid
            firebase.firestore().collection('users').where('userID', '==', userID).get().then(querySnapshot => {
              if (querySnapshot.empty) {
                //this.$router.push('/HelloWorld')
              } else {
                this.loading = false;
                var data = [];
                querySnapshot.forEach(doc => {
                  data.push(doc.data());
                });
      
                commit("SET_DATA_USER", data);
              }
            });
          }
    }
});