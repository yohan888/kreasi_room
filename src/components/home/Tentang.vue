<template>
 <center>
<div class="container" >
   
    <div class="row d-flex justify-content-center">
        <div class="col-md mt-3">
            <img class="imageTentang" src="../../assets/images/img-tentang.jpg">
        </div>
        <div class="col-md mt-3" style="text-align: left;">
            <h1>Apa itu (Nama Website)?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi volutpat at quam amet.</p>

            <div class="row align-items-center">
                <div class="col-auto">
                    <i class="fas fa-chalkboard-teacher iconTentang"></i>
                </div>
                <div class="col d-flex flex-column">
                    <div class="p-2 pt-0 pb-0 title">Judul</div>
                    <div class="p-2 pt-0 pb-0 text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi volutpat at quam amet.
                    </div>
                </div>
            </div>

            <div class="row align-items-center mt-3">
                <div class="col-auto">
                    <i class="fas fa-cloud iconTentang" aria-hidden="true"></i>
                </div>
                <div class="col d-flex flex-column">
                    <div class="p-2 pt-0 pb-0 title">Judul</div>
                    <div class="p-2 pt-0 pb-0 text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi volutpat at quam amet.
                    </div>
                </div>
            </div>

            <div class="row align-items-center mt-3">
                <div class="col-auto">
                    <i class="fas fa-book-open iconTentang" aria-hidden="true"></i>
                </div>
                <div class="col d-flex flex-column">
                    <div class="p-2 pt-0 pb-0 title">Judul</div>
                    <div class="p-2 pt-0 pb-0 text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi volutpat at quam amet.
                    </div>
                </div>
            </div>

            <div class="row align-items-center mt-3">
                <div class="col-auto">
                    <i class="fas fa-calendar-alt iconTentang" aria-hidden="true"></i>
                </div>
                <div class="col d-flex flex-column">
                    <div class="p-2 pt-0 pb-0 title">Judul</div>
                    <div class="p-2 pt-0 pb-0 text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi volutpat at quam amet.
                    </div>
                </div>
            </div>
            
            
            
            
           
                
        </div>
    </div>
    
</div></center>
</template>

<style scoped>

    h1{
        font-size: 18pt;
        font-weight: bold;
        color: #0A3D62;
    }

    .title{
        font-weight: bold; 
        color: #0A3D62; 
        text-align:left;
    }

    .text{
        font-size: 10pt; 
        color: #A1A1A1;
    }

    h2{
        font-size: 14pt;
        font-weight: bold;
    }

    p{
        font-size: 12pt;
    }

    .imageTentang{
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }

    .iconTentang{
        height: 5rem;
        width: 5rem;
        padding: 1.4rem;
        background: #0A3D62;
        text-align: center;
        font-size: 24pt;
        border-radius: 15px;
        color: white;
    }

   

    @media screen and (max-width: 768px) {
        .imageTentang{
            width: 250px;
            height: 250px;
            object-fit: cover;
        }


        h1, p{
            text-align: center;
        }

        .text{
            font-size: 9pt;
        }


    }
</style>