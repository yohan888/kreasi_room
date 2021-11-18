<template>
<div class="container">
<form class="form-horizontal" @submit.prevent="updateProfile">
<div class="card" style="width: 100%">
  <img src="../../assets/images/rectangle.png" class="card-img-top" alt="">
  <div class="card-body">
    <div class="row cardProfile">
      <div class="col-2 profilePicture">
          <!-- <img class="profileImg mt-3" src="../../assets/images/img-tentang.jpg">
          <p class="borderProfile"></p> -->
          <div class="preview col-sm-10">
              <img class="profileImg" v-if="previewPicture" :src="previewPicture">
              <img v-else :src="data.profilePicture" class="profileImg" alt="User avatar">
            </div>
            <!-- <input type="file" id="image" accept=".jpg, .png" @change="onFileChange">  -->
      </div>
      <div class="col profileUser">
        <input class="form-control namaUser" v-model="data.namaLengkap" disabled>
        <div class="profileAction">
          <label for="image" class="custom-label changeProfile">Ubah Foto Profile</label>
          <input type="file" id="image" accept=".jpg, .png" @change="onFileChange" class="ubahProfile">
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row mt-5">
  <div class="col">
    <div class="card cardMenu">
      <div class="card-body">
        <ul class="nav editProfileMenu" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link informasiPribadi mt-3" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Informasi Pribadi</a>
          </li>
          <li class="nav-item" role="presentation">
            <a href="#" class="nav-link pengaturanAkun mt-2" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Request Event Organizer</a>
          </li>
        </ul>

      </div>
    </div>
  </div>

  <div class="col-8">
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div class="editProfile">
    <div class="row">
      <div class="col">
          <div class="panel panel-default">
            <div class="panel-body">  
              <div class="form-group">
                <label class="col control-label">Email</label>
                <div class="col">
                  <input type="text" class="form-control mt-2" v-model="data.email" disabled>
                </div>
              </div>

              <div class="form-group mt-4">
                <label class="col control-label">jenis Kelamin</label>
                <div class="col">
                  <select class="form-control mt-2" v-model="data.jenisKelamin">
                    <option selected="" value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                  </select>
                </div>
              </div>

              <div class="form-group mt-4">
                <label class="col control-label">Provinsi</label>
                <div class="col">
                  <input type="text" class="form-control mt-2" v-model="data.provinsi" required>
                </div>
              </div>
              <div class="form-group mt-4">
                <label class="col control-label">Kota</label>
                <div class="col">
                  <input type="text" class="form-control mt-2" v-model="data.kota" required>
                </div>
              </div>

            <div class="form-group mt-4">
                <label class="col control-label">Nama Lengkap</label>
                <div class="col">
                  <input type="text" class="form-control mt-2" v-model="data.namaLengkap" required>
                </div>
              </div>
            </div>

              <div class="form-group mt-4">
                <label class="col control-label">Tanggal Lahir</label>
                <div class="col">
                  <input type="date" v-model="data.tanggalLahir"  class="form-control mt-2" required>
                </div>
              </div>
            </div>

              <div class="form-group mt-4">
                <label class="col control-label">Telpon</label>
                <div class="col">
                  <input type="text" v-model="data.telpon" class="form-control mt-2" required>
                </div>
              </div>  

              <div class="form-group finishEdit">
                <div class="col mt-4">
                  <router-link class="btn btn-default" to="/profile"><b>Back</b></router-link>
                  <!-- <button type="reset" >Back</button> -->
                  <input type="submit" class="btn btn-primary btn-kirim" value="Simpan">
                  <button class="btn btn-primary btn-loading d-none" type="button" disabled>
                  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Loading...
                </button>
                <button v-if="isLoginWithEmail" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Reset Password
                </button>
                </div>
              </div>
        
      </div>
    </div>
  </div>
  </div>
        </div>
        <!-- <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        AAAAAAAAAAAAAAAA
        </div> -->
    </div>
    
  
</div>

<br><br><br><br><br><br><br>

</form>
</div>
</template>

