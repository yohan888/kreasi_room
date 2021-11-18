<template>
<center>
<div class="container" >
    <div v-if="isLoading">
        <img class="mt-5" src="../../assets/images/loading.gif" alt="">
    </div>
    <div v-else>

    
    <h4 class="col custom-detailevent mt-3"><b> Detail Event "{{ this.judul }}"</b></h4>
    <div class="row d-flex justify-content-center">
        <div class="col-md mt-3">
            <img class="imageDetailEvent" :src="this.gambarEvent">
        </div>
        <div class="col-md mt-2" style="text-align: left;">
            <!-- <div class="custom-btn "> -->
                <div class="row " style="width: 100%">
                    <div class="col-auto d-flex justify-content-start ">
                        <button class="btn btn-lg me-2 btn-tipe">{{ this.topik }}</button>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <form>
                            <label class="custom-checkbox show-password">
                                <div v-if="itemsContains(this.eventID)">
                                    <input type="checkbox" v-on:click="unfavorite(eventID)" style="display: none" checked>
                                    <i class="far fa-heart unchecked" style="font-size: 2rem"></i>
                                    <i class="fas fa-heart checked " style="font-size: 2rem"></i>
                                </div>
                                <div v-else>
                                    <input type="checkbox" v-on:click="favorite(eventID)" style="display: none">
                                    <i class="far fa-heart unchecked" style="font-size: 2rem"></i>
                                    <i class="fas fa-heart checked " style="font-size: 2rem"></i>
                                </div>
                            </label>
                            <h2 class="fas fa-share-alt-square custom-share"></h2>
                        </form>   
                        
                    </div>
                </div>
                
                
                <!-- <div class=" bg-secondary">
               
                </div> -->
                <br><br>
            <!-- </div> -->
            <div class="row">
                <div class="col">
                <i class="fas fa-calendar-alt custom-icon-kalender"></i>
            </div>
            <div class="col">
                <h6 class="mt-1 custom-tanggal">Tanggal Mulai</h6>
            </div>
            </div>
                <h5 style="color:#0A3D62;"><b>{{ this.tanggal }} - {{ this.arrayMulai[1] }}</b></h5>
            <div class="row">
                <div class="col">
                <i class="fas fa-calendar-alt custom-icon-kalender"></i>
            </div>
            <div class="col">
                <h6 class="mt-1 custom-waktu">Tanggal Selesai</h6>
            </div>
            </div>
                <h5 style="color:#0A3D62;"><b>{{ this.tanggalSelesai }} - {{ this.arraySelesai[1] }}</b></h5>
            <hr size="5">

            <h6 style="color:#B2B5B8;"><b>Penyelenggara Event</b></h6>
            <div class="row">
                <div class="col-sm-auto">
                    <img class="imagePenyelenggara rounded-circle" :src="this.penyelenggara.profilePicture">
                </div>
                <div class="col" style="text-align: left;">
                    <span style="color:#0A3D62;"><b> {{ this.penyelenggara.namaPenyelenggara }}</b></span> <br>
                    <span style="color:#B2B5B8;"> {{ this.penyelenggara.emailPenyelenggara }}</span>
                </div>
                <div class="col-md-1" style="text-align: right;">
                    <h4><a v-bind:href="'mailto:' + this.penyelenggara.emailPenyelenggara"><i class="fas fa-envelope"></i></a></h4>
                </div>
               
            </div>
            <hr size="4">

            <h6 style="color:#B2B5B8;"><i class="fas fa-file-alt"> Deskripsi</i></h6>
            <p v-if="this.deskripsi.length < 200">{{ this.deskripsi }}</p>
            <p v-else>{{ this.deskripsi.substring(0, 199)+"..." }}</p>
            <center>
                <!-- <a href="#"> Baca Selengkapnya</a> -->
                <a href="#" data-bs-toggle="modal" data-bs-target="#ketentuanModal">
                        Baca Selengkapnya
                </a>

                <div class="modal fade" id="ketentuanModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Baca Selengkapnya</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style="text-align: left">
                            {{ this.deskripsi }}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </center>
            <div v-if="dateNow > mulai && dateNow < selesai">
                <router-link :to="{ path: '/join/'+this.eventID }">
                    <button class="btn btn-daftar"> Daftar</button>
                </router-link>
            </div>
            <div v-else>
                <button class="btn btn-daftar" disabled> Daftar</button>
            </div>
        </div>
    </div><br><br><br>

    <h4 class="col custom-event"><b>Event Serupa</b></h4>
    <div v-if="eventSerupa.length == 0"><h1> Belum ada data</h1></div>
    <div v-else class="row custom-row mt-4">
            <div class="col" v-for="e in eventSerupa" :key="e.eventID">
                    <router-link :to="{ path: '/detail/'+e.eventID }" @click.native="$router.go()">
                    <div class="card" >
                        <img :src="e.poster" class="card-img-top posterEvent" alt="...">
                        <div class="card-body">
                            <h1 class="card-text judulEvent">{{ e.judul }}</h1>
                            <p class="card-text instansiEvent">{{ e.instansi }}</p>
                        </div>
                    </div>
                </router-link>  
                <br>
            </div>

        </div>
</div>
</div>
</center>
</template>

