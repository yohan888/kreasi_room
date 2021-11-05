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
              <img class="profile-avatar" v-if="newPicture" :src="newPicture">
              <img v-else :src="form.profilePicture" class="img-circle profile-avatar" alt="User avatar">
            </div>
            <input type="file" id="image" @change="onFileChange"> 
            
          <div class="form-group">
            <label class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" :value="form.email" disabled>
            </div>
          </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">jenis Kelamin</label>
            <div class="col-sm-10">
              <select class="form-control" v-model="form.jenisKelamin">
                <option selected="" value="Pria">Pria</option>
                <option value="Wanita">Wanita</option>
              </select>
            </div>
          </div>

           <div class="form-group">
            <label class="col-sm-2 control-label">Provinsi</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" :value="form.provinsi" required>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">Kota</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" :value="form.kota" required>
            </div>
          </div>

        <div class="form-group">
            <label class="col-sm-2 control-label">Nama Lengkap</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" :value="form.namaLengkap" required>
            </div>
          </div>
        </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">Tanggal Lahir</label>
            <div class="col-sm-10">
              <input type="date" v-model="form.tanggalLahir"  class="form-control" required>
            </div>
          </div>
        </div>

          <div class="form-group">
            <label class="col-sm-2 control-label">Telpon</label>
            <div class="col-sm-10">
              <input type="text" :value="form.telpon" class="form-control" required>
            </div>
          </div>  

          <div class="form-group">
            <div class="col-sm-10 mt-3 col-sm-offset-2">
              <router-link class="btn btn-default" to="/profile">Back</router-link>
              <!-- <button type="reset" >Back</button> -->
              <button type="submit" class="btn btn-primary">Submit</button>
              
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
export default {
  data() {
    return{
      docID: '',
      idProvinsi: '',
      provinsi: [],
      kota: [],
      newPicture: '',
      form:{
        namaLengkap: '',
        email: '',
        jenisKelamin: '',
        provinsi: '',
        kota: '',
        profilePicture: '',
        telpon: '',
        tanggalLahir: ''
      }
    }
  },

  mounted(){
    this.docID = localStorage.getItem('docID');
    this.form.namaLengkap = localStorage.getItem('namaLengkap');
    this.form.profilePicture = localStorage.getItem('profilePicture');
    this.form.email = localStorage.getItem('email');
    this.form.jenisKelamin = localStorage.getItem('jenisKelamin');
    this.form.provinsi = localStorage.getItem('provinsi');
    this.form.kota = localStorage.getItem('kota');
    this.form.tanggalLahir = localStorage.getItem('tanggalLahir');
    this.form.telpon = localStorage.getItem('telpon');    
  },
  methods:{
    updateProfile(){
      firebase
      .firestore()
      .collection('users')
      .doc(this.docID)
      .update({
        email: this.form.email,
        jenis_kelamin: this.form.jenisKelamin,
        kota: this.form.kota,
        provinsi: this.form.provinsi,
        nama_lengkap: this.form.namaLengkap,
        profile_picture: this.form.profilePicture,
        tanggal_lahir: this.form.tanggalLahir,
        telfon: this.form.telpon
      })

    },

    onFileChange(e){
      const file = e.target.files[0];
      this.newPicture = URL.createObjectURL(file);
    }
  }
}
</script>