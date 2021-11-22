<template>
  <div class="container mt-4">
    <div class="card" style="width: 100%;">
      <img class="card-img-top" src="../../assets/images/rectangle.png" alt="Card image cap">
      <div class="card-body">
        <center>
        <div class="row d-flex align-items-end row2" style="text-align: left;">
          <div class="col" >
            <template v-if="profile_picture == ''">
              <img class="profile-picture" src="../../assets/images/guest.png">
            </template>
            <template v-else>
              <img class="profile-picture" :src="profile_picture">
            </template>
            <h5 class="card-title mt-2">{{ namaLengkap }}</h5>
            <p class="card-text">{{ email }}</p>
          </div>
          <div class="col-sm-auto button-edit-profile">
            <router-link class="btn btn-custom" to="/edit-profile">Edit Profile</router-link>
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
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <br>
            <div v-if="isLoading">
            <center><img class="mt-5" src="../../assets/images/loading.gif" alt=""></center>
          </div>
          <div v-else-if="joinedEvent.length !== 0" class="row">
                <div class="col" v-for="(e) in joinedEvent" :key="e.eventID">
                    <div class="card">
                        <template>
                            <router-link :to="{ path: '/detail/'+e.eventID }">
                                <img :src="e.poster" class="card-img-top posterEvent" alt="...">
                            </router-link>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <router-link :to="{ path: '/detail/'+e.eventID }">
                                            <h1 class=" judulEvent">{{ e.judul }}</h1>
                                            <p v-if="e.penyelenggara !== ''" class="card-text instansiEvent">{{ e.instansi }}</p>
                                            <p v-else class="card-text instansiEvent">Tidak ada data</p>
                                        </router-link>
                                    </div>

                                </div>           
                            </div>
                        </template>    
                    </div>
                    <br>
                </div>
            </div>
            <div v-else>
              <br>
              <h1>Belum ada data</h1>
            </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <br>
          <div v-if="isLoading">
            <center><img class="mt-5" src="../../assets/images/loading.gif" alt=""></center>
          </div>
          <div v-else-if="savedEvent !== 0" class="row">
                <div class="col" v-for="(e) in savedEvent" :key="e.eventID">
                    <div class="card">
                        <template>
                            <router-link :to="{ path: '/detail/'+e.eventID }">
                                <img :src="e.poster" class="card-img-top posterEvent" alt="...">
                            </router-link>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <router-link :to="{ path: '/detail/'+e.eventID }">
                                            <h1 class=" judulEvent">{{ e.judul }}</h1>
                                            <p v-if="e.penyelenggara !== ''" class="card-text instansiEvent">{{ e.instansi }}</p>
                                            <p v-else class="card-text instansiEvent">Tidak ada data</p>
                                        </router-link>
                                    </div>
                                    <div class="col-sm-auto">
                                      <form>
                                            <label class="custom-checkbox show-password">
                                                <div v-if="itemsContains(e.eventID)">
                                                    <input type="checkbox" v-on:click="unsave(e.eventID)" style="display: none" checked>
                                                    <i class="far fa-bookmark unchecked" style="font-size: 2rem"></i>
                                                    <i class="fas fa-bookmark checked " style="font-size: 2rem"></i>
                                                </div>
                                                <div v-else>
                                                    <input type="checkbox" v-on:click="save(e.eventID)" style="display: none">
                                                    <i class="far fa-bookmark unchecked" style="font-size: 2rem"></i>
                                                    <i class="fas fa-bookmark checked " style="font-size: 2rem"></i>
                                                </div>
                                            </label>
                                        </form>         
                                    </div>
                                </div>           
                            </div>
                        </template>    
                    </div>
                    <br>
                </div>
            </div>
            <div v-else>
              <h1>Belum ada data</h1>
            </div>
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <br>
          <div v-if="isLoading">
            <center><img class="mt-5" src="../../assets/images/loading.gif" alt=""></center>
          </div>
          <div v-else-if="favoriteEvent !== 0" class="row">
                <div class="col" v-for="(e) in favoriteEvent" :key="e.eventID">
                    <div class="card">
                        <template>
                            <router-link :to="{ path: '/detail/'+e.eventID }">
                                <img :src="e.poster" class="card-img-top posterEvent" alt="...">
                            </router-link>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <router-link :to="{ path: '/detail/'+e.eventID }">
                                            <h1 class=" judulEvent">{{ e.judul }}</h1>
                                            <p v-if="e.penyelenggara !== ''" class="card-text instansiEvent">{{ e.instansi }}</p>
                                            <p v-else class="card-text instansiEvent">Tidak ada data</p>
                                        </router-link>
                                    </div>
                                    <div class="col-sm-auto">
                                      <div class="col-sm-auto">
                                      <form>
                                            <label class="custom-checkbox show-password">
                                                <div v-if="itemsContains2(e.eventID)">
                                                    <input type="checkbox" v-on:click="unfavorite(e.eventID)" style="display: none" checked>
                                                    <i class="far fa-heart unchecked" style="font-size: 2rem"></i>
                                                    <i class="fas fa-heart checked " style="font-size: 2rem"></i>
                                                </div>
                                                <div v-else>
                                                    <input type="checkbox" v-on:click="favorite(e.eventID)" style="display: none">
                                                    <i class="far fa-heart unchecked" style="font-size: 2rem"></i>
                                                    <i class="fas fa-heart checked " style="font-size: 2rem"></i>
                                                </div>
                                            </label>
                                        </form>         
                                    </div>
                                    </div>
                                </div>           
                            </div>
                        </template>    
                    </div>
                    <br>
                </div>
            </div>
            <div v-else>
              <h1>Belum ada data</h1>
            </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
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
        background-color: transparent;
        color: #0A3D62;
        padding: 15px;
    }
