import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/regular.css'
import * as firebase from "firebase";
import store from "./store/store";


Vue.use(VueClipboard);
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDMKsD0PCcFtinUDc82Etkv7VDbvBWP24I",
  authDomain: "kreasiroom2.firebaseapp.com",
  databaseURL: "https://kreasiroom2-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "kreasiroom2",
  storageBucket: "kreasiroom2.appspot.com",
  messagingSenderId: "1000844477009",
  appId: "1:1000844477009:web:a847349bb804c59074ae70",
  measurementId: "G-PEVS65YZFJ"
};

// Ini yang di tambahkan

// Batas tambahan

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')