<script>
import firebase from 'firebase';
export default {
    data(){
        return{
            isLoading: true,
            dateNow: '',
            userID: '',
            eventID: '',
            judul: '',
            topik: '',
            gambarEvent: '',
            mulai: '',
            arrayMulai: [],
            selesai: '',
            arraySelesai: [],
            idPenyelenggara: '',
            deskripsi: '',
            jumlahView: 0,
            penyelenggara:{
                namaPenyelenggara: '',
                emailPenyelenggara: '',
                profilePicture: ''
            },
            tanggal: '',
            tanggalSelesai: '',
            eventSerupa: [],
            favoriteEvent: []
        }
    },
    methods:{
        itemsContains(n){
            if(this.favoriteEvent.length > 1){
                return this.favoriteEvent.indexOf(n) > -1
            }
            
        },
        unfavorite(id){
            const fieldValue = firebase.firestore.FieldValue;
            var docID = localStorage.getItem("docID");
            for(var i = 0; i < this.favoriteEvent.length; i++){                       
                if ( this.favoriteEvent[i] === id) { 
                    this.favoriteEvent.splice(i, 1); 
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
            localStorage.setItem('favoriteEvent', this.favoriteEvent);
            console.log("Setelah unsave : ", this.favoriteEvent)
        },
        favorite(id){
            const fieldValue = firebase.firestore.FieldValue;
            var docID = localStorage.getItem("docID");
            this.favoriteEvent.push(id);
            firebase
            .firestore()
            .collection("users")
            .doc(docID)
            .update({
                favoriteEvent: fieldValue.arrayUnion(id)
            })
            localStorage.setItem('savedEvent', this.favoriteEvent);
            console.log("Setelah save : ", this.favoriteEvent)
        }
    },
    beforeMount(){
        var today = new Date();
        this.dateNow = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'T'+today.getHours()+":"+today.getMinutes();
        console.log("Skrg" + this.dateNow);
        this.userID = localStorage.getItem("userID");
        firebase
        .firestore()
        .collection('users').where('userID', '==', this.userID).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { 
                this.favoriteEvent.push(doc.data().favoriteEvent); 
            })
        }) 
        this.eventID = this.$route.params.eventID;
        
        firebase
            .firestore()
            .collection('events')
            .where('eventID', '==', this.eventID)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.judul = doc.data().judulEvent;
                    this.topik = doc.data().topik;
                    this.gambarEvent = doc.data().gambarEvent;
                    this.mulai = doc.data().mulai;
                    this.selesai = doc.data().selesai;
                    this.idPenyelenggara = doc.data().penyelenggara;
                    this.deskripsi = doc.data().deskripsi; 
                    this.jumlahView = doc.data().jumlahView;
                    console.log(this.dateNow + " - " + this.mulai);
                })
                firebase
                .firestore()
                .collection('events')
                .doc(this.eventID)
                .update({
                    jumlahView: this.jumlahView + 1
                });
                this.arrayMulai = this.mulai.split("T");
                this.arraySelesai = this.selesai.split("T");
                this.tanggal = new Date(this.arrayMulai[0]);
                this.tanggalSelesai = new Date(this.arraySelesai[0]);

                this.tanggal = this.tanggal.toLocaleDateString('id-ID', {
                    weekday: 'long', // long, short, narrow
                    day: 'numeric', // numeric, 2-digit
                    year: 'numeric', // numeric, 2-digit
                    month: 'long', // numeric, 2-digit, long, short, narrow
                })

                this.tanggalSelesai = this.tanggalSelesai.toLocaleDateString('id-ID', {
                    weekday: 'long', // long, short, narrow
                    day: 'numeric', // numeric, 2-digit
                    year: 'numeric', // numeric, 2-digit
                    month: 'long', // numeric, 2-digit, long, short, narrow
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
                // .where('eventID', '!=', this.eventID)
                .where('mode', '==', 'Umum')
                .where('topik', '==', this.topik)
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if(this.eventID == doc.data().eventID){
                            console.log("serupa");
                        }else{
                            
                            this.eventSerupa.push({
                                eventID: doc.data().eventID,
                                judul: doc.data().judulEvent,
                                instansi: doc.data().instansi,
                                poster: doc.data().gambarEvent
                            }); 
                        }
                        
                    })
                    this.isLoading = false;
                })
                 
            }) 
    }
}
</script>

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
.custom-icon-kalender{
    color: #0A3D62;
}
.custom-tanggal{
    margin-left: -100%;
    color: #B2B5B8;
}
.custom-icon-waktu{
    color: #0A3D62;
}
.custom-waktu {
    margin-left: -100%;
    color: #B2B5B8;
}
/* CSS bagian Detail Event */
.custom-detailevent{
    text-align: left;
    color: #0A3D62;
}
.imageDetailEvent{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    }
.btn-tipe{
    background-color:#0A3D62;
    color:white;
    width: auto;
    height: 50px;
    border-radius: 10px;
}
.btn-katerogi{
    width: 200px;
    height: 50px;
    border: 3px solid #0A3D62;
    border-radius: 10px;
    margin: 10px;
    color: #0A3D62;
}
.btn-daftar{
    margin-top: 15%;
    width: 100%;
    background-color:#0A3D62;
    color: white;
    border-radius: 10px;
    
}
.imagePenyelenggara{
    width: 40px;
    height: 40px;
}
.custom-share{
    margin-right: -30px;
}
.custom-like{
    margin-left: 200px;

}
/* CSS bagian Event */
.custom-event{
    text-align: left;
    color: #0A3D62;
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
.custom-row{   
    text-align: left; 
}

@media screen and (max-width: 768px) {
.custom-detailevent{
    text-align: center;
}
.imageDetailEvent{
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
.btn-tipe{
    background-color:#0A3D62;
    color:white;
    width: 80px;
    height: 50px;
    border-radius: 10px;
    margin-left: 38px;
}
.btn-katerogi{
    width: 150px;
    height: 50px;
    border: 3px solid #0A3D62;
    border-radius: 10px;
    margin: 10px;
    color: #0A3D62;
}
}

</style>