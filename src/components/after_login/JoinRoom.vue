<template>
<div class="container mt-5">
  <div class="row">
    <div class="col">
      <!-- <video v-if="video.length > 0" id='my-video' class='video-js custom-video' controls preload='auto' width='100%' height='90%' poster='MY_VIDEO_POSTER.jpg' data-setup='{}'>
        <source :src="video" type='video/mp4'>
        <source :src="video" type='video/webm'>
        <source :src="video" type='video/ogg'>
        <p class='vjs-no-js'>To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
        </p>
      </video>  -->
       <iframe v-if="video.length > 0" class='video-js custom-video mb-3' width='100%' height='600px' :src="video">
      
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
                    <label class="custom-checkbox like-dislike">
                        <div v-if="itemsContains(this.eventID)">
                            <input type="checkbox" id='like' v-on:change="like" style="display: none" >
                            <i class="btn btn-lg btn-bagikan far fa-thumbs-up unchecked" ><span class="like"> Like</span></i>
                            <i class="btn btn-lg btn-bagikan far fa-thumbs-down checked " ><span class="like"> Dislike</span></i>
                        </div>  
                        <div v-else>
                            <input type="checkbox" id='like' v-on:change="like" style="display: none">
                            <i class="btn btn-lg btn-bagikan far fa-thumbs-up unchecked" ><span class="like"> Like</span></i>
                            <i class="btn btn-lg btn-bagikan far fa-thumbs-down checked " ><span class="like"> Dislike</span></i>
                        </div>   
                    </label>
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
                  <form @submit.prevent="sendMessage">
                    <textarea type="text" v-model="showMessage" id="normal_input" class="form-control" placeholder="Ketik Pertanyaan. Tekan Ctrl + Enter untuk baris baru" @keydown.enter="handleEnter" required></textarea>
                    <div class="d-flex justify-content-end">
                    <button class="mt-1 btn btn-primary " type="submit">Send</button>
                    </div>
                  </form>
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
      isLiked: false,
      idPenyelenggara: '',
      deskripsi: '',
      jumlahDaftar: 0,
      jumlahLike: 0,
      likedEvent: [],
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
    itemsContains(n){
      if(this.likedEvent !== null){
        return this.likedEvent.indexOf(n) > -1
      }
    },
    like(){
      const cb = document.getElementById('like');
      const fieldValue = firebase.firestore.FieldValue;
      if(cb.checked){
        const increment = firebase.firestore.FieldValue.increment(1);
        firebase
        .firestore()
        .collection('events')
        .doc(this.eventID)
        .update({
          jumlahLike: increment
        })

        firebase
        .firestore()
        .collection('users')
        .doc(localStorage.getItem('docID'))
        .update({
          likedEvent: fieldValue.arrayUnion(this.eventID)
        })
      }else{
        const decrement = firebase.firestore.FieldValue.increment(-1);
        firebase
        .firestore()
        .collection('events')
        .doc(this.eventID)
        .update({
          jumlahLike: decrement
        });

        firebase
        .firestore()
        .collection('users')
        .doc(localStorage.getItem('docID'))
        .update({
          likedEvent: fieldValue.arrayRemove(this.eventID)
        })
      }
    },
    handleEnter (e) {
            if (e.ctrlKey){
                let caret = e.target.selectionStart;
                e.target.setRangeText("\n", caret, caret, "end");
                this.form.deskripsi = e.target.value;
            }else{
              this.sendMessage();
            }
        },
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
    },

    newLine(event){
      if(event.keyCode == 13 && event.shiftKey){
        console.log("shift+enter");
      }
    }
  },
  beforeMount(){
    this.eventID = this.$route.params.eventID;
    this.likedEvent = localStorage.getItem('likedEvent').split(',');
    console.log(this.likedEvent)
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
        // this.video = 'https://drive.google.com/uc?export=download&id='+doc.data().videoEvent;
        this.video = 'https://drive.google.com/file/d/'+doc.data().videoEvent+'/preview';
        this.jumlahDaftar = doc.data().jumlahDaftar;
        this.jumlahLike = doc.data().jumlahLike;
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
      firebase
      .firestore()
      .collection('events')
      .doc(this.eventID)
      .update({
        jumlahDaftar: parseInt(this.jumlahDaftar) + 1
      }); 
    })
    const fieldValue = firebase.firestore.FieldValue;
    firebase
    .firestore()
    .collection('users')
    .doc(localStorage.getItem('docID'))
    .update({
      joinedEvent: fieldValue.arrayUnion(this.eventID)
    });

    
  }
}
</script>

<style scoped>
    .like{
      font-family: 'Poppins', sans-serif;
      
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
    .like-dislike{
        background-color: transparent;
        color: #0A3D62;
        padding: 15px;
    }
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
  height: 3rem;
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
  
  
