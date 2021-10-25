<template>
    <div class="container"> 
        <br><br><br>
        <h1>Event Terbaru</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <center><button onclick="myFunction()" id="myBtn" class='btn btn-primary' style=" color:white; border-radius: 10px;">Read more</button></center>
        <br><br><br>
    </div>
</template>

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

