<template>
    <div>
        <myupdateUser :user="user"/>
        <myfooter/>

    </div>
</template>

<script>
import myupdateUser from '../components/updateUser'
import myfooter from '../components/myfooter'


export default {
    name:"updateUser",
    data(){
        return{
            user:{}
        }
    },
    components:{
        myupdateUser,
        myfooter
        
    },
    created: function() {
    this.axios
      .get("http://localhost:3000/user/rec_user/" + this.$route.params.email)
      .then((res) => {
        this.user =  res.data.user
     })
}
}
</script>
<style scoped>

</style>
