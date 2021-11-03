<template>
  <div>
    <Navbar/>
    <EditProfile/>
  </div>
</template>

<script>
import Navbar from '../../components/after_login/Navbar.vue'
import EditProfile from '../../components/after_login/EditProfile.vue'

export default({
  components:{
    Navbar,
    EditProfile
  }
})
</script>
