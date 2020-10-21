<template>
    <div>
        <mylogin/>
    </div>
</template>

<script>
import mylogin from '../components/login'

export default {
    name:"login",
    data(){
        return{
            login:{}
        }
    },
    components:{
        mylogin
        
    }
}
</script>
<style scoped>

</style>

