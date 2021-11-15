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
                        <form @submit.prevent="searchEvent">
                            <div class="input-container"> 
                                <i class="fas fa-search icon"></i>
                                <input class="input-field" id="email" type="text" placeholder="Cari Event" name="event">
                            </div>
                        </form>
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
            <div v-if="event.length == 0"><h1> Belum ada data</h1></div>
            <div v-else class="row">
                <div class="col" v-for="(e) in event" :key="e.eventID">
                    <router-link :to="{ path: '/detail/'+e.eventID }">
                        <div class="card">
                            <template v-if="isLoading">
                                <img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="">
                            </template>
                            <template v-else>
                            <img :src="e.poster" class="card-img-top posterEvent" alt="...">
                            <div class="card-body">
                                <h1 class="card-text judulEvent">{{ e.judul }}</h1>
                                <p v-if="e.penyelenggara !== ''" class="card-text instansiEvent">{{ e.instansi }}</p>
                                <p v-else class="card-text instansiEvent">Tidak ada data</p>
                            </div>
                            </template>
                        </div>
                    </router-link>
                    <br>
                </div>
            </div>
           
            <br><br><br>
        </div>
        </div>
    </div>
</template>

<style scoped>
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
            isLoaded: false,
            isLoading: false,
            sortBy: 'Terbaru',
            filter: [],
        }
    },
    mounted(){
        this.isLoaded = false;
        this.isLoading = true;
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
        }) 
        this.loaded();
    },
    methods:{
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
                .collection('events').where('mode', '==', 'Umum').orderBy('createdAt', 'asc').limit(6).get()
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
                })
            }else if(this.sortBy == "Nama"){
                this.event.splice(0);
                firebase
                .firestore()
                .collection('events').where('mode', '==', 'Umum').orderBy('judulEvent', 'desc').limit(6).get()
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
        }
    }
}
</script>