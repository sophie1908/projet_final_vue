<template>
    <div>
        <myadminRecette :ingredients="ingredient"/>
    </div>
</template>

<script>
import myadminRecette from '../components/adminRecette'

export default {
    name:"adminRecette",
    components:{
        myadminRecette
        
    },
    data(){
        return{
            adminRecette:{},
            ingredient:{}
        };
    },
    created: function(){
        this.axios
        .get("http://localhost:3000/ingredient/rec_ingredient")
        .then((res) =>{
            this.ingredients = res.data.ingredient;
        });
    },
}
</script>
<style scoped>

</style>

