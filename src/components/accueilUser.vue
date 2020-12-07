<template>
<div>
    
    <div class="header">
   
        <img src="../assets/fond_head1.jpg" alt="fond">

        <p class="user_identite">Bonjour <br>  {{user.prenom}}</p>

    </div>
<div class="navbar">
    <div class="user_profil">

        <a href="/mylogin"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg></a>

        <ul class="sous_menu">
            <li class="li_1">Paramètres <br>foyer</li>
            <li class="li_2">Informations<br>personelles</li>
            <li class="li_3">Mes recettes <br>favorites</li>
            <li class="li_4">Mes dernières <br>recettes</li>
            <li class="li_5">Se <br>déconnecter</li>
        </ul>

        </div>
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
a{
    width: 66px;
    height: 68px;
    border-radius: 34px;
    display: flex;
    border-radius: 50%;
    background: linear-gradient(145deg, #f7fefe, #d0d5d5);
    box-shadow: 6px 6px 9px #9fa4a4, -6px -6px 9px #ffffff;
}

.bi-person{
    position: absolute;
    left: 15px;
    color: black;
    top: 15px;
}
.user_profil{
    position:absolute;
    height: 70px;
    width: 70px;
    font-size: 20px;
    right: 50px;
    top: 30px
}
.user_profil .sous_menu{
    opacity: 0;
    transition: ease-out 1.5s;
    list-style: none;
    display: flex;
    border: none;
    justify-content: space-between;
    width: 1300px;
    transform: translateX(-1300px) translateY(-1000px);
}
.user_profil:hover .sous_menu{
    opacity: 100;
    transition: ease-out 1.5s;
    list-style: none;
    display: flex;
    border: none;
    justify-content: space-between;
    width: 1300px;
    transform: translateX(-1300px) translateY(-80px);
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
     box-shadow: 2px 2px 5px #c3848e, 
             -2px -2px 5px #fdacb8;
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
