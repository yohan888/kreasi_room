<template>
    <div class="container mt-5">
        <div v-if="isLoading">
            <img class="mt-5" src="../../assets/images/loading.gif" alt="">
        </div>
        <div v-else>
            <div class="row">
                <div class="col">
                    <iframe v-if="video.length > 0" class='video-js custom-video ' width='100%' height='600px' :src="video"></iframe> 
                    <p style="text-align: right; color: red; font-size: 10pt">*Silahkan ganti browser jika video tidak dapat diputar!</p>
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <div class="row d-flex justify-content-start">
                        <div class="" style="width: 60px">
                            <img class="imagePenyelenggara rounded-circle" v-if="penyelenggara.profilePicture !== ''" :src="penyelenggara.profilePicture">
                            <img class="imagePenyelenggara rounded-circle" v-else src="../../assets/images/guest.png">
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
                                <!-- <button type="button" class="btn btn-lg btn-bagikan"><i class="fas fa-share-alt" data-bs-toggle="modal" data-bs-target="#exampleModal"></i> Bagikan</button> -->
                                <button type="text" value="StuffYaWantCopied" id="copyInp" class="btn btn-lg btn-bagikan"  data-bs-toggle="modal" data-bs-target="#exampleModal"><a onclick=".select()" style="cursor:cell;">
                                    <i class="fas fa-share-alt"></i> Bagikan </a>
                                </button> 
                                
                            </div>
                        </div>
                        <!-- MODAL -->
                         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Syarat</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                     </div>
                                    <div class="modal-body">
                                        <input 
                                            v-on:focus="$event.target.select()" 
                                            ref="myinput" 
                                            readonly 
                                            :value="text"/>
                                        <button @click="copy">Copy</button>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- TUTUP -->
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
                                    <img class="imagePenyelenggara rounded-circle" v-if="message.profilePicture !== ''" :src="message.profilePicture">
                                    <img class="imagePenyelenggara rounded-circle" v-else src="../../assets/images/guest.png">
                                    
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
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    data: function (){
        return{
            text: window.location.href,
            isLoading: true,
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
        copy() {
      this.$refs.myinput.focus();
      document.execCommand('copy');
    },
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
                });

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
                this.video = 'https://drive.google.com/file/d/'+doc.data().videoEvent+'/preview';
                this.jumlahDaftar = doc.data().jumlahDaftar;
                this.jumlahLike = doc.data().jumlahLike;
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
        })
        .then(() => {
            this.isLoading = false;
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
  
  
