<template>
    <div>
        <nouveaute/>
    </div>
</template>

<script>
import nouveaute from '../components/mesRecette/nouveaute'

export default {
    name:"mesRecette",
    data(){
        return{
            mesRecette:{}
        }
    },
    components:{
        nouveaute,
        
    }
}
</script>
<style scoped>

</style>

