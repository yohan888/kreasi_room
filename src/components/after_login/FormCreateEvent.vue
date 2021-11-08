<template>
    <div class="container mt-5">
        <div class="d-flex align-items-start flex-column">
            <h4><b>Informasi Dasar</b></h4>
            <p>Beri informasi dasar mengenai acara yang akan kalian buat!</p>
        </div>
        <div>
            <form action="" style="text-align: left">
                <div class="mb-3">
                    <label for="judulEvent" class="form-label">Judul Event</label>
                    <input type="email" class="form-control" id="judulEvent" v-model="form.judulEvent">
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <label for="penyelenggara" class="form-label">Penyelenggara</label>
                        <input type="text" class="form-control" id="penyelenggara">
                    </div>
                    <div class="col">
                       <label for="tipe" class="form-label">Topik</label>
                        <select name="tipe" id="tipe" class="form-select">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="lokasi" class="form-label">Lokasi Event</label>
                    <div class="wrapper">
                        <input type="radio" name="lokasi" value="Luring" id="option-1" checked>
                        <input type="radio" name="lokasi" value="Daring" id="option-2">
                        <input type="radio" name="lokasi" value="Next" id="option-3">
                        <label for="option-1" class="option option-1">
                            <!-- <div class="dot"></div> -->
                            <span>Luring</span>
                        </label>
                        <label for="option-2" class="option option-2">
                            <!-- <div class="dot"></div> -->
                            <span>Daring</span>
                        </label>
                        <label for="option-3" class="option option-3">
                            <!-- <div class="dot"></div> -->
                            <span>Akan Diumumkan</span>
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="row">
                        <div class="col">
                            <label for="mulaiEvent" class="form-label" >Tanggal dan Waktu Mulai</label>
                            <input type="datetime-local" class="form-control" name="mulaiEvent" id="mulaiEvent" aria-describedby="mulaiEvent">
                            <div id="mulaiEvent" class="form-text">Gunakan Google Chrome untuk pengalaman yang lebih baik.</div>
                        </div>
                        <div class="col">
                            <label for="selesaiEvent" class="form-label" >Tanggal dan Waktu Selesai</label>
                            <input type="datetime-local" class="form-control" name="selesaiEvent" id="selesaiEvent" aria-describedby="selesaiEvent">
                            <div id="selesaiEvent" class="form-text">Gunakan Google Chrome untuk pengalaman yang lebih baik.</div>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="poster" class="form-label" >Poster Event</label>
                    <input class="form-control" type="file" accept=".jpg, .png" name="poster" id="poster">
                </div>
                <div class="mb-3">
                    <label for="deskripsi" class="form-label" >Deskripsi Event</label>
                    <textarea class="form-control" type="text" name="deskripsi" id="deskripsi"></textarea>
                </div>
                <div class="mb-3">
                    <label for="mode" class="form-label" >Siapa yang akan melihat  postinganmu?</label>
                    <br>
                    <div class="wrapper">
                        <input type="radio" name="mode" value="Privat" id="privat" checked>
                        <input type="radio" name="mode" value="Umum" id="umum">
                        <label for="privat" class="option privat">
                            <!-- <div class="dot"></div> -->
                            <span>Privat</span>
                        </label>
                        <label for="umum" class="option umum">
                            <!-- <div class="dot"></div> -->
                            <span>Umum</span>
                        </label>
                    </div>
                </div>
                <div class="mb-3 d-flex justify-content-end">
                    <input class="btn btn-primary" type="submit" value="Posting">
                </div>
            </form>
       
            
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                judulEvent: '',

                gambarEvent: '',

                
            }
        }
    },
    mounted(){
        if(localStorage.getItem("role") == "USER"){
            this.$router.push({ name: 'Home', query: { redirect: '/' } });
        }
    },
    methods:{
     
    }
}
</script>

<style scoped>
*{
    color: #0A3D62;
}
.wrapper{
  display: inline-flex;
  background: #fff;
  height: 3rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  /* padding: 20px 15px; */
}
.wrapper .option{
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 10px;
  border: 2px solid lightgrey;
  transition: all 0.3s ease;
}
.wrapper .option .dot{
  height: 20px;
  width: 20px;
  background: #d9d9d9;
  border-radius: 50%;
  position: relative;
}
.wrapper .option .dot::before{
  position: absolute;
  content: "";
  top: 4px;
  left: 4px;
  width: 12px;
  height: 12px;
  background: #0069d9;
  border-radius: 50%;
  opacity: 0;
  transform: scale(1.5);
  transition: all 0.3s ease;
}
input[type="radio"]{
  display: none;
}
#option-1:checked:checked ~ .option-1,
#option-2:checked:checked ~ .option-2,
#option-3:checked:checked ~ .option-3,
#privat:checked:checked ~ .privat,
#umum:checked:checked ~ .umum{
  border-color: #0069d9;
  background: #0069d9;
}
#option-1:checked:checked ~ .option-1 .dot,
#option-2:checked:checked ~ .option-2 .dot,
#option-3:checked:checked ~ .option-3 .dot{
  background: #fff;
}
#option-1:checked:checked ~ .option-1 .dot::before,
#option-2:checked:checked ~ .option-2 .dot::before,
#option-3:checked:checked ~ .option-3 .dot::before{
  opacity: 1;
  transform: scale(1);
}
.wrapper .option span{
  /* font-size: 20px; */
  color: #808080;
}
#option-1:checked:checked ~ .option-1 span,
#option-2:checked:checked ~ .option-2 span,
#option-3:checked:checked ~ .option-3 span,
#privat:checked:checked ~ .privat span,
#umum:checked:checked ~ .umum span
{
  color: #fff;
}
</style>