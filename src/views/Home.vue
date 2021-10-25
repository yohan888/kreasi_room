<template>
  <div>
    <Navbar/>
    <Jumbotron/>
    <EventTerbaru/>
    <Tentang/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/home/NavbarGuest.vue'
import Jumbotron from '../components/home/Jumbotron.vue'
import EventTerbaru from '../components/home/EventTerbaru.vue'
import Tentang from '../components/home/Tentang.vue'
import Footer from '../components/Footer.vue'
export default({
  components:{
    Navbar,
    Jumbotron,
    EventTerbaru,
    Tentang,
    Footer
  }
})
</script>
