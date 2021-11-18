<template>
<div>
    <div class="jumbotron">
        <center>
        <div class="container" style=" text-align: left">
            <br><br>
            <div class="row">
                <div class="col-md-6">
                    <div class="judul">
                        <h1>
                            <b style="color:white;">Bangun karir kamu dengan ikut berbagai macam webinar</b>
                        </h1>
                    </div>
                </div>
                <div class="col-md-auto">
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-6">
                    <p class="lead isi">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At amet, lectus eget sodales ac. Pellentesque nam faucibus elementum sed elementum, nunc nec.
                    </p>
                    <br><br><br>
                </div>
                <div class="col-md-auto">
                </div>
            </div>

            
        </div>
        
    </center>
    </div>
    <div class="container search-bar">
                <div class="row">
                    <div class="col-md-auto">
                        <!-- <form> -->
                            <div class="input-container"> 
                                <i class="fas fa-search icon"></i>
                                <input class="input-field" id="email" type="text" placeholder="Cari Event" v-model="search" @change="searchEvent">
                            </div>
                        <!-- </form> -->
                    </div>
                    <div class="col-sm-auto ms-auto">
                        <select class="form-select" v-model="sortBy" id="" @change="sort">
                            <option value="Terbaru" selected>Terbaru</option>
                            <option value="Terlama">Terlama</option>
                            <option value="Nama">Nama</option>
                        </select>
                        
                    </div>
                    <div class="col-sm-auto">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Filter
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Filter Berdasarkan Topik</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form @submit.prevent="filtering">
                                    <div class="modal-body">
                                    
                                        <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Artificial Intelligence" id="flexCheckDefault">
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Artificial Intelligence
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Data Science" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Data Science
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Ekonomi" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Ekonomi
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Hukum" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Hukum
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Machine Learning" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Machine Learning
                                            </label>
                                        </div>
                                         <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Programing" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Programing
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Psikologi" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Psikologi
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Science" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Science
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Sejarah" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Sejarah
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input v-model="filter" class="form-check-input" type="checkbox" value="Teknologi" id="flexCheckChecked" checked>
                                            <label class="form-check-label" for="flexCheckChecked">
                                                Teknologi
                                            </label>
                                        </div>
                                    </div>
                                
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div>
            <div class="container"> 
            <br><br><br>
            <h1>Event</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div v-if="isLoading">
                <center><img class="mt-5" src="../../assets/images/loading.gif" alt=""></center>
            </div>
            <div v-else-if="event.length == 0">
                <h1> Belum ada data</h1>
            </div>
            <div v-else class="row">
                <div class="col" v-for="(e) in event" :key="e.eventID">
                    <div class="card">
                        <template v-if="isLoading">
                        </template>

                        <template v-else>
                            <router-link :to="{ path: '/detail/'+e.eventID }">
                                <img :src="e.poster" class="card-img-top posterEvent" alt="...">
                            </router-link>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <router-link :to="{ path: '/detail/'+e.eventID }">
                                            <h1 class="card-text judulEvent">{{ e.judul }}</h1>
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
           
            <br><br><br>
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
    #more {display: none;}
    .posterEvent{ 
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    .container{ 
        text-align: left; 
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
    #more {
        display: none;
    }
    .card{
        width: 416px;
        border-radius: 18px;
    }
    .judulEvent{ 
        font-size: 13.5pt;
        font-weight: 900;
        color: #0A3D62;
    }
    .instansiEvent{ 
        font-size: 10.5pt;
        color: rgba(10, 61, 98, 0.6);
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
    }
.loading {
        background: transparent url('https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif') center no-repeat;
        height: 400px;
        width: 400px;
    }
.search-bar{
    background-color: white;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 15px;
    margin-top: -2%;
}
.judul {
    text-align: left;
}
.isi {
    text-align: left;
    color: lightgray;
}
.jumbotron{
    background-image: url('../../assets/images/jumbotron2.png');
    background-size: cover;
    background-repeat: no-repeat;
    /* height: 100%; */
    height: auto;
    /* width: 100%; */
}

    .input-container {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        width: 100%;
        margin-bottom: 15px;
    }

.icon {
  padding: 15px;
  background: #fff;
  color: #0A3D62;
  min-width: 50px;
  text-align: center;
  border-top: 2px solid #0A3D62;
  border-left: 2px solid #0A3D62;
  border-bottom: 2px solid #0A3D62;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 2px solid #0A3D62;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
@media screen and (max-width: 768px) {
    .jumbotron{
        height: auto;
    }
    .carousel1 {
        height: 250px;
    }
}

</style>

<script>
import firebase from 'firebase'
export default {
    data() {
        return{
            event: [],
            search: '',
            isLoading: true,
            sortBy: 'Terbaru',
            filter: [],
            userID: localStorage.getItem("userID"),
            savedEvent: null,
        }
    },
    mounted(){
        this.isLoading = true;

        firebase
        .firestore()
        .collection('users').where('userID', '==', this.userID).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { 
                this.savedEvent = doc.data().savedEvent; 
            })
        }) 

        firebase
        .firestore()
        .collection('events').where('mode', '==', 'Umum').orderBy('createdAt', 'desc').limit(6).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.event.push({
                    eventID: doc.data().eventID,
                    judul: doc.data().judulEvent,
                    instansi: doc.data().instansi,
                    poster: doc.data().gambarEvent
                });    
            })
            this.isLoading = false;
        }) 
        
    },
    methods:{
        save(id){
            const fieldValue = firebase.firestore.FieldValue;
            var docID = localStorage.getItem("docID");
            this.savedEvent.push(id);
            firebase
            .firestore()
            .collection("users")
            .doc(docID)
            .update({
                savedEvent: fieldValue.arrayUnion(id)
            })
            localStorage.setItem('savedEvent', this.savedEvent);
            console.log("Setelah save : ", this.savedEvent)
        },
        unsave(id){
            const fieldValue = firebase.firestore.FieldValue;
            var docID = localStorage.getItem("docID");
            for(var i = 0; i < this.savedEvent.length; i++){                       
                if ( this.savedEvent[i] === id) { 
                    this.savedEvent.splice(i, 1); 
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
            localStorage.setItem('savedEvent', this.savedEvent);
            console.log("Setelah unsave : ", this.savedEvent)
        },
        itemsContains(n) {
            if(this.savedEvent != null){
                return this.savedEvent.indexOf(n) > -1
            }
        },
        filtering(){
            if(this.filter.length > 0){
                for (let index = 0; index < this.filter.length; index++) {
                    this.event.splice(0);
                    firebase
                    .firestore()
                    .collection('events').where('topik', '==', this.filter[index]).orderBy('createdAt', 'desc').limit(6).get()
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            this.event.push({
                                eventID: doc.data().eventID,
                                judul: doc.data().judulEvent,
                                instansi: doc.data().instansi,
                                poster: doc.data().gambarEvent
                            });    
                        })
                    })      
                }
            }else{
                this.sort();
            }
        },
        sort(){
            if(this.sortBy == "Terlama"){
                this.event.splice(0);
                firebase
                .firestore()
                .collection('events').where('mode', '==', 'Umum').orderBy('createdAt', 'asc').get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.event.push({
                            eventID: doc.data().eventID,
                            judul: doc.data().judulEvent,
                            instansi: doc.data().instansi,
                            poster: doc.data().gambarEvent
                        });    
                    })
                }) 
            }else if(this.sortBy == "Terbaru"){
                this.event.splice(0);
                firebase
                .firestore()
                .collection('events').where('mode', '==', 'Umum').orderBy('createdAt', 'desc').get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.event.push({
                            eventID: doc.data().eventID,
                            judul: doc.data().judulEvent,
                            instansi: doc.data().instansi,
                            poster: doc.data().gambarEvent
                        });    
                    })
                })
            }else if(this.sortBy == "Nama"){
                this.event.splice(0);
                firebase
                .firestore()
                .collection('events').where('mode', '==', 'Umum').orderBy('judulEvent', 'asc').get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.event.push({
                            eventID: doc.data().eventID,
                            judul: doc.data().judulEvent,
                            instansi: doc.data().instansi,
                            poster: doc.data().gambarEvent
                        }); 
                    })
                })
            }
        },
        loaded(){
            this.isLoaded = true;
            this.isLoading = false;
        },
        searchEvent(){
            this.event.splice(0);
            if(this.search !== ''){
                firebase
                .firestore()
                .collection('events').where('mode', '==', 'Umum').where('judulEvent', '==', this.search).get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        this.event.push({
                            eventID: doc.data().eventID,
                            judul: doc.data().judulEvent,
                            instansi: doc.data().instansi,
                            poster: doc.data().gambarEvent
                        }); 
                    })
                })
            }else{
                this.sort();
            }
        }
    }
}
</script>