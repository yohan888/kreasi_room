<template>
    <div style="text-align:left">
        <p style="color: gray; text-align:right">Sudah punya akun? <router-link to="/masuk">Masuk</router-link></p>
        <h1 style="font-weight: bold">Hai, Selamat Datang!</h1>
        <p style="color: gray">Silahkan buat akun Anda!</p>
        
        <form class="scroll" action="#" @submit.prevent="register">
            <div class="row">
                <div class="col">
                    <div class="mb-4 form-group">
                        <label for="namaDepan" class="form-label">Nama Lengkap</label>
                        <input type="text" class="form-control" id="namaDepan" v-model="form.namaLengkap" required>
                        <!-- <div class="invalid-feedback"></div> -->
                    </div>
                    <div class="mb-4">
                        <label for="jenisKelamin" class="form-label">Jenis Kelamin</label>
                        <select id="jenisKelamin" class="form-select" v-model="form.jenisKelamin" required>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="provinsi" class="form-label">Provinsi</label>
                        <input type="text" class="form-control" id="provinsi" v-model="form.provinsi" required>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" @change="checkEmail" v-model="form.email" required>
                    </div>
                    
                    
                </div>
                <div class="col">
                    <div class="mb-4">
                        <label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
                        <input type="date" class="form-control" id="tanggalLahir" v-model="form.tanggalLahir" required>      
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="form-label">Nomor Telepon</label>
                        <input type="telp" class="form-control" id="phone" v-model="form.telp" @keypress="isNumber($event)" placeholder="081234567890" required>
                    </div>
                    <div class="mb-4">
                        <label for="kota" class="form-label">Kota</label>
                        <input type="text" class="form-control" id="kota" v-model="form.kota" required>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="form.password" required>
                    </div>
                    
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <router-link to="/"><button class="btn mt-4" style="background-color: transparent; color: #0A3D62; border: 1px solid #0A3D62">Kembali</button></router-link>
                </div>
                <div class="col">
                    <input v-if="isEmailExist" type="submit" id="btn-submit" class="btn mt-4" value="Daftar" disabled>
                    <input v-else type="submit" id="btn-submit" class="btn mt-4" value="Daftar">
                </div>
            </div>
        </form>
        
    </div>
</template>

<script>
// import axios from "axios";
import firebase from "firebase";
import Swal from 'sweetalert2'

export default {
    data(){
        return{
            userID: '',
            check: '',
            password: '',
            isEmailExist: true,
            confirmPassword: '',
            form:{
                email: '',
                password: '',
                namaLengkap: '',
                jenisKelamin: '',
                provinsi: '',
                kota: '',
                telp: '',
                tanggalLahir: ''
            }
        }
    },
    
    methods: {
        isNumber(evt){
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        },
        showPassword(){
            var x = document.getElementById("password");
            if(x.type === "password"){
                x.type = "text";
            }else{
                x.type = "password";
            }
        },

        register(){
            if(this.isEmailExist){
                firebase
                .auth()
                .createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then(data => {
                    data.user 
                        .updateProfile({
                            displayName: this.form.namaLengkap
                        })
                        .then(() => {});
                    
                    const user = firebase.auth().currentUser;
                    user.sendEmailVerification();
                    this.userID = user.uid;
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil Daftar',
                        text: 'Cek email untuk link verifikasi!',
                    });

                    this.createUserAfterRegister();
                    this.$router.push({ name: 'Login', query: { redirect: '/masuk' } });
                })
                .catch(err => {
                    console.log(err.message);
                }); 
            }
            
        },
        checkEmail(){
            // const btn = document.querySelector(".btn-submit");
            firebase
            .firestore()
            .collection('users')
            .where('email', '==', this.form.email)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.check = doc.id;
                })
                if(this.check == ''){
                    // btn.disabled = false;
                    this.isEmailExist = false;
                }else{
                    alert("Email sudah ada");
                    this.isEmailExist = true;
                    this.form.email = '';
                    this.check = '';
                }
                
            })
        },
        createUserAfterRegister(){
            const fieldValue = firebase.firestore.FieldValue;
            firebase
                .firestore()
                .collection("users")
                .add({
                    userID: this.userID,
                    email: this.form.email,
                    nama_lengkap: this.form.namaLengkap,
                    jenis_kelamin: this.form.jenisKelamin,
                    provinsi: this.form.provinsi,
                    kota: this.form.kota,
                    telfon: this.form.telp,
                    tanggal_lahir: this.form.tanggalLahir,
                    role: 'USER',
                    profile_picture: '',
                    favoriteEvent: fieldValue.arrayUnion(""),
                    savedEvent: fieldValue.arrayUnion(""),
                    joinedEvent: fieldValue.arrayUnion(""),
                    registeredEvent: fieldValue.arrayUnion(""),
                    likedEvent: fieldValue.arrayUnion(""),
                })
        },
        
    },
    mounted(){


        
    },
}
</script>

<style scoped>
.scroll {
                margin:4px, 4px;
                padding:4px;
                /* background-color: green; */
                /* width: 500px;
                height: 110px; */
                overflow-x: hidden;
                overflow-y: auto;
                text-align:justify;
            }
    .syarat_ketentuan{
        background-color: transparent;
        border: none;
        padding: 0;
        color: #0A3D62;
    }
    .custom-checkbox .checked{
        display: none;
    }
    .custom-checkbox input[type="checkbox"]:checked~.checked {
        display: inline-block;
    }

    .custom-checkbox input[type="checkbox"]:checked~.unchecked {
        display: none;
    }
    .input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}
.show-password{
    /* display: none; */
    border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: transparent;
  border-left: none;
  border-top: 2px solid #0A3D62;
  border-right: 2px solid #0A3D62;
  border-bottom: 2px solid #0A3D62;
  color: #0A3D62;
  padding: 15px;
}
.icon {
  padding: 15px;
  background: #fff;
  color: #0A3D62;
  min-width: 50px;
  text-align: center;
  border-top: 2px solid #0A3D62;
  border-left: 2px solid #0A3D62;
  border-bottom: 2px solid #0A3D62;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 2px solid #0A3D62;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

.password-field {
  width: 100%;
  padding: 10px;
  border: 2px solid #0A3D62;
  border-right: 0px;
}
.input-field:focus {
  border: 2px solid #0A3D62;
}

/* Set a style for the submit button */
.btn {
  background-color: #0A3D62;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 15px;
}

.btn:hover {
  opacity: 1;
}
</style>