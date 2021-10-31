<template>
    <div>
      <Navbar/>
        <Dashboard/>
    </div>
</template>

<script>
import Dashboard from '../../components/after_login/Dashboard.vue'
import Navbar from '../../components/after_login/Navbar.vue'
export default({
  components:{
    Dashboard,
    Navbar,
  }
})
</script>
