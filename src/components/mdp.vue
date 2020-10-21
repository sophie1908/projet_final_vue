<template>

    <div :style="{'background-image': 'url(' + require('../assets/ingredient_fond.jpg') + ')'} " class="background_register1" >
    <div class="container">
        <form @submit.prevent="envoie">
        <div class="head">
        <a href="/mylogin"><i class="fas fa-arrow-circle-left"></i></a>
        <h1>Réinitialiser Mot De Passe</h1>
        </div>
        <div class="input_mdp">

            <i class="fas fa-at user"> <span></span>
            <input type="email" name="email" id="email_mdp" placeholder="Email..." v-model="email_mdp" >
            </i>

        </div>
      <div class="sophieMetUneDiv">
       <button class="btn-valider_mdp" value="Valider_mdp">Valider</button>
       </div>
        </form>
    </div>
    </div>
  
</template>
<script>
export default {
    name: "mdpO",
    data() {
        return {
            email_mdp: ""
        }
},
    methods:{
       envoie () {
            console.log(this.email_mdp);
            this.axios.post("http://localhost:3000/user/envoimail",{email: this.email_mdp})
            .then((res)=>{
                console.log(res)
               /*  this.$router.push("/login") */
                 alert("Vous avez reçu un mail afin de reinitialiser votre mot de passe.")
            })
            .catch(err =>{ alert("sa ne passe pas "); console.log(err)} );

            

        },
    }
}
</script>
<style scoped>

.background_register1{
    height: 1000px;
    background-repeat: no-repeat ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container{
    background-color: #f1f1f1;
    width: 41%;
    height: 62%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    position: relative;
}

.fa-arrow-circle-left::before{
font-size: 45px;
position: absolute;
    left: 60px;
    top: 58px;
    color: #a9a6a3;
}
h1{
    font-size: 60px;
    text-decoration: underline #b0d18a;
    text-align: center;
    padding-bottom: 50px;
}


.container .register{
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.input_mdp .user{
    background-color: white;
    width: 395px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #b0d18a;
    border-radius: 5px;
    margin: 20px;
}
.input_mdp .user input{
    border: none;
    font-size: 17px;
    width: 243px;
    height: 33px;
    margin-left: 8px;
}

.i{
    margin: 10px;
    height: 15px;
    
}

.input_mdp{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.fa-lock:before{
font-size: 21px;
 color: #ff9d9e;
}



.fa-at:before{
font-size: 21px;
 color: #ff9d9e
}

.mdp_forget{
    position: absolute;
    top: 464px;
    right: 60px;
}

.btn-valider_mdp {
    border: 0;
    height: 43px;
    width: 135px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 22px;
    background-color: #ff9d9e;
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6), inset -2px -2px 3px rgba(0, 0, 0, .6);
    position: relative;
    bottom: -32px;
}


.btn-valider_mdp:hover {
    background-color: rgba(255, 0, 0, 1);
}

.btn-valider_mdp:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}
.sophieMetUneDiv{
    display: flex;
    justify-content: center;
}
</style>
