<template>
    <div class="row d-flex justify-content-center">
        <div class="col-md">
            <img class="imageTentang" src="../../assets/images/img-tentang.jpg">
        </div>
        <div class="col-md" style="text-align: left">
            <h1>Apa itu (Nama Website)?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, culpa. Atque est dolores enim iste</p>
            <span>
                <i class="fas fa-camera"></i>

            </span>
        </div>
    </div>
</template>

<style scoped>
    .imageTentang{
        object-fit: cover;
        width: 400px;
        height: 400px;
        border-radius: 15px;
    }

    .iconTentang{
        background-color: red;
    }

    @media screen and (max-width: 768px) {
        .imageTentang{
            width: 150px;
            height: 150px;
            object-fit: cover;
        }
    }
</style>