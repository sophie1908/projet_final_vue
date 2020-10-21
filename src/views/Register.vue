<template>
    <div>
        <myregister/>
    </div>
</template>

<script>
import myregister from '../components/register'

export default {
    name:"register",
    data(){
        return{
            register:{}
        }
    },
    components:{
        myregister
        
    }
}
</script>
<style scoped>

</style>

