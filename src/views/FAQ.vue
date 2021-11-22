<template>
  <div>
    <Navbar/>
    <FAQ/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Navbar from '../components/home/NavbarGuest.vue'
import FAQ from '../components/home/FAQ.vue'

// import Footer from '../components/Footer.vue'
export default({
  components:{
    Navbar,
    FAQ,
    // Footer
  }
})
</script>
