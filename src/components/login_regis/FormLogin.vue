<template>
    <div style="text-align:left">
        <h1 style="font-weight: bold">Hai, Selamat Datang Kembali!</h1>
        <p style="color: gray">Belum mempunyai akun? <router-link to="/daftar" style="color: #0A3D62">Daftar sekarang!</router-link></p>
        <router-link to="/" class="btn btn-primary mt-4">
            <i class="fab fa-google"></i>&emsp;
            Masuk dengan Google
        </router-link>
        <div class="justify-content-center align-items-center d-flex mt-4 mb-3">
            <span style="width: 100%"><hr style="border: 1px solid gray;"></span>
            &ensp;
            <span style="font-size: 9pt; color: gray">Atau</span>
            &ensp;
            <span style="width: 100%"><hr style="border: 1px solid gray;"></span>
        </div>
        <form style="">
            <label for="email" class="mb-2">Alamat Email</label>
            <div class="input-container">
                
                <i class="fas fa-envelope icon"></i>
                <input class="input-field" id="email" type="text" placeholder="Email" name="email">
            </div>
            <label for="password" class="mt-2 mb-2">Kata Sandi</label>
            <div class="input-container">
                <i class="fas fa-lock icon"></i>
                <input class="password-field" id="password" type="password" placeholder="Password" name="psw">
                <label class="custom-checkbox show-password">
                    <input type="checkbox" v-on:click="showPassword" style="display: none">
                    <i class="fas fa-eye-slash unchecked"></i>
                    <i class="fas fa-eye checked "></i>
                </label>
            </div>

            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label style="font-size: 9pt; color: gray" class="form-check-label" for="exampleCheck1">
                    Saya menyetujui 
                    <button type="button" class="syarat_ketentuan" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        syarat
                    </button> 
                    dan 
                    <button type="button" class="syarat_ketentuan" data-bs-toggle="modal" data-bs-target="#ketentuanModal">
                        ketentuan
                    </button>
                </label>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Syarat</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum alias dolorem expedita rerum ad ipsa amet mollitia saepe animi, unde quis maiores aperiam autem. Eligendi magnam rerum suscipit deleniti reprehenderit!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="ketentuanModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ketentuan</h5>
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

            </div>
            <button type="submit" class="btn mt-4">Register</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        showPassword(){
            var x = document.getElementById("password");
            if(x.type === "password"){
                x.type = "text";
            }else{
                x.type = "password";
            }
        }
    },
}
</script>

<style scoped>
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