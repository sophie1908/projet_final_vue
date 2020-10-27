<template>
    <div>
        <myadminRecette/>
    </div>
</template>

<script>
import myadminRecette from '../components/adminRecette'

export default {
    name:"adminRecette",
    data(){
        return{
            adminRecette:{}
        }
    },
    components:{
        myadminRecette
        
    }
}
</script>
<style scoped>

</style>

