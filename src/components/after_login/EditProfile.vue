<template>
<div class="container">

<div class="row mt-3">
  <div class="col-xs-12 col-sm-9">
    <form class="form-horizontal" @submit.prevent="updateProfile">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h2>Edit Profile</h2>
        </div>
        <div class="panel-body">
          <div class="preview col-sm-10">
              <img class="profile-avatar" v-if="previewPicture" :src="previewPicture">
              <img v-else :src="data.profilePicture" class="img-circle profile-avatar" alt="User avatar">
            </div>
            <input type="file" id="image" accept=".jpg, .png" @change="onFileChange"> 
            
          <div class="form-group">
            <label class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="data.email" disabled>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">jenis Kelamin</label>
            <div class="col-sm-10">
              <select class="form-control" v-model="data.jenisKelamin">
                <option selected="" value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
            </div>
          </div>

           <div class="form-group">
            <label class="col-sm-2 control-label">Provinsi</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="data.provinsi" required>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">Kota</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="data.kota" required>
            </div>
          </div>

        <div class="form-group">
            <label class="col-sm-2 control-label">Nama Lengkap</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" v-model="data.namaLengkap" required>
            </div>
          </div>
        </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">Tanggal Lahir</label>
            <div class="col-sm-10">
              <input type="date" v-model="data.tanggalLahir"  class="form-control" required>
            </div>
          </div>
        </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">Telpon</label>
            <div class="col-sm-10">
              <input type="text" v-model="data.telpon" class="form-control" required>
            </div>
          </div>  

          <div class="form-group">
            <div class="col-sm-10 mt-3 col-sm-offset-2">
              <router-link class="btn btn-default" to="/profile">Back</router-link>
              <!-- <button type="reset" >Back</button> -->
              <button type="submit" class="btn btn-primary btn-kirim">  Edit</button>
              <button class="btn btn-primary btn-loading d-none" type="button" disabled>
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
              
            </div>
          </div>
    </form>
  </div>
</div>
<br>
</div>
</template>

<style scoped>
body{
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
}
/**
 * Panels
 */
/*** General styles ***/
.panel {
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
}
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
      }  
    }, 
  }
}
</script>