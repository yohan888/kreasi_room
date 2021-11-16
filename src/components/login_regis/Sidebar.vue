<template>
    <div>
        <div class="d-flex align-items-center">
            <span><img src="../../assets/images/logo-footer.png"></span>
            &emsp;<span class="text-white" style="font-weight: bold; font-size: 1.5rem">Kreasi Room</span>
        </div>
        <h4 class="text-white mt-4" style="text-align: left; font-weight: bold">Mulai gratis dan dapatkan lebih banyak event</h4>
        <template v-if="routeName === 'Login'">
            <button class="btn btn-light btn-custom mt-4 btn-kirim" v-on:click="loginWithGoogle" style="color: #0A3D62">
                <i class="fab fa-google"></i>&emsp;Masuk dengan Google
            </button>
            <button class="btn btn-primary btn-loading d-none" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </template>
        <template v-else-if="routeName === 'Register'">
            <button class="btn btn-light btn-custom mt-4 btn-kirim" v-on:click="registerWithGoogle" style="color: #0A3D62">
                <i class="fab fa-google"></i>&emsp;Daftar dengan Google
            </button>
            <button class="btn btn-primary btn-loading d-none" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
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
            const btnKirim = document.querySelector(".btn-kirim");
            const btnLoding = document.querySelector(".btn-loading"); 
            btnLoding.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");

            
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
                .then(() => {
                    let listEmail = [];
                    firebase
                    .firestore()
                    .collection("users")
                    .get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => { 
                            listEmail.push(doc.data().email);
                            
                        })
                        if(listEmail.includes(firebase.auth().currentUser.email)){
                            this.createUserSession(firebase.auth().currentUser.uid);
                        } else{
                            this.createUserAfterRegister();
                        }
                        btnLoding.classList.toggle("d-none");
                        btnKirim.classList.toggle("d-none");
                    })

                    
                    // if(listEmail.includes(firebase.auth().currentUser.email)){
                    //     this.createUserSession(firebase.auth().currentUser.uid);
                    // } else{
                    //     this.createUserAfterRegister();
                    // }
                    // btnLoding.classList.toggle("d-none");
                    // btnKirim.classList.toggle("d-none");
                    // this.$router.push({ name: 'Home', query: { redirect: '/' } });
                    // this.isLoginWithGoogle = true;
                })
                .catch((err) => {
                    console.log(err)
                })
                // .finally(() => {
                //     // if(listEmail.includes('mariowijaya31@gmail.com')){
                //     //     // this.createUserSession(firebase.auth().currentUser.uid);
                //     //     console.log("ada");
                //     // }else{
                //     //     console.log("tidak " + firebase.auth().currentUser.email);
                //     //     console.log(listEmail);
                //     //     console.log(listEmail.includes('mariowijaya31@gmail.com'));
                //     //     // this.createUserAfterRegister();
                //     // }
                //     btnLoding.classList.toggle("d-none");
                //     btnKirim.classList.toggle("d-none");
                // })

            

            
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
            this.isLoginWithGoogle = true;
            const fieldValue = firebase.firestore.FieldValue;
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
                    favoriteEvent: fieldValue.arrayUnion(""),
                    savedEvent: fieldValue.arrayUnion(""),
                    joinedEvent: fieldValue.arrayUnion(""),
                    registeredEvent: fieldValue.arrayUnion(""),
                })
            }
            this.createUserSession(firebase.auth().currentUser.uid);
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
                    localStorage.setItem('favoriteEvent', doc.data().favoriteEvent);
                })
            }) 
 
            this.$router.push({ name: 'Home', query: { redirect: '/' } });
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
