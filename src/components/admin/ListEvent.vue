<template>
    <div id="wrapper" class="wrapper-content"> 
        <div id="page-content-wrapper">
            <div class="container">
                <div v-if="isLoading">
                    <img class="mt-5" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="">
                </div>
                <div v-if="listEvent.length > 0 && !isLoading">
                    <div v-for="e in listEvent" :key="e.id" class="mt-3 row custom-card">
                        <!-- <div class=""> -->
                            <div class="col-auto" style="height: 10rem">
                                <img :src="e.gambar" style="height: 100%; text-align: left" alt="">
                            </div>
                            <div class="col-auto" style="text-align: left">
                                <br>
                                <h1>{{ e.judul }}</h1>
                                <span>{{ e.instansi }}</span><br>
                                <router-link :to="{ path: '/join/' + e.eventID }">Lihat Detail</router-link>
                            </div>
                            <div class="col d-flex align-items-center justify-content-end">
                                <button class="btn btn-danger" v-on:click="deleteEvent(e.eventID)" ><i class="far fa-trash-alt"></i> Delete</button>
                            </div>
                        <!-- </div> -->
                    </div>
                </div>
                <div v-else-if="listEvent.length == 0 && !isLoading">
                    <h1 class="mt-3">Belum ada data</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            listEvent: [],
            isLoading: false,
        }
    },
    methods:{
        deleteEvent(id){
            firebase
            .firestore()
            .collection('events')
            .doc(id)
            .delete();

            Swal.fire({
                icon: 'success',
                title: 'Berhasil Hapus Event'
            }) 

            location.reload();
        }
    },
    beforeMount() {
        this.isLoading = true;
        firebase
        .firestore()
        .collection('events')
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.listEvent.push({
                    id: doc.id,
                    eventID: doc.data().eventID,
                    gambar: doc.data().gambarEvent,
                    judul: doc.data().judulEvent,
                    instansi: doc.data().instansi,
                })
                this.isLoading = false;
            })
        })
    },
}
</script>

<style scoped>
a{
    text-decoration: none;

}
    .custom-card{
        border-radius: 15px ;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
</style>