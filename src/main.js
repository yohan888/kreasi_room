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
  apiKey: "AIzaSyAe-_mp4c0PVXUxP-e15LMyKrcmSOMIiiI",
  authDomain: "webeventkreasix.firebaseapp.com",
  databaseURL: "https://webeventkreasix-default-rtdb.firebaseio.com",
  projectId: "webeventkreasix",
  storageBucket: "webeventkreasix.appspot.com",
  messagingSenderId: "318959559721",
  appId: "1:318959559721:web:8c2979634ce519982f6838"
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