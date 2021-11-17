<template>
    <div>
        <Navbar/>
        <Analitik/>
    </div>
</template>

<script>
import Navbar from '../../components/after_login/Navbar.vue'
import Analitik from '../../components/after_login/Analitik.vue'
export default {
    components:{
        Navbar,
        Analitik    
    },
}
</script>