<template>
<center>
<div class="container" >
    <h4 class="col custom-detailevent"><b> Detail Event</b></h4>
    <div class="row d-flex justify-content-center">
        <div class="col-md mt-3">
            <img class="imageDetailEvent" src="../../assets/images/img-tentang.jpg">
        </div>
        <div class="col-md mt-2" style="text-align: left;">
            <div class="custom-btn">
                <button class="btn btn-lg me-2 btn-tipe">Tipe</button>
                <button class="btn btn-lg btn-katerogi">Katerogi</button>
                <h2 class="fas fa-heart custom-like me-4"></h2>
                <h2 class="fas fa-share-alt-square custom-share"></h2>
                <br><br>
            </div>
            <div class="row">
                <div class="col">
                <i class="fas fa-calendar-alt custom-icon-kalender"></i>
            </div>
            <div class="col">
                <h6 class="mt-1 custom-tanggal">Tanggal</h6>
            </div>
            </div>
                <h5 style="color:#0A3D62;"><b>Jumat, 23 Oktober 2021</b></h5>
            <div class="row">
                <div class="col">
                <i class="fas fa-clock custom-icon-waktu"></i>
            </div>
            <div class="col">
                <h6 class="mt-1 custom-waktu">Waktu</h6>
            </div>
            </div>
                <h5 style="color:#0A3D62;"><b>09.00 - 12.00 WIB</b></h5>
            <hr size="5">

            <h6 style="color:#B2B5B8;"><b>Penyelenggara Event</b></h6>
            <div class="row">
                <div class="col-sm-auto">
                    <img class="imagePenyelenggara rounded-circle" src="../../assets/images/img-tentang.jpg">
                </div>
                <div class="col" style="text-align: left;">
                    <span style="color:#0A3D62;"><b> Michella</b></span> <br>
                    <span style="color:#B2B5B8;"> Michella@gmail.com</span>
                </div>
                <div class="col-md-1" style="text-align: right;">
                    <h4><i class="fas fa-envelope"></i></h4>
                </div>
                <div class="col-md-1" style="text-align: right;">
                    <h4><i class="fab fa-whatsapp"></i></h4>
                </div>
            </div>
            <hr size="4">

            <h6 style="color:#B2B5B8;"><i class="fas fa-file-alt"> Deskripsi</i></h6>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia magnam velit eos repellat sed nulla, 
                officiis nostrum? Provident excepturi necessitatibus quidem numquam repudiandae iste error eaque. 
                Sint sequi amet minus.</p>
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
                        <div class="modal-body">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quas iusto dolorum, enim accusamus placeat corporis doloremque quidem fugiat facilis at officia id odio ab ea, excepturi aut numquam minus!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </center>
            <button class="btn btn-daftar"> Daftar</button>

        </div>
    </div><br><br><br>

    <h4 class="col custom-event"><b>Event Serupa</b></h4>
    <div class="row custom-row mt-4">
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


</div>
</center>
</template>

<style scoped>
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
    width: 130px;
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