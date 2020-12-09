<template>
<div>
    
    <div class="header">
   
        <img src="../assets/fond_head1.jpg" alt="fond">

        <p class="user_identite">Bonjour <br>  {{user.prenom}}</p>

    </div>
    <div class="navbar">
    
        <ul class="sous_menu">
            <router-link :to="`/myparametreUser/${user.email}`" @click="activation">
            <li class="li_1">Paramètres <br>foyer</li>
            </router-link>
            <li class="li_2">Informations<br>personelles</li>
            <li class="li_3">Mes recettes <br>favorites</li>
            <li class="li_4">Mes dernières <br>recettes</li>
            <router-link :to="`/`">
            <li class="li_5">Se <br>déconnecter</li>
             </router-link>
        </ul>

        
    </div>
   


        
<div class="section1">
    <p class="hello">
        Vos recettes de cette semaine</p>
        <div class="recette">
            <div v-for="item in filteredItems " :key="item.id" >
                
                 
                
                <div class="single-publication" >
                    <!-- changeColor() :style="{'background-color':color}" -->
                <div class="recetteImage">
                   
                     <img :src="require(`@/assets/${item.image}.png`)" class="img_recette"> 
                    
                </div>

                <div class="nom_recette">
                    {{item.nom}}
                </div>

                <div class="btn_change_recipe">
                    <button class="btn_change">Changer de recette</button>
                </div>
      
            </div>
        </div>
        </div>
<div class="btn">
        <button class="btn_section1">Valider</button>
        
</div>
</div> 
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
      changeColor() {
          if (this.cat_recetteId === 1) {
              this.color === "black"}
              else if (this.cat_recetteId === 2) {
                this.color === "red"}
              else if (this.cat_recetteId === 3) {
                  this.color === "blue"}
                  else
                  {this.color === "white"}              
          }
      
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
.navbar{
    height: 150px;

}

.sous_menu{
    list-style: none;
    display: flex;
    border: none;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
}
li{
    margin: 15px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    height: 80px;
    width: 155px;
    transition: 0.5s;
    
}
li:hover{
    border: black solid 1.5px;
    transition: 0.5s;

}


.li_1{
    background-color: #e098a3;
}

.li_2{
    background-color: #ffbf75;
}

.li_3{
    background-color: #bfb09b;
}

.li_4{
    background-color: #afce88;
}

.li_5{
    background-color: #fe9c9d;
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
    flex-wrap: wrap;
}

.img_recette{
    height: 170px;
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
    margin-bottom: 30px;
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
.btn_change{
    border-radius: 10px;
    padding: 5px;
}








</style>
