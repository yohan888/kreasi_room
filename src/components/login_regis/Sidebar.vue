<template>
    <div>
        <div class="d-flex align-items-center">
            <span><img src="../../assets/images/logo-footer.png"></span>
            &emsp;<span class="text-white" style="font-weight: bold; font-size: 1.5rem">Kreasi Room</span>
        </div>
        <h4 class="text-white mt-4" style="text-align: left; font-weight: bold">Mulai gratis dan dapatkan lebih banyak event</h4>
        <template v-if="routeName === 'Login'">
            <button class="btn btn-light btn-custom mt-4" v-on:click="loginWithGoogle" style="color: #0A3D62">
                <i class="fab fa-google"></i>&emsp;
                Masuk dengan Google
            </button>
        </template>
        <template v-else-if="routeName === 'Register'">
            <button class="btn btn-light btn-custom mt-4" v-on:click="registerWithGoogle" style="color: #0A3D62">
                <i class="fab fa-google"></i>&emsp;
                Daftar dengan Google
            </button>
        </template>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    data(){
        return{
            routeName: '',
            isLoginWithGoogle: false
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },
    mounted(){
        this.routeName = this.currentRouteName;
    },
    methods:{
        loginWithGoogle(){
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(() => {
                    this.createUserSession(firebase.auth().currentUser.uid);
                    this.$router.push({ name: 'Home', query: { redirect: '/' } });
                    this.isLoginWithGoogle = true;
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        registerWithGoogle(){
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(() => {
                    this.createUserSession(firebase.auth().currentUser.uid);
                    this.createUserAfterRegister();
                    this.$router.push({ name: 'Home', query: { redirect: '/' } });
                    this.isLoginWithGoogle = true;
                    
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        createUserAfterRegister(){
            if(this.isLoginWithGoogle){
                const user = firebase.auth().currentUser;
                console.log(user.providerData[0]);
                firebase
                .firestore()
                .collection("users")
                .add({
                    userID: user.uid,
                    email: user.providerData[0].email,
                    nama_lengkap: user.providerData[0].displayName,
                    jenis_kelamin: '',
                    provinsi: '',
                    kota: '',
                    telfon: '',
                    tanggal_lahir: '',
                    role: 'USER',
                    profile_picture: user.providerData[0].photoURL,
                })
            }
        },
        createUserSession(uid){
            firebase
            .firestore()
            .collection('users').where('userID', '==', uid).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id + " => " + doc.data())
                    localStorage.setItem("docID", doc.id);
                    localStorage.setItem("userID", uid);
                    localStorage.setItem("namaLengkap", doc.data().nama_lengkap);
                    localStorage.setItem("profilePicture", doc.data().profile_picture);
                    localStorage.setItem("email", doc.data().email);
                    localStorage.setItem("jenisKelamin", doc.data().jenis_kelamin);
                    localStorage.setItem("provinsi", doc.data().provinsi);
                    localStorage.setItem("kota", doc.data().kota);
                    localStorage.setItem("tanggalLahir", doc.data().tanggal_lahir);
                    localStorage.setItem("telpon", doc.data().telfon);
                    localStorage.setItem('role', doc.data().role);
                    localStorage.setItem('savedEvent', doc.data().savedEvent);
                    localStorage.setItem('joinedEvent', doc.data().joinedEvent);
                    localStorage.setItem('registeredEvent', doc.data().registeredEvent);
                })
            }) 
        },
    }
}
</script>

<style scoped>

.btn-light {
  color: #0A3D62 !important;

}
.btn:hover {
  opacity: 1;
}
</style>
