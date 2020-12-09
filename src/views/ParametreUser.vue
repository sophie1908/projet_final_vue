<template>
    <div>
        <myparametreUser :materiel="materiel" :user="user" />
        <myfooter/>
    </div>
</template>

<script>
import myparametreUser from '../components/parametreUser'
import myfooter from '../components/myfooter'

export default {
    name:"",
    data(){
        return{
            user: "",
            materiel:""
        }
    },
    components:{

        myparametreUser,
        myfooter
        
    },
    created: function() {
    this.axios
      .get("http://localhost:3000/user/rec_user/" + this.$route.params.email)
      .then((res) => {
        this.user =  res.data.user,
        
        this.axios
        .get("http://localhost:3000/materiel/rec_materiel/")
        .then((res) =>{
             console.log(res.data);
            this.materiel = res.data.materiel;
    })
      })
}
}
</script>
<style scoped>

</style>