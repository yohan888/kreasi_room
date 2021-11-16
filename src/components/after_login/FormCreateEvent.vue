<template>
    <div class="container mt-5">
        <div class="d-flex align-items-start flex-column">
            <h4><b>Informasi Dasar</b></h4>
            <p>Beri informasi dasar mengenai acara yang akan kalian buat!</p>
        </div>
        <div>
            <img class="poster" v-if="previewPicture" :src="previewPicture">
            <img v-else :src="form.gambarEvent" class="poster" >
            <form @submit.prevent="createEvent" style="text-align: left">
                <div class="mb-3">
                    <label for="poster" class="form-label" >Poster Event</label>
                    <input class="form-control" type="file" accept=".jpg, .png" name="poster" id="poster" @change="onFileChange" required>
                </div>
                <div class="mb-3">
                    <label for="judulEvent" class="form-label">Judul Event</label>
                    <input type="text" class="form-control" id="judulEvent" v-model="form.judulEvent" required>
                </div>
                <div class="mb-3">
                    <label for="videoEvent" class="form-label">Video Event</label>
                    <input type="text" class="form-control" id="videoEvent" v-model="form.videoEvent" required>
                </div>
                <div class="row mb-3">
                    <div class="col">
                        <label for="penyelenggara" class="form-label">Instansi</label>
                        <input type="text" class="form-control" id="penyelenggara" v-model="form.instansi" required>
                    </div>
                    <div class="col">
                       <label for="tipe" class="form-label">Topik</label>
                        <select name="tipe" id="tipe" class="form-select" v-model="form.topik">
                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Ekonomi">Ekonomi</option>
                            <option value="Hukum">Hukum</option>
                            <option value="Machine Learning">Machine Learning</option>
                            <option value="Programing">Programing</option>
                            <option value="Psikologi">Psikologi</option>
                            <option value="Science">Science</option>
                            <option value="Sejarah">Sejarah</option>
                            <option value="Teknologi">Teknologi</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="lokasi" class="form-label">Lokasi Event</label>
                    <div class="wrapper">
                        <input type="radio" name="lokasi" v-model="form.lokasi" value="Luring" id="option-1" checked>
                        <input type="radio" name="lokasi" v-model="form.lokasi" value="Daring" id="option-2">
                        <input type="radio" name="lokasi" v-model="form.lokasi" value="Next" id="option-3">
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
                            <input type="datetime-local" v-model="form.mulai" class="form-control" name="mulaiEvent" id="mulaiEvent" aria-describedby="mulaiEvent" required>
                            <div id="mulaiEvent" class="form-text">Gunakan Google Chrome untuk pengalaman yang lebih baik.</div>
                        </div>
                        <div class="col">
                            <label for="selesaiEvent" class="form-label" >Tanggal dan Waktu Selesai</label>
                            <input type="datetime-local" v-model="form.selesai" class="form-control" name="selesaiEvent" id="selesaiEvent" aria-describedby="selesaiEvent" required>
                            <div id="selesaiEvent" class="form-text">Gunakan Google Chrome untuk pengalaman yang lebih baik.</div>
                        </div>
                    </div>
                </div>
                
                <div class="mb-3">
                    <label for="deskripsi" class="form-label" >Deskripsi Event</label>
                    <textarea class="form-control" v-model="form.deskripsi" type="text" name="deskripsi" id="deskripsi" required></textarea>
                </div>
                <div class="mb-3">
                    <label for="mode" class="form-label" >Siapa yang akan melihat  postinganmu?</label>
                    <br>
                    <div class="wrapper">
                        <input type="radio" v-model="form.mode" name="mode" value="Privat" id="privat" >
                        <input type="radio" v-model="form.mode" name="mode" value="Umum" id="umum" checked>
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
                    <input class="btn btn-primary btn-kirim" type="submit" value="Posting">
                    <button class="btn btn-primary btn-loading d-none" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                    </button>
                </div>
            </form>
       
            
        </div>

    </div>
</template>

<script>
import Swal from 'sweetalert2'
import firebase from 'firebase'
export default {
    data(){
        return{
            newImage: '',
            previewPicture: '',
            form:{
                eventID: '',
                judulEvent: '',
                videoEvent: '',
                idPenyelenggara: '',
                penyelenggara: '',
                topik: '',
                lokasi: '',
                mulai: '',
                selesai: '',
                gambarEvent: '',
                deskripsi: '',
                mode: '',
                instansi: '',
            }
        }
    },
    mounted(){
        if(localStorage.getItem("role") == "USER"){
            this.$router.push({ name: 'Home', query: { redirect: '/' } });
        }  
        this.form.penyelenggara = localStorage.getItem("namaLengkap");
        this.form.idPenyelenggara = localStorage.getItem("userID");
    },
    methods:{
        onFileChange(e){
            this.newImage = e.target.files[0];
            this.previewPicture = URL.createObjectURL(this.newImage);
        },
        createEvent(){
            const btnKirim = document.querySelector(".btn-kirim");
            const btnLoding = document.querySelector(".btn-loading"); 
            btnLoding.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");

            var videoID = '';
            if(this.form.videoEvent.includes('https://www.youtube.com/watch?v=')){
                videoID = this.form.videoEvent.replace('https://www.youtube.com/watch?v=', '');
            }else if(this.form.videoEvent.includes('https://youtu.be/')){
                videoID = this.form.videoEvent.replace('https://youtu.be/', '');
            }

            firebase
            .firestore()
            .collection("events")
            .add({
                eventID: this.form.eventID,
                userID: localStorage.getItem('userID'),
                judulEvent: this.form.judulEvent,
                videoEvent: videoID,
                penyelenggara: this.form.idPenyelenggara,
                topik: this.form.topik,
                lokasi: this.form.lokasi,
                mulai: this.form.mulai,
                selesai: this.form.selesai,
                gambarEvent: this.form.gambarEvent,
                deskripsi: this.form.deskripsi,
                mode: this.form.mode,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                instansi: this.form.instansi
            })
            .then((docRef) => {
                if(this.newImage !== null){
                    const storageRef =
                    firebase
                    .storage()
                    .ref(docRef.id)
                    .put(this.newImage);
                
                    storageRef.on(
                        'state_changed', snapshot=>{ 
                            this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100; 
                        }, error=>{
                            console.log("Error di : " + error.message)
                        }, ()=>{
                            storageRef.snapshot.ref.getDownloadURL()
                            .then((url)=>{
                                firebase
                                .firestore()
                                .collection('events')
                                .doc(docRef.id)
                                .update({
                                    eventID: docRef.id,
                                    gambarEvent: url,
                                })
                                
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Berhasil Buat Event'
                                })  
                                btnLoding.classList.toggle("d-none");
                                btnKirim.classList.toggle("d-none");
                                this.$router.push({ name: 'Dashboard', query: { redirect: '/dashboard' } });
                            });
                        }
                    );
                } 
            });
            
            
        }
    }
}
</script>

<style scoped>
*{
    color: #0A3D62;
}
.poster{
    width: 500px;
    height: auto;
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