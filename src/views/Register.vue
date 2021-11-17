<template>
    <div class="bg">
        <center>
            <div class="hero" style="border-radius: 15px;">
                <div class="row" >
                    <div class="col-md" style="padding: 50px; background-color: #0A3D62E5;">
                        <Sidebar/>
                    </div>
                    <div class="col-md" style="padding: 50px">
                        <FormRegister/>
                    </div>
                </div>
            </div>
        </center>
    </div>
</template>

<script>
import FormRegister from '../components/login_regis/FormRegister.vue'
import Sidebar from '../components/login_regis/Sidebar.vue'
export default {
    components:{
        Sidebar,
        FormRegister
    }
}
</script>

<style scoped>
    
    .hero{
        margin-top: 1.5rem;
                width: 80vw;
                background-image: linear-gradient(rgba(255,255,255), rgba(255,255,255)), 
                    url();
                background-position: top ;
                background-size: cover;
                overflow-x: hidden;
                position: relative;
            }

            .bg{
                background-image: linear-gradient(rgba(255,255,255), rgba(255,255,255)), url();
                background-size: cover;
                height: 90vh;
            }
</style>