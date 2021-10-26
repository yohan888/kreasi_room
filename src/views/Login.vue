<template>
    <div class="bg">
        <center>
            <div class="hero" style="border-radius: 15px;">
                <div class="row" >
                    <div class="col-md" style="padding: 50px; background-color: #0A3D62E5;">
                        <Sidebar/>
                    </div>
                    <div class="col-md" style="padding: 50px">
                        <FormLogin/>
                    </div>
                </div>
            </div>
        </center>
    </div>
</template>

<script>
import FormLogin from '../components/login_regis/FormLogin.vue'
import Sidebar from '../components/login_regis/Sidebar.vue'
export default {
    components:{
        FormLogin,
        Sidebar
    }
}
</script>

<style scoped>
    
    .hero{
        margin-top: 10vh;
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