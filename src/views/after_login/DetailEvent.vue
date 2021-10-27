<template>
  <div>
    <Navbar/>
    <DetailEvent/>
  </div>
</template>

<script>
import Navbar from '../../components/after_login/Navbar.vue'
import DetailEvent from '../../components/after_login/DetailEvent.vue'

export default({
  components:{
    Navbar,
    DetailEvent
  }
})
</script>