.posterEvent{ 
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    h1{ 
        font-size: 18pt;
        color: #0A3D62; 
        font-weight: 900;
    }
    p{ 
        font-size: 13.5pt; 
        color: #B2B5B8; 
    }
    a{
        text-decoration: none;
    }
    .card{
        width: 416px;
        border-radius: 18px;
    }
    .card-body{
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
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
.row2{
  width: 75%;
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

@media screen and (max-width: 1400px) {
        .card{ 
            width: 356px; 
        }
    }
    @media screen and (max-width: 1200px) {
        .card{ 
            width: 285px; 
        }
    }
    @media screen and (max-width: 992px) {
        .card{ 
            width: 215px;
        }
    }
    @media screen and (max-width: 768px) {
        h1, p{ 
            text-align: center;
        }
        .judulEvent, .instansiEvent{ 
            text-align: left; 
        }
        .card{ 
            width: 335px;
            display: block; margin-left: auto; margin-right: auto; 
        }
        .profile-picture, .card-title, .button-edit-profile{
            display: block; margin-left: auto; margin-right: auto;
            text-align: center;
        }
        .button-edit-profile{
            margin-top: 1em;
        }
    }
</style>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            isLoading: true,
            userID: '',
            email: '',
            namaLengkap: '',
            profile_picture: '',
            isLoginWithGoogle: false,
            data: null,
            savedEventID: null,
            favoriteEventID: null,
            joinedEventID: null,
            savedEvent: [],
            favoriteEvent: [],
            joinedEvent: [],
        }
    },
    methods:{
      save(id){
            const fieldValue = firebase.firestore.FieldValue;
            var docID = localStorage.getItem("docID");
            this.savedEventID.push(id);
            firebase
            .firestore()
            .collection("users")
            .doc(docID)
            .update({
                savedEvent: fieldValue.arrayUnion(id)
            })
            .then(() => {
              localStorage.setItem('savedEvent', this.savedEventID);
              window.location.reload();
            })
        },
        unsave(id){
            const fieldValue = firebase.firestore.FieldValue;
            var docID = localStorage.getItem("docID");
            for(var i = 0; i < this.savedEventID.length; i++){                       
                if ( this.savedEventID[i] === id) { 
                    this.savedEventID.splice(i, 1); 
                    i--; 
                }
            }
            firebase
            .firestore()
            .collection("users")
            .doc(docID)
            .update({
                savedEvent: fieldValue.arrayRemove(id)
            })
            .then(() => {
              localStorage.setItem('savedEvent', this.savedEventID);
              window.location.reload()
            })
        },
        itemsContains(n) {
            if(this.savedEventID != null){
                return this.savedEventID.indexOf(n) > -1
            }
        },
        itemsContains2(n){
            if(this.favoriteEventID !== null){
                return this.favoriteEventID.indexOf(n) > -1
            } 
        },
        unfavorite(id){
            const fieldValue = firebase.firestore.FieldValue;
            var docID = localStorage.getItem("docID");
            for(var i = 0; i < this.favoriteEventID.length; i++){                       
                if ( this.favoriteEventID[i] === id) { 
                    this.favoriteEventID.splice(i, 1); 
                    i--; 
                }
            }
            firebase
            .firestore()
            .collection("users")
            .doc(docID)
            .update({
                favoriteEvent: fieldValue.arrayRemove(id)
            })
            .then(() => {
              localStorage.setItem('favoriteEvent', this.favoriteEventID);
              window.location.reload()
            })
        },
        favorite(id){
            const fieldValue = firebase.firestore.FieldValue;
            var docID = localStorage.getItem("docID");
            this.favoriteEventID.push(id);
            firebase
            .firestore()
            .collection("users")
            .doc(docID)
            .update({
                favoriteEvent: fieldValue.arrayUnion(id)
            })
            .then(() => {
              localStorage.setItem('favoriteEvent', this.favoriteEventID);
              window.location.reload()
            })
        }
    },
    mounted(){
      this.namaLengkap = localStorage.getItem('namaLengkap');
      this.profile_picture = localStorage.getItem('profilePicture');
      this.email = localStorage.getItem('email');
      // this.savedEventID = localStorage.getItem('savedEvent').split(',');
      // this.favoriteEventID = localStorage.getItem('favoriteEvent').split(',');

      firebase
        .firestore()
        .collection('users').where('userID', '==', localStorage.getItem("userID")).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { 
                this.savedEventID = doc.data().savedEvent; 
                this.favoriteEventID = doc.data().favoriteEvent; 
                this.joinedEventID = doc.data().joinedEvent;

                for (let index = 0; index < this.savedEventID.length; index++) {
                  firebase
                  .firestore()
                  .collection('events').where('eventID', '==', this.savedEventID[index]).get()
                  .then((querySnapshot) => {
                      querySnapshot.forEach((doc) => {
                          this.savedEvent.push({
                              eventID: doc.data().eventID,
                              judul: doc.data().judulEvent,
                              instansi: doc.data().instansi,
                              poster: doc.data().gambarEvent
                          });    
                      })
                  })  
                }
                for (let index = 0; index < this.favoriteEventID.length; index++) {
                  firebase
                  .firestore()
                  .collection('events').where('eventID', '==', this.favoriteEventID[index]).get()
                  .then((querySnapshot) => {
                      querySnapshot.forEach((doc) => {
                          this.favoriteEvent.push({
                              eventID: doc.data().eventID,
                              judul: doc.data().judulEvent,
                              instansi: doc.data().instansi,
                              poster: doc.data().gambarEvent
                          });    
                      })
                  }) 
                }
                for (let index = 0; index < this.joinedEventID.length; index++) {
                  firebase
                  .firestore()
                  .collection('events').where('eventID', '==', this.joinedEventID[index]).get()
                  .then((querySnapshot) => {
                      querySnapshot.forEach((doc) => {
                          this.joinedEvent.push({
                              eventID: doc.data().eventID,
                              judul: doc.data().judulEvent,
                              instansi: doc.data().instansi,
                              poster: doc.data().gambarEvent
                          });    
                      })
                      this.isLoading = false;
                  })  
                }
            })
        }) 

      // firebase
      //   .firestore()
      //   .collection('users').where('userID', '==', localStorage.getItem("userID")).get()
      //   .then((querySnapshot) => {
      //       querySnapshot.forEach((doc) => { 
                
                
      //       })
      //   })

      
        
      
    }
}
</script>