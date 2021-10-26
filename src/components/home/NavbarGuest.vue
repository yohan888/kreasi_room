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
            <a class="nav-link active" aria-current="page" href="#">Beranda</a>
          </li>
          <li class="nav-item me-5">
            <a class="nav-link" href="#">Tentang</a>
          </li>
          <li class="nav-item me-5">
            <a class="nav-link" href="#">Kontak</a>
          </li>
      </ul>
      <template v-if="user.loggedIn">
        <button class="btn btn-outline-light me-2"><router-link to="/masuk">{{user.data.displayName}}</router-link></button>
        <button class="btn btn-outline-light daftar"><a @click.prevent="signOut">Keluar</a></button>
      </template>
      <template v-else>
        <button class="btn btn-outline-light me-2"><router-link to="/masuk">Masuk</router-link></button>
        <button class="btn btn-outline-light daftar"><router-link to="/daftar">Daftar Sekarang</router-link></button>
      </template>
      
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  computed: {
    ...mapGetters({
      user: "user"
    })
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