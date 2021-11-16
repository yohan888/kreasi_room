<template>
<div class="container mt-5">
  <div class="row">
    <div class="col">
      <!-- <video v-if="video.length > 0" id='my-video' class='video-js custom-video' controls preload='auto' width='100%' height='90%' poster='MY_VIDEO_POSTER.jpg' data-setup='{}'>
        <source :src="video" type='video/mp4'>
        <source :src="video" type='video/webm'>
        <p class='vjs-no-js'>To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
        </p>
      </video>  -->
       <iframe v-if="video.length > 0" class='video-js custom-video mb-3' width='100%' height='600px' :src="'https://www.youtube.com/embed/'+video">
      
      </iframe> 
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
            <hr size="3">

              <div v-for="message  in messages" :key="message.id" class="row custom-row mb-4">
                  <div class="col-sm-auto">
                    <img class="imagePenyelenggara rounded-circle" :src="message.profilePicture">
                  </div>
                  <div class="col-sm" style="text-align: left;">
                    <span style="color:#0A3D62;"><b>{{ message.namaLengkap }}</b></span> <br>
                    <span style="color:#B2B5B8;">{{ message.text }}</span>
                  </div>
              </div>
           
              <div class="col" style="margin-top:30%"><hr>
                <div class="form">
                  <input type="text" v-model="showMessage" id="normal_input" class="form-control" placeholder="Ketik Pertanyaan">
                  <button class="btn btn-primary" @click="sendMessage">Send</button>
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
      video: '',
      idPenyelenggara: '',
      deskripsi: '',
      penyelenggara:{
        namaPenyelenggara: '',
        emailPenyelenggara: '',
        profilePicture: ''
      },
      showMessage: "",
      messages: [],
    }
  },
  methods:{
    sendMessage(){
      const message = {
        eventID: this.eventID,
        text: this.showMessage,
        nama_lengkap: localStorage.getItem('namaLengkap'),
        profile_picture: localStorage.getItem('profilePicture')
      }

      firebase
      .database()
      .ref("messages")
      .push(message);

      this.showMessage = "";
    }
  },
  beforeMount(){
    this.eventID = this.$route.params.eventID;
    let viewMessage = this;
    const itemsRef = firebase.database().ref("messages");
    itemsRef.on("value", snapshot => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach(key => {
        if (data[key].eventID == viewMessage.eventID) {
          messages.push({
            id: key,
            eventID: data[key].eventID,
            namaLengkap: data[key].nama_lengkap,
            profilePicture: data[key].profile_picture,
            text: data[key].text
          });
        }

      });
      viewMessage.messages = messages;
    });

    // let viewMessage = this;
    // const itemsRef = firebase.database().ref("messages");
    // itemsRef.once('value', function(snapshot) {
    //   let messages = [];
    //   snapshot.forEach(function(childSnapshot) {
    //     var data = childSnapshot.val();
    //     if(data.eventID == viewMessage.eventID){
    //       messages.push({ 
    //         id: childSnapshot.key,
    //         eventID: data.eventID, 
    //         namaLengkap: data.nama_lengkap, 
    //         profilePicture: data.profile_picture,
    //         text: data.text
    //       });
    //     }
    //   });
    //   viewMessage.messages = messages;
    // });

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
        this.video = doc.data().videoEvent;
        console.log(this.video);
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
         
    // let viewMessage = this;
    // const itemsRef = firebase.database().ref("messages");
    // itemsRef.on("value", snapshot => {
    //   let data = snapshot.val();
    //   let messages = [];
    //   Object.keys(data).forEach(key => {
    //     if (data[key].eventID == "XdMBpflAJ5aQXjyM2fWn") {
    //       messages.push({
    //         eventID: data[key].eventID,
    //         namaLengkap: data[key].nama_lengkap,
    //         profilePicture: data[key].profile_picture,
    //         text: data[key].text
    //       });
    //     }

    //   });
    //   viewMessage.messages = messages;
    //   console.log(viewMessage.messages);
    // });

    
  }
}
</script>

<style scoped>
.custom-row{
  flex-wrap: nowrap;
  max-width: inherit;
}
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
  
  
