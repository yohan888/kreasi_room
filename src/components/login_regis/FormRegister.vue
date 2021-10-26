<template>
    <div style="text-align:left">
        <p style="color: gray; text-align:right">Sudah punya akun? <router-link to="/masuk">Masuk</router-link></p>
        <h1 style="font-weight: bold">Hai, Selamat Datang!</h1>
        <p style="color: gray">Silahkan buat akun Anda!</p>
        
        <form class="scroll" @submit.prevent="register">
            <div class="row">
                <div class="col">
                    <div class="mb-4 form-group">
                        <label for="namaDepan" class="form-label">Nama Depan</label>
                        <input type="text" class="form-control" id="namaDepan" required>
                        <!-- <div class="invalid-feedback"></div> -->
                    </div>
                    <div class="mb-4">
                        <label for="jenisKelamin" class="form-label">Jenis Kelamin</label>
                        <select id="jenisKelamin" class="form-select">
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="provinsi" class="form-label">Provinsi</label>
                        <select id="provinsi" class="form-select" v-model="idProvinsi" @change="getKota">
                            
                            <option v-for="p in provinsi" :key="p.id" :value="p.id" >{{ p.nama }}</option>      
                            
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required>
                    </div>
                    <div class="mb-4">
                        <label for="phone" class="form-label">Nomor Telepon</label>
                        <input type="text" class="form-control" id="phone" required>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-4">
                        <label for="namaBelakang" class="form-label">Nama Belakang</label>
                        <input type="text" class="form-control" id="namaBelakang" required>
                    </div>
                    <div class="mb-4">
                        <label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
                        <input type="date" class="form-control" id="tanggalLahir" required>      
                    </div>
                    <div class="mb-4">
                        <label for="kota" class="form-label">Kota</label>
                        <select id="kota" class="form-select">
                            <option v-for="k in kota" :key="k.id" :value="k.id" >{{ k.nama }}</option>      
                        </select>
                    </div>
                    <div class="mb-4">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" required>
                    </div>
                    <div class="mb-4">
                        <label for="confirmPassword" class="form-label">Ulangi Password</label>
                        <input type="password" class="form-control" id="confirmPassword" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <router-link to="/"><button class="btn mt-4" style="background-color: transparent; color: #0A3D62; border: 1px solid #0A3D62">Kembali</button></router-link>
                </div>
                <div class="col">
                    <button type="submit" class="btn mt-4">Daftar</button>
                </div>
            </div>
        </form>
        
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            idProvinsi: '',
            provinsi: [],
            kota: [],
            password: '',
            confirmPassword: '',
        }
    },
    
    methods: {
        showPassword(){
            var x = document.getElementById("password");
            if(x.type === "password"){
                x.type = "text";
            }else{
                x.type = "password";
            }
        },

        register(){
            
        },

        setProvinsi(provinsi){
            this.provinsi = provinsi;
        },
        setKota(kota){
            this.kota = kota;
        },
        getKota(){
            axios
            .get('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=' + this.idProvinsi)
            .then((response) => this.setKota(response.data.kota_kabupaten))
            .catch((error) => console.log(error));
        }
        
    },
    mounted(){
        axios
        .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
        .then((response) => this.setProvinsi(response.data.provinsi))
        .catch((error) => console.log(error));

        
    },
}
</script>

<style scoped>
.scroll {
                margin:4px, 4px;
                padding:4px;
                /* background-color: green; */
                /* width: 500px;
                height: 110px; */
                overflow-x: hidden;
                overflow-y: auto;
                text-align:justify;
            }
    .syarat_ketentuan{
        background-color: transparent;
        border: none;
        padding: 0;
        color: #0A3D62;
    }
    .custom-checkbox .checked{
        display: none;
    }
    .custom-checkbox input[type="checkbox"]:checked~.checked {
        display: inline-block;
    }

    .custom-checkbox input[type="checkbox"]:checked~.unchecked {
        display: none;
    }
    .input-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}
.show-password{
    /* display: none; */
    border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: transparent;
  border-left: none;
  border-top: 2px solid #0A3D62;
  border-right: 2px solid #0A3D62;
  border-bottom: 2px solid #0A3D62;
  color: #0A3D62;
  padding: 15px;
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

.password-field {
  width: 100%;
  padding: 10px;
  border: 2px solid #0A3D62;
  border-right: 0px;
}
.input-field:focus {
  border: 2px solid #0A3D62;
}

/* Set a style for the submit button */
.btn {
  background-color: #0A3D62;
  color: white;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 15px;
}

.btn:hover {
  opacity: 1;
}
</style>