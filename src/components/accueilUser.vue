<template>
<div>
    
    <div class="header">
   
        <img src="../assets/fond_head1.jpg" alt="fond">

        <p class="user_identite">Bonjour <br>  {{user.prenom}}</p>

    </div>

   


        <b-nav-item-dropdown right>
          <template #button-content >
            <em style=" color: white;
                        font-size: 30px;
                        font-style: normal;
                        border: 3px white solid;
                        border-radius: 10px;
                        padding: 10px;
                        ">
            {{user.prenom}}
            </em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
     
<div class="section1">
    <p class="hello">
        Vos recettes de cette semaine</p>
        <div class="recette">
            <div v-for="item in filteredItems " :key="item.id">
                 
                
                <div class="single-publication">
                    
                <div class="recette image">
                   
                     <img :src="require(`@/assets/${item.image}.jpg`)"> 
                    
                </div>

                <div class="nom_recette">
                    {{item.nom}}
                </div>
      
            </div>
        </div>
        </div>
<div class="btn">
        <button class="btn_section1">Valider</button>
        <button class="btn_section1">Modifier</button>
</div>
</div>
   

    
    <footer>
        <p class="copy">@Copyright by Sophie Boitelle</p>
        <div class="reseaux">
            <img src="../assets/Image instagram.png" alt="fond" class="res">
            <img src="../assets/Image youtube (1).png" alt="fond" class="res">
            <img src="../assets/Image snapchat.png" alt="fond" class="res">
            <img src="../assets/Image facebook.png" alt="fond" class="res">

        </div>
            
    </footer>

    
    
</div>
   
</template>

<script>
export default {
    props: ["user","recette"],
  data() {
     
    return {
      email: this.$route.params.email,
      
    };
  },
  components: {},
  methods: {
      
},
computed: {
   filteredItems: function () {
     return this.recette.slice(0, this.user.repas)
     }
  }

}
</script>


<style scoped>

.user_identite{
    z-index: 999;
    font-size: 43px;
    text-align: center;
    
}


.header{
    height: 391px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header img{
    position: absolute;
        width: 100%;
}
.section1{
    height: 80%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    border: 2px solid black;
}
.recette{
    display: flex;
    justify-content: space-around;
}
.section1 p{
    text-align: center;
    font-size: 30px;
    padding: 30px;
}
.single-publication{
    width: 200px;
    height: 290px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 15px;
        text-align: center;
}
.btn{
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.btn_section1{
    width: 10%;
    margin: 0 auto;
    font-size: 24px;   
    border-radius: 9px;
    background: #ffffff;
   

}




footer{
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    padding: 20px;
    margin-top: 50px;
}

.copy{
    color: white;
}

.reseaux{
    display: flex;
    justify-content: space-around;
        width: 250px;
}

.res{
    height: 40px;
}




</style>
