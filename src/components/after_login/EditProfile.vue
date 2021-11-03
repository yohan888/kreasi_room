<template>
<div class="container bootstrap snippets bootdeys">
<div class="row">
  <div class="col-xs-12 col-sm-9">
    <form class="form-horizontal" @submit.prevent="updateProfile">
        <div class="panel panel-default">
          <div class="panel-body text-center">
            <template v-if="form.profilePicture == ''">
              <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="img-circle profile-avatar" alt="User avatar">
            </template>
            <template v-else>
              <img class="profile-picture" :src="form.profilePicture">
            </template>
           
          </div>
              <input type="file" id="image" v-on:change="showPicture">   
             <button >Upload</button>
        </div>
      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">User info</h4>
        </div>
        <div class="panel-body">

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
              <input type="date" v-model="form.tanggalLahir" class="form-control" required>
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
            <div class="col-sm-10 col-sm-offset-2">
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="reset" class="btn btn-default">Cancel</button>
            </div>
          </div>
    </form>
  </div>
</div>

</div>
</template>

<style scoped>
body{
    margin-top:20px;
    background:#f5f5f5;
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
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          firebase
          .firestore()
          .collection('users').where('userID', '==', user.uid).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(doc.id, ' => ', doc.data());
              this.docID = doc.id;
              this.form.namaLengkap = doc.data().nama_lengkap;
              this.form.profilePicture = doc.data().profile_picture;
              this.form.email = doc.data().email;
              this.form.jenisKelamin = doc.data().jenis_kelamin;
              this.form.provinsi = doc.data().provinsi;
              this.form.kota = doc.data().kota;
              this.form.tanggalLahir = doc.data().tanggal_lahir;
              this.form.telpon = doc.data().telfon;
            })
          })
          
        }
      }
      );

    
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

    showPicture(e){
      var files = e.target.files || e.dataTransfer.files;
      if(!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.newPicture = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.newPicture = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
</script>