<template>
    <div>
        <h1>Halaman profile {{ email }}</h1>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            userID: '',
            email: '',

        }
    },
    mounted(){
        firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      this.userID = user.uid;
      this.email = user.email;
    } else {
      // User is signed out
      // ...
    }
  });
    }
}
</script>