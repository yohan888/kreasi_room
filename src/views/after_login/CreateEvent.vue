<template>
    <div>
      <Navbar/>
        <FormCreateEvent/>
    </div>
</template>

<script>
import FormCreateEvent from '../../components/after_login/FormCreateEvent.vue'
import Navbar from '../../components/after_login/Navbar.vue'
export default({
  components:{
    FormCreateEvent,
    Navbar,
  }
})
</script>
