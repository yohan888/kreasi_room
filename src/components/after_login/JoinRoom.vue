<template>
<div class="container mt-5">
  <div class="row">
    <div class="col">
      <video id='my-video' class='video-js custom-video' controls preload='auto' width='100%' height='90%' poster='MY_VIDEO_POSTER.jpg' data-setup='{}'>
        <source src='https://drive.google.com/uc?export=download&id=1w_FITkEoRrGmaA9sgTCXQ6joOZIUcWuq' type='video/mp4'>
        <source src='https://drive.google.com/uc?export=download&id=1w_FITkEoRrGmaA9sgTCXQ6joOZIUcWuq' type='video/webm'>
        <p class='vjs-no-js'>To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
        </p>
      </video> 
    </div>
  </div>

 
  <div class="row">
    <div class="col">
      <div class="row d-flex justify-content-start">
            <div class="" style="width: 60px">
              <img class="imagePenyelenggara rounded-circle" :src="penyelenggara.profilePicture">
            </div>
            <div class="col" style="text-align: left;">
                <span style="color:#0A3D62;"><b>{{ this.penyelenggara.namaPenyelenggara }}</b></span> <br>
                <span style="color:#B2B5B8;">{{ this.penyelenggara.emailPenyelenggara }}</span>
            </div>
            <div class="col-auto ms-auto">
                <div class="custom-btn">
                    <button class="btn btn-lg me-2 btn-like"><i class="fas fa-thumbs-up"></i> Like</button>
                    <button class="btn btn-lg btn-bagikan"><i class="fas fa-share-alt"></i> Bagikan</button>
                </div>
            </div>

        <div class="row mt-3">
            <div class="col-auto custom-judulVideo">
                <h5 style="color:#0A3D62;"><b>{{ this.judul }}</b></h5>
                    <p style="color:#B2B5B8;">
                      {{ this.deskripsi }} 
                    </p>
            </div>
        </div>  
      </div>
    </div>

    <div class="col-auto">
      <div class="card" style="width: auto;">
        <div class="card-body">
            <h5 class="card-title custom-title-card"><b>Pertanyaan</b></h5>
            <hr size="4">
              <div class="row d-flex align-items-center">
                  <div class="" style="width: 60px">
                    <img class="imagePenyelenggara rounded-circle" src="../../assets/images/img-tentang.jpg">
                  </div>
                  <div class="col" style="text-align: left;">
                    <span style="color:#0A3D62;"><b> Michella</b></span> <br>
                    <span style="color:#B2B5B8;">Lorem ipsum dolor sit amet, consectetur adipiscing eli ? </span>
                  </div>
              </div>
           
              <div class="col" style="margin-top:30%"><hr>
                <div class="form">
                  <input type="text" name="normal_input" id="normal_input" class="form-control" placeholder="Ketik Pertanyaan">
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
<br>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
  data(){
    return{
            eventID: '',
            judul: '',
            idPenyelenggara: '',
            deskripsi: '',
            penyelenggara:{
                namaPenyelenggara: '',
                emailPenyelenggara: '',
                profilePicture: ''
            },
            tanggal: '',
            eventSerupa: []
        }
    },
  mounted(){
    this.eventID = this.$route.params.eventID;
        firebase
            .firestore()
            .collection('events')
            .where('eventID', '==', this.eventID)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.judul = doc.data().judulEvent;
                    this.idPenyelenggara = doc.data().penyelenggara;
                    this.deskripsi = doc.data().deskripsi; 
                })
                firebase
                .firestore()
                .collection('users')
                .where('userID', '==', this.idPenyelenggara)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.penyelenggara.namaPenyelenggara = doc.data().nama_lengkap;
                        this.penyelenggara.emailPenyelenggara = doc.data().email;
                        this.penyelenggara.profilePicture = doc.data().profile_picture;
                    })
                }) 
            }) 
  }
}
</script>

<style scoped>

.custom-video {
  border-radius: 10px;
  background-color: #0a3d62;
}
.imagePenyelenggara {
  width: 50px;
  height: 50px;
}
.btn-like {
  color: #0a3d62;
  border-radius: 10px;
  border: 3px solid #0a3d62;
}
.btn-bagikan {
  border: 3px solid #0a3d62;
  border-radius: 10px;
  margin: 10px;
  color: #0a3d62;
}
.custom-judulVideo {
  text-align: left;
  margin-bottom: auto;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.custom-title-card {
  text-align: left;
}

@media screen and (max-width: 768px) {
    .btn-like{
      font-size: 12pt;
    }
    .btn-bagikan {
        font-size: 12pt;
    }
}
</style>
  
  
