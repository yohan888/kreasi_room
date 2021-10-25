<template>
 <center>
<div style="width:90vw">
   
    <div class="row d-flex justify-content-center">
        <div class="col-md" style="background-color: cyan">
            <img class="imageTentang" src="../../assets/images/img-tentang.jpg">
        </div>
        <div class="col-md" style="text-align: left; background-color: gray">
            <h1>Apa itu (Nama Website)?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, culpa. Atque est dolores enim iste</p>
            <span>
                <i class="fa fa-arrow-up " aria-hidden="true"></i>
            </span>
         
            
            
           
                
        </div>
    </div>
    
</div></center>
</template>

<style scoped>
    h1{
        font-size: 16pt;
        font-weight: bold;
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
        width: 400px;
        height: 400px;
        border-radius: 15px;
    }

    .fa{
        height: 5rem;
        width: 5rem;
        background: #ffc0c0;
        
        border-radius: 15px;
    }

    .iconTentang{
        
    }


    @media screen and (max-width: 768px) {
        .imageTentang{
            width: 150px;
            height: 150px;
            object-fit: cover;
        }
    }
</style>