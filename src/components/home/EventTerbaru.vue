<template>
    <div class="container"> 
        <br><br><br>
        <h1>Event Terbaru</h1>
        <p>Kami menampilkan event yang baru saja dibuat belakangan ini.</p>
        <div v-if="event.length == 0"><h1> Belum ada data</h1></div>
            <div v-else class="row">
                <div class="col" v-for="(e, index) in event" :key="e.eventID">
                    <router-link v-if="index < 3" :to="{ path: '/detail/'+e.eventID }">
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

        <span id="dots"></span>
        <span id="more">

        <div v-if="event.length > 3" class="row">
                <div class="col" v-for="(e) in event.slice(3)" :key="e.eventID">
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
        </span>
        <center><button v-on:click="myFunction()" id="myBtn" class='btn btn-primary' style=" color:white; border-radius: 10px;">Read more</button></center>
        <br><br><br>
    </div>
</template>

<script>
import firebase from 'firebase'
export default ({
    data(){
        return{
            event: [],
            isLoaded: false,
            isLoading: false,
        }
    },
    mounted(){
        this.isLoading = true;
        this.isLoaded = false;
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
        this.loaded();
    },
    methods:{
        loaded(){
            this.isLoaded = true;
            this.isLoading = false;
        },
        myFunction() {
          var dots = document.getElementById("dots");
          var moreText = document.getElementById("more");
          var btnText = document.getElementById("myBtn");

          if (dots.style.display === "none") {
              dots.style.display = "inline";
              btnText.innerHTML = "Read more"; 
              moreText.style.display = "none";
          } else {
              dots.style.display = "none";
              btnText.innerHTML = "Show less"; 
              moreText.style.display = "inline";
          }
      }
    }
})
</script>


<style scoped>
    .loading {
        background: transparent url('https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif') center no-repeat;
        height: 400px;
        width: 400px;
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
</style>

