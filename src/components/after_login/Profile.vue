<template>
  <div class="container mt-4">
    <div class="card" style="width: 100%;">
      <img class="card-img-top" src="../../assets/images/rectangle.png" alt="Card image cap">
      <div class="card-body">
        <center>
        <div class="row d-flex align-items-end" style="text-align: left;">
          <div class="col" >
            <img class="profile-picture" src="../../assets/images/img-tentang.jpg">
            <h5 class="card-title mt-2">{{ namaLengkap }}</h5>
            <p class="card-text">{{ email }}</p>
          </div>
          <div class="col-sm-auto">
            <router-link class="btn btn-custom" to="/detail-profile">Edit Profile</router-link>
          </div>
        </div>
        </center>
      </div>
    </div>
    <div class="mt-5">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Terdaftar</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Tersimpan</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Favorit</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.card, .card-body{
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}
.row{
  width: 75%;
}
.btn-custom{
  background-color: transparent;
  color: #0A3D62;
  border-color: #0A3D62;
}
.card-text{
  color: #B2B5B8;;
}
.profile-picture{
  border-radius: 100px;
  width: 140px;
  height: 140px;
  object-fit: cover;
  margin-top: -85px;
 
  border: 2px solid white;
  /* margin-left: 5rem; */
}
.card-body{
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.nav-link{
  color: #B2B5B8;
}
.nav-link.active{
  border-bottom: 2px solid #0A3D62;
  color: #0A3D62;
  border-top: none;
  border-left: none;
  border-right: none;
}
@media screen and (max-width: 768px) {
    .row{
      width: 100%;
    
    }
    .col, .col-sm-auto{
      text-align: center;
    }
    .btn-custom{
      margin-top: 1rem;
    }
    .card-img-top{
      height: 150px;
    }
}
</style>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            userID: '',
            email: '',
            namaLengkap: ''
        }
    },
    mounted(){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.userID = user.uid;
          this.email = user.email;
          firebase
            .firestore()
            .collection('users').where('userID', '==', this.userID).get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                console.log(doc.id, ' => ', doc.data())
                this.namaLengkap = doc.data().nama_lengkap
                // this.lastname = doc.data().lastname
                // this.emailaddress = doc.data().emailaddress
                // this.phonenumber = doc.data().phonenumber
              })
            })
        } else {
          //
        }
      });
    }
}
</script>