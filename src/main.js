import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/brands.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import * as firebase from "firebase";
import store from "./store/store";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAe-_mp4c0PVXUxP-e15LMyKrcmSOMIiiI",
  authDomain: "webeventkreasix.firebaseapp.com",
  projectId: "webeventkreasix",
  storageBucket: "webeventkreasix.appspot.com",
  messagingSenderId: "318959559721",
  appId: "1:318959559721:web:8c2979634ce519982f6838"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
