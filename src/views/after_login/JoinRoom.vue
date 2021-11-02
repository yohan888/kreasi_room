<template>
    <div>
      <Navbar/>
        <JoinRoom/>
    </div>
</template>

<script>
import JoinRoom from '../../components/after_login/JoinRoom.vue'
import Navbar from '../../components/after_login/Navbar.vue'
export default({
  components:{
    JoinRoom,
    Navbar,
  }
})
</script>
