<template>
  <div>
    <Navbar/>
    <Profile/>
  </div>
</template>

<script>
import Navbar from '../../components/after_login/Navbar.vue'
import Profile from '../../components/after_login/Profile.vue'

export default({
  components:{
    Navbar,
    Profile
  }
})
</script>
