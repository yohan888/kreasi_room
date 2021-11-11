<template>
    <div class="container"> 
        <br><br><br>
        <h1>Event Terbaru</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="row">
            <div class="col" v-for="e in event" :key="e.eventID">
                <div class="card">
                    <img :src="e.poster" class="card-img-top posterEvent" alt="...">
                    <div class="card-body">
                        <h1 class="card-text judulEvent">{{ e.judul }}</h1>
                        <p v-if="e.penyelenggara !== ''" class="card-text instansiEvent">{{ e.penyelenggara }}</p>
                        <p v-else class="card-text instansiEvent">Tidak ada data</p>
                    </div>
                </div>
                <br>
            </div>
            <!-- <div class="col">
                <div class="card">
                    <img src="../../assets/images/img-eventterbaru.png" class="card-img-top posterEvent" alt="...">
                    <div class="card-body">
                        <h1 class="card-text judulEvent">Judul Acara</h1>
                        <p class="card-text instansiEvent">Nama Instansi</p>
                    </div>
                </div>
                <br>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../../assets/images/img-eventterbaru.png" class="card-img-top posterEvent" alt="...">
                    <div class="card-body">
                        <h1 class="card-text judulEvent">Judul Acara</h1>
                        <p class="card-text instansiEvent">Nama Instansi</p>
                    </div>
                </div>
                <br>
            </div> -->
        </div>

        <span id="dots"></span>
        <span id="more">

        <div class="row">
            <div class="col">
                <div class="card">
                    <img src="../../assets/images/img-eventterbaru.png" class="card-img-top posterEvent" alt="...">
                    <div class="card-body">
                        <h1 class="card-text judulEvent">Judul Acara</h1>
                        <p class="card-text instansiEvent">Nama Instansi</p>
                    </div>
                </div>
                <br>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../../assets/images/img-eventterbaru.png" class="card-img-top posterEvent" alt="...">
                    <div class="card-body">
                        <h1 class="card-text judulEvent">Judul Acara</h1>
                        <p class="card-text instansiEvent">Nama Instansi</p>
                    </div>
                </div>
                <br>
            </div>
            <div class="col">
                <div class="card">
                    <img src="../../assets/images/img-eventterbaru.png" class="card-img-top posterEvent" alt="...">
                    <div class="card-body">
                        <h1 class="card-text judulEvent">Judul Acara</h1>
                        <p class="card-text instansiEvent">Nama Instansi</p>
                    </div>
                </div>
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
        }
    },
    mounted(){
        
            firebase
            .firestore()
            .collection('events').where('mode', '==', 'Umum').orderBy('createdAt', 'asc').limit(6).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.event.push({
                        eventID: doc.data().eventID,
                        judul: doc.data().judulEvent,
                        penyelenggara: doc.data().penyelenggara,
                        poster: doc.data().gambarEvent
                    });
                    
                })
            }) 

        console.log(this.event)
    },
    methods:{
        
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
    #more {display: none;}
    /* .posterEvent{ 
        object-fit: cover;
    } */
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

