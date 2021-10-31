<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color:#4074ac">
  <div class="container">
    <a href="#" class="me-2"><img src="../../assets/images/logo-footer.png"></a>
    <a class="navbar-brand" href="#" style="font-size:24pt;">Kreasi Room</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
          <li class="nav-item me-5">
            <router-link class="nav-link active" aria-current="page" to="/">Beranda</router-link>
          </li>
          <li class="nav-item me-5">
            <router-link class="nav-link" to="/tentang">Tentang</router-link>
          </li>
          <li class="nav-item me-5">
            <router-link class="nav-link" to="/kontak">Kontak</router-link>
          </li>
          <template v-if="user.loggedIn">
            <li class="nav-item me-5">
              <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
          </template>
      </ul>
      <template v-if="user.loggedIn">
        <router-link to="/profile"><button class="btn btn-outline-light me-2">Profile</button></router-link>
        <a @click.prevent="signOut"><button class="btn btn-outline-light daftar">Keluar</button></a>
      </template>
      <template v-else>
        <router-link to="/masuk"><button class="btn btn-outline-light me-2">Masuk</button></router-link>
        <router-link to="/daftar"><button class="btn btn-outline-light daftar">Daftar Sekarang</button></router-link>
      </template>
      
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  data(){
    return{
      userID: ''
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    }),
    
  },
  mounted(){
    
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home"
          });
        });
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: inherit;
}
.daftar {
  background-color:white;
  color:black;
}
</style>