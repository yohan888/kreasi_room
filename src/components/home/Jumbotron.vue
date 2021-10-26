<template>
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
                </div>
                <div class="col-md-auto">
                </div>
            </div>

            

            <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner carousel1">
                    <div class="carousel-item active ">
                        <img src="../../assets/images/img-tentang.jpg" class="d-block w-100 " alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/images/img-tentang-2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/images/img-tentang-3.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </center>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// import firebase from "firebase";
export default {
    computed: {
        ...mapGetters({
        user: "user"
        })
    },
    mounted(){
            
        
    }
}
</script>

<style scoped>
.judul {
    text-align: left;
}
.isi {
    text-align: left;
    color: lightgray;
}
.jumbotron{
    background-image: url('../../assets/images/Untitled-1.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 120vh;
    /* width: 100%; */
}
.carousel1 {
    border-radius: 20px;
    width: 100%;
    margin-top: 5%;
    height: 550px;
}

@media screen and (max-width: 768px) {
    .jumbotron{
        height: 100vh;
    }
    .carousel1 {
        height: 250px;
    }
}

</style>