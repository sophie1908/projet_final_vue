<template>

    <div :style="{'background-image': 'url(' + require('../assets/ingredient_fond.jpg') + ')'} " class="background_register1" >
    <div class="container">
        <form @submit.prevent="envoie">

        <div class="head">
            <a href="/mylogin"><i class="fas fa-arrow-circle-left"></i></a>
            <div class="section_centrale">
                <h1>Entrez votre E-mail</h1>
        


        <div class="input_mdp">
            <input type="email" name="email" id="email_mdp" placeholder="email..." v-model="email_mdp" >
           
        </div>
      
        <div class="vad">
            <button class="btn-valider_mdp" value="Valider_mdp">Valider</button>
       </div>
        </div>
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
            this.axios.post("http://localhost:3000/user/envoimail",{email: this.email_mdp,})
            .then((res)=>{
                console.log(res)
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
   height: 27%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    position: relative;
    box-shadow: 1px 1px 5px #585757;
}

.fa-arrow-circle-left::before{
    font-size: 33px;
    position: absolute;
    left: 42px;
    top: 37px;
    color: #a9a6a3;
}
.section_centrale{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px;
}
h1{
    font-size: 27px;
    text-align: center;
}

.container .register{
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
input{
    background-color: white !important;
    border: none;
    font-size: 15px;
    width: 260px;
    height: 33px;
    display: flex;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #585757;
    padding: 10px;
    
}
.input_mdp .user input{
    border: none;
    font-size: 17px;
    width: 243px;
    height: 33px;
    margin-left: 8px;
    box-shadow: 1px 1px 5px #585757;
}

.input_mdp{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    
    
}


.btn-valider_mdp:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}
.vad{
    display: flex;
    justify-content: center;
}
</style>
