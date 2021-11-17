<template>
    <div class="container">
        <div v-if="eventDibuat.length > 0">
            <div v-for="e in eventDibuat" :key="e.eventID" class="mt-3 row custom-card">
                <!-- <div class=""> -->
                    <div class="col-auto" style="height: 10rem">
                        <img :src="e.poster" style="height: 100%; text-align: left" alt="">
                    </div>
                    <div class="col-auto" style="text-align: left">
                        <br>
                        <h1>{{ e.judul }}</h1>
                        <span><i class="far fa-file-alt"></i> Terdaftar {{ e.jumlahDaftar }}</span>&ensp;
                        <span><i class="far fa-eye"></i> Dilihat {{ e.jumlahView }}</span>&ensp;
                        <span><i class="far fa-thumbs-up"></i> Dilike {{ e.jumlahLike }}</span><br>
                        <router-link :to="{ path: '/detail/' + e.eventID }">Lihat Detail</router-link>
                    </div>
                    <div class="col d-flex align-items-center justify-content-end">
                        <button class="btn btn-danger" v-on:click="deleteEvent(e.eventID)" ><i class="far fa-trash-alt"></i> Delete</button>
                    </div>
                <!-- </div> -->
            </div>
        </div>
        <div v-else>
            <h1 class="mt-3">Belum ada data</h1>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            eventDibuat: [],
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
    beforeMount(){
        firebase
        .firestore()
        .collection('events')
        .where('penyelenggara', '==', localStorage.getItem('userID'))
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this.eventDibuat.push({
                    eventID: doc.data().eventID,
                    poster: doc.data().gambarEvent,
                    judul: doc.data().judulEvent,
                    jumlahDaftar: doc.data().jumlahDaftar,
                    jumlahLike: doc.data().jumlahLike,
                    jumlahView: doc.data().jumlahView
                })
            })
        })
    }
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