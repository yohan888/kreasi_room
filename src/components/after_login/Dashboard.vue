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
                        <select class="form-select" name="" id="">
                            <option value="">Terbaru</option>
                        </select>
                        
                    </div>
                    <div class="col-sm-auto">
                        <select class="form-select" name="" id="">
                            <option value="">Filter</option>
                        </select>
                    </div>
                </div>
            </div>
        <div>
            <EventTerbaru/>
        </div>
    </div>
</template>

<style scoped>
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
    height: 40vh;
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
        height: 100vh;
    }
    .carousel1 {
        height: 250px;
    }
}

</style>

<script>
import EventTerbaru from '../home/EventTerbaru.vue'
export default {
    components:{
        EventTerbaru
    },
    setup() {
        
    },
    methods:{
        searchEvent(){

        }
    }
}
</script>