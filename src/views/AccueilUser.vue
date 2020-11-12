<template>
    <div>
        <myaccueilUser :recette="recette"  :user="user" />
    </div>
</template>

<script>
import myaccueilUser from '../components/accueilUser'

export default {
    name:"",
    data(){
        return{
            user: "",
            recette:"",
        }
    },
    components:{

        myaccueilUser
        
    },
    created: function() {
    this.axios
      .get("http://localhost:3000/user/rec_user/" + this.$route.params.email)
      .then((res) => {
        this.user = res.data.user,
        
    this.axios
        .get("http://localhost:3000/recette/all_recette/")
        .then((res) =>{
             console.log(res.data.recette.images);
            this.recette = res.data.recette;
    })
      });
}
}
</script>
<style scoped>

</style>

