<template>
    <div>
        <Sidebar/>
        <ListEvent/>
    </div>
</template>

<script>
import Sidebar from '../../components/admin/Sidebar.vue'
import ListEvent from '../../components/admin/ListEvent.vue'
export default {
    components: {
        Sidebar,
        ListEvent
    },
}
</script>