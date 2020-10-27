<template>

    <div :style="{'background-image': 'url(' + require('../assets/ingredient_fond.jpg') + ')'} " class="background_register1" >
    <div class="container">
        <div class="head">
        <a href="/"><i class="fas fa-arrow-circle-left"></i></a>
        </div>
        <div class="section_centrale">
        <h1>Nouveau <br>mot de passe</h1>
        
        <div class="input_login">

            
            <input type="password" name="password" id="password_register" placeholder="Password..." v-model="password_update" >
           

            
            <input type="password" name="confirm" id="confirm_register" placeholder="Confirmation password" v-model="confirm_password_update" >
            

            
        </div>

       <button @click="change" class="btn-valider"
            value="Valider">Valider</button>
        </div>
    </div>
    </div>
  
</template>
<script>
export default {
    name: "reinitialiser",
    data() {
        return {
            password_update: "",
            confirm_password: "",
              
        }
},
    components:{},
    methods:{
        change: function () {
            this.axios.post("http://localhost:3000/user/updatepassword",{
                password:this.password_update,
               confirm_password :this.confirm_password_update,
                forget: this.$route.params.token
            })
            .then(res =>{

                console.log(res);
                alert("Mot de passe changé");
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
                    this.$router.push({name: 'register2'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "register", params: {msg: "non connecté"} })
                }
            })
            .catch(err => {
                console.log(err);
            })


        }
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
    height: 242px;
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
.input_login{
    display: flex;
    flex-direction: column;
    height: 34%;
    justify-content: space-between;
}

.mdp_forget{
    position: absolute;
    top: 464px;
    right: 60px;
}

.btn-valider {
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

.btn-valider:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}
</style>
