<template>
    <nav class="navbar navbar-expand-lg navbar-light " style="border-bottom: 2px solid #ebebeb;">
        <div class="container">
            <router-link to="/" class="me-2"><img src="../../assets/images/logo-footer.png"></router-link>
            <router-link class="navbar-brand" to="/" style="font-size:24pt;">Kreasi Room</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav mx-auto ">
                  <li class="nav-item me-5" style="padding-top: 0.5rem" >
                    <router-link class="nav-link" aria-current="page" to="/dashboard">Event</router-link>
                  </li>
                  <template v-if="role == 'EVENT_ORGANIZER'">
                    <li class="nav-item me-5" style="padding-top: 0.5rem" >
                      <router-link class="nav-link" aria-current="page" to="/analitik">Analitik</router-link>
                    </li>
                    <li class="nav-item me-5" style="padding-top: 0.5rem" >
                      <router-link class="nav-link"  aria-current="page" to="/buat-event">Buat Event</router-link>
                    </li>
                  </template>
                  <template v-if="isAdmin">
                    <li class="nav-item me-5" style="padding-top: 0.5rem">
                      <router-link class="nav-link" to="/dashboard-admin">Admin</router-link>
                    </li>
                  </template>
                  <!-- <li class="nav-item me-5">
                    
                  </li> -->
                </ul>
                <ul class="navbar-nav ms-auto">
                  <template v-if="profile_picture == ''">
                    <li class="nav-item">
                      <div class="dropdown">
                        <button class="profile-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          <img class="profile-picture" src="../../assets/images/guest.png" alt="">
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
                          <li><a class="dropdown-item" @click.prevent="signOut">Keluar</a></li>
                        </ul>
                      </div>
                      
                    </li>
                  </template>
                  <template v-else>
                    <li class="nav-item">
                      <div class="dropdown">
                        <button class="profile-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          <img class="profile-picture" :src="profile_picture">
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
                          <li><a class="dropdown-item" @click.prevent="signOut">Keluar</a></li>
                        </ul>
                      </div>
                      <!-- <router-link class="nav-link" to="/profile"><img class="profile-picture" :src="profile_picture"></router-link> -->
                    </li>
                    
                  </template>
                  
                </ul>
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
      userID: '',
      role: '',
      profile_picture: '',
      isAdmin: localStorage.getItem('isAdmin')
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    }),
    
  },
  mounted(){
    // const user = firebase.auth().currentUser;
    //   console.log(user.providerData[0]);
    //   if(user.providerData[0].providerId == 'google.com'){
    //     this.isLoginWithGoogle = true;
    //   }

      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     this.userID = user.uid;
      //     this.email = user.email;
      //     firebase
      //     .firestore()
      //     .collection('users').where('userID', '==', this.userID).get().then((querySnapshot) => {
      //       querySnapshot.forEach((doc) => {
      //         console.log(doc.id, ' => ', doc.data())
      //         this.namaLengkap = doc.data().nama_lengkap
      //         this.profile_picture = doc.data().profile_picture
      //         this.role=doc.data().role
      //       })
      //     })
      //   }
      // });
      
      this.profile_picture = localStorage.getItem('profilePicture');
      this.role = localStorage.getItem('role');
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.clear()
          this.$router.replace({
            name: "Home"
          })
        .catch(()=>{});
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
.profile-dropdown{
  background-color: transparent;
  border-color: transparent;
}
.profile-picture{
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
  border-radius: 20px;
}
.btn-custom {
  background-color:white;
  color:#0A3D62;
  border-color: #0A3D62;;
}
.input-container {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        width: 100%;
        margin-bottom: 15px;
    }

    .icon {
  padding: 15px;
  background: #fff;
  color: #B2B5B8;
  min-width: 50px;
  text-align: center;
    background-color: #cacaca;
    border-top-right-radius: 15px;
    border-left: 2px solid #cacaca;
}

.input-field {
  width: 100%;
  padding: 10px;
    border-bottom-left-radius: 15px;
    border-right: 2px solid #cacaca;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
</style>