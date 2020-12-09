<template>
<div>
    <div class="header">
        <img src="../assets/fond_head1.jpg" alt="fond">
        <div class="parametre">Vos paramètres</div>
    </div>

    <div class="navbar">

        <ul class="sous_menu">

             <router-link :to="`/myaccueilUser/${user.email}`">
            <li class="li_1">Mes recettes <br>de la semaine</li>
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
             <p class="user_params">Nom : {{user.nom}}</p>
             <p class="user_params">Prénom : {{user.prenom}}</p>
             <p class="user_params">Adresse : {{user.adresse}}</p>
             <p class="user_params">Complément d'adresse : {{user.complement_adresse}}</p>
             <p class="user_params">Code postal : {{user.cp}}</p>
             <p class="user_params">Ville : {{user.ville}}</p>
             <p class="user_params">Email : {{user.email}}</p>
             <p class="user_params">Date de naissance : {{user.date_de_naissance}}</p>
             <button @click="update" class="btn_modifier">Modifier</button>
        </div>
       

</div>
</template>

<script>
export default {
  props: ["user", "materiel"],
  data() {
     
    return {
      email: this.$route.params.email,
      
    };
  },
  components: {},
  methods: {
     update: function(){
         this.$router.push({name:"updateUser", params: this.email})
     }
      
},
computed: {
   
  }

}
</script>


<style scoped>

.parametre{
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
    color: black;
    text-decoration: none !important;
    
}
li:hover{
    border: black solid 1.5px;
    transition: 0.5s;
     text-decoration: none !important;


}
li:link{
    text-decoration: none !important;
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
    background-color: #ffffff;
    flex-wrap: wrap;
    
}
.user_params{
    border-radius: 10px;
    border: 2px solid black;
    margin: 15px;
    padding: 15px;
    width: 330px;
}
.btn_modifier{
    background-color: #accc87;
    border: none;
    height: 59px;
    width: 151px;
    font-size: 24px;
    align-items: center;
    outline: none;
    border-radius: 29px;
    background: #accc87;
    box-shadow: 9px 8px 16px #596a46, -9px -8px 16px #ffffc8;
        transform: translate(279px, 35px);
    
}

</style>