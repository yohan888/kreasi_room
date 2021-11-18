<template>
    <div>
        <Sidebar/>
        <DashboardAdmin/>
    </div>
</template>

<script>
import Sidebar from '../../components/admin/Sidebar.vue'
import DashboardAdmin from '../../components/admin/DashboardAdmin.vue'
export default {
    components: {
        Sidebar,
        DashboardAdmin
    }
}
</script>