<style scoped>
.custom-label{
  cursor: pointer;
  font-size: 18px;
}
.card{
  border-radius: 20px;
}
.cardMenu{
  width: 20rem; height:10.5rem
}
.card-body{
  text-align: left;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.profileImg{
  border-radius: 100px;
  width: 140px !important;
  height: 140px !important;
  object-fit: cover;
  border: 2px solid #0A3D62;
}
.namaUser{
  font-size: 24px;
  border:none; height:10%; 
  margin-left:-0.5em; 
  margin-top:0.7em; 
  background-color:white;
  color: #0A3D62;
  font-weight: 900;
}
.cardProfile{
  margin-left: 8em;
}
.profileAction{
  color: #B2B5B8;
  margin-top: -0.5em;
}
.ubahProfile{
  opacity: 0;
  position: absolute;
  z-index: -1;
}
.preview img{
  border-radius: 100px;
  object-fit: cover;
  border: 2px solid #0A3D62;
  max-width: 140px;
  max-height: 140px;
}
.changeProfile:hover{
  color: #0A3D62;
  text-decoration: underline;
}
.hapusProfile{
  color: #B2B5B8;
  text-decoration: none;
  font-size: 18px;
}
.hapusProfile:hover{
  color: #0A3D62;
  text-decoration: underline;
}
.editProfileMenu{
  text-align: center;
  display: block; margin-left: auto; margin-right: auto;
  font-size: 20px;
  text-decoration: none;
}
.pengaturanAkun{
  color: #B2B5B8;
}
.informasiPribadi{
  font-weight: 900;
  color: #0A3D62;
}
.control-label{
  display: block; margin-left: 0; margin-right: 0;
  text-align:left;
  font-size: 18px;
  color: #0A3D62;
  font-weight: 900;
}
.form-control{
  border-radius: 13px;
  height: 3em;
}
.finishEdit{
  display: block; margin-left: 0; margin-right: 0;
  text-align:right;
}
.btn-simpan{
  background-color: #0A3D62;
  color: white;
  font-weight: 900;
  border-radius: 10px;
  width: 8em;
}

@media screen and (max-width:1400px){
  .profileUser{
    margin-left: 1em;
  }
}

@media screen and (max-width:1200px){
  .profileUser{
    margin-left: 3em;
  }
  .editProfile{
    width: 152%;
    margin-top: 3em;
  }
  .cardMenu{
    width: 58rem; 
    height:10.5rem;
  }
  
}

@media screen and (max-width:992px){
  .editProfile{
    width: 153%;
    margin-top: 3em;
  }
  .cardProfile{
    margin-left: 5em;
  }
  .namaUser{
    margin-left: 0em;
    margin-top: 1.5em;
    text-align: center;
  }
  .profileAction{
    margin-top: -0.5em;
  }
  .profileUser{
    margin-left: 5em;
  }
  .cardMenu{
    width: 43.5rem; 
    height:10.5rem;
  }
}

@media screen and (max-width:768px){
  .cardProfile{
    display: block; margin-left: auto; margin-right: auto;
  }
  .profilePicture{
    text-align: center;
    display: block; margin-left: auto; margin-right: auto;
    width: 100%;
  }
  .profileUser{
    margin-left: 0em;
    margin-top: -2em;
    text-align: center;
  }
  .cardMenu{
    width:32rem; height:10.5rem
  }
}

@media screen and (max-width:600px){
  .cardProfile{
    display: block; margin-left: auto; margin-right: auto;
  }
  .profilePicture{
    text-align: center;
    display: block; margin-left: auto; margin-right: auto;
    width: 100%;
  }
  .profileUser{
    margin-left: 0em;
    margin-top: -2em;
    text-align: center;
  }
  .cardMenu{
    width:100%; height:10.5rem
  }
}

/* body{
    margin-top:20px;
    background:#f5f5f5;
}

#preview{
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img{
  max-width: 100%;
  max-height: 500px;
} */



/**
 * Panels
 */
/*** General styles ***/



/* .panel {
  box-shadow: none;
}
.panel-heading {
  border-bottom: 0;
}
.panel-title {
  font-size: 17px;
}
.panel-title > small {
  font-size: .75em;
  color: #999999;
}
.panel-body *:first-child {
  margin-top: 0;
}
.panel-footer {
  border-top: 0;
}

.panel-default > .panel-heading {
    color: #333333;
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.07);
}

form label {
    color: #999999;
    font-weight: 400;
}

.form-horizontal .form-group {
  margin-left: -15px;
  margin-right: -15px;
}
.control-label{
  margin-left: 50%;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
  }
}

.profile__contact-info-icon {
    float: left;
    font-size: 18px;
    color: #999999;
}
.profile__contact-info-body {
    overflow: hidden;
    padding-left: 20px;
    color: #999999;
}
.profile-avatar {
  width: 200px;
  position: relative;
  margin: 0px auto;
  margin-top: 196px;
  border: 4px solid #f3f3f3;
} */
</style>

<script>
import firebase from 'firebase'
import Swal from 'sweetalert2'
export default {
  data() {
    return{
      docID: '',
      idProvinsi: '',
      provinsi: [],
      kota: [],
      previewPicture: '',
      newImage: null,
      isLoginWithGoogle: false,
      isLoginWithEmail: false,
      resetEmail: '',
      data:{
        namaLengkap: '',
        email: '',
        jenisKelamin: '',
        provinsi: '',
        kota: '',
        profilePicture: '',
        telpon: '',
        tanggalLahir: ''
      },

    }
  },

  beforeMount(){
    this.docID = localStorage.getItem('docID');
    this.data.namaLengkap = localStorage.getItem('namaLengkap');
    this.data.profilePicture = localStorage.getItem('profilePicture');
    this.data.email = localStorage.getItem('email');
    this.data.jenisKelamin = localStorage.getItem('jenisKelamin');
    this.data.provinsi = localStorage.getItem('provinsi');
    this.data.kota = localStorage.getItem('kota');
    this.data.tanggalLahir = localStorage.getItem('tanggalLahir');
    this.data.telpon = localStorage.getItem('telpon');   
    
    var loginMethod = firebase.auth().currentUser.providerData[0].providerId;
    if(loginMethod === "google.com"){
      this.isLoginWithGoogle = true;
      this.isLoginWithEmail = false;
    }else{
      this.isLoginWithGoogle = false;
      this.isLoginWithEmail = true;
    } 
  },
  methods:{
    onFileChange(e){
      this.newImage = e.target.files[0];
      this.previewPicture = URL.createObjectURL(this.newImage);
    },

    updateProfile(){
      const btnKirim = document.querySelector(".btn-kirim");
      const btnLoding = document.querySelector(".btn-loading"); 
      btnLoding.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");

      if(this.newImage !== null){
        firebase.storage().ref(this.docID).delete();
        const storageRef =
        firebase
        .storage()
        .ref(this.docID)
        .put(this.newImage);
      
        storageRef.on(
            'state_changed', 
            snapshot=>{ 
              this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100; 
            }, 
            error=>{
              console.log(error.message)
            },
            ()=>{
              storageRef.snapshot.ref.getDownloadURL()
              .then((url)=>{
                  this.data.profilePicture = url;
                  firebase
                  .firestore()
                  .collection('users')
                  .doc(this.docID)
                  .update({
                      email: this.data.email,
                      jenis_kelamin: this.data.jenisKelamin,
                      kota: this.data.kota,
                      provinsi: this.data.provinsi,
                      nama_lengkap: this.data.namaLengkap,
                      profile_picture: this.data.profilePicture,
                      tanggal_lahir: this.data.tanggalLahir,
                      telfon: this.data.telpon
                  })
                  
                      localStorage.setItem("docID", this.docID);
                      localStorage.setItem("namaLengkap", this.data.namaLengkap);
                      localStorage.setItem("profilePicture", this.data.profilePicture);
                      localStorage.setItem("email", this.data.email);
                      localStorage.setItem("jenisKelamin", this.data.jenisKelamin);
                      localStorage.setItem("provinsi", this.data.provinsi);
                      localStorage.setItem("kota", this.data.kota);
                      localStorage.setItem("tanggalLahir", this.data.tanggalLahir);
                      localStorage.setItem("telpon", this.data.telpon);

                Swal.fire({
                  icon: 'success',
                  title: 'Berhasil Edit'
                })  
                  btnLoding.classList.toggle("d-none");
                  btnKirim.classList.toggle("d-none");
                  this.$router.push({ name: 'Profile', query: { redirect: '/profile' } });
              });
            }
        );
      }else{
        firebase
                  .firestore()
                  .collection('users')
                  .doc(this.docID)
                  .update({
                      email: this.data.email,
                      jenis_kelamin: this.data.jenisKelamin,
                      kota: this.data.kota,
                      provinsi: this.data.provinsi,
                      nama_lengkap: this.data.namaLengkap,
                      profile_picture: this.data.profilePicture,
                      tanggal_lahir: this.data.tanggalLahir,
                      telfon: this.data.telpon
                  })
                  
                      localStorage.setItem("docID", this.docID);
                      localStorage.setItem("namaLengkap", this.data.namaLengkap);
                      localStorage.setItem("profilePicture", this.data.profilePicture);
                      localStorage.setItem("email", this.data.email);
                      localStorage.setItem("jenisKelamin", this.data.jenisKelamin);
                      localStorage.setItem("provinsi", this.data.provinsi);
                      localStorage.setItem("kota", this.data.kota);
                      localStorage.setItem("tanggalLahir", this.data.tanggalLahir);
                      localStorage.setItem("telpon", this.data.telpon);

                Swal.fire({
                  icon: 'success',
                  title: 'Berhasil Edit'
                })  
                  btnLoding.classList.toggle("d-none");
                  btnKirim.classList.toggle("d-none");
                  this.$router.push({ name: 'Profile', query: { redirect: '/profile' } });
      } 
    }, 
    forgetPassword(){
      firebase
        .auth()
        .sendPasswordResetEmail(this.resetEmail)
        .then(() => {
            alert('Check your registered email to reset the password!');
            this.resertEmail= '';

        }).catch((error) => {
          alert(error)
        })
    }
  }
}
</script>