<template>
    <div>
        <Sidebar/>
        <ListUser/>
    </div>
</template>

<script>
import Sidebar from '../../components/admin/Sidebar.vue'
import ListUser from '../../components/admin/ListUser.vue'
export default {
    components: {
        Sidebar,
        ListUser
    },
}
</script>