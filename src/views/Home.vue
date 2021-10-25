<template>
  <div>
    <Navbar/>
    <Jumbotron/>
    <Populer/>
    <Tentang/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/home/NavbarGuest.vue'
import Jumbotron from '../components/home/Jumbotron.vue'
import Populer from '../components/home/Populer.vue'
import Tentang from '../components/home/Tentang.vue'
import Footer from '../components/Footer.vue'
export default({
  components:{
    Navbar,
    Jumbotron,
    Populer,
    Tentang,
    Footer
  }
})
</script>
