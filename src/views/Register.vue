<template>
    <div>
        <Sidebar/>
        <FormRegister/>
    </div>
</template>

<script>
import FormRegister from '../components/login_regis/FormRegister.vue'
import Sidebar from '../components/login_regis/Sidebar.vue'
export default {
    components:{
        FormRegister,
        Sidebar,
    }
}
</script>