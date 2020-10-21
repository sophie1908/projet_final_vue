<template>

    <div :style="{'background-image': 'url(' + require('../assets/ingredient_fond.jpg') + ')'} " class="background_register1" >
    <div class="container">
        <div class="head">
        <a href="/myaccueil"><i class="fas fa-arrow-circle-left"></i></a>
        <h1>Nouveau <br>mot de passe</h1>
        </div>
        <div class="input_login">

            <i class="fas fa-lock user"> <span></span>
            <input type="password" name="password" id="password_register" placeholder="Password..." v-model="password_login" >
            </i>

            <i class="fas fa-lock user"> <span></span>
            <input type="password" name="confirm" id="confirm_register" placeholder="Confirmation password" v-model="confirm_register" >
            </i>

            
        </div>

       <button @click="connection" class="btn-valider"
            value="Valider">Valider</button>
    </div>
    </div>
  
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            email_login: "",
            password_login: ""
            
        }
},
    components:{},
    methods:{
        connection: function () {
            this.axios.post("http://localhost:3000/user/login",{
                email:this.email_login,
                password:this.password_login
            })
            .then(res =>{

                console.log(res);
                alert("ok");
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
.input_login .user{
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
.input_login .user input{
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

.input_login{
    display: flex;
    flex-direction: column;
    height: 34%;
    justify-content: space-between;
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
    position: relative;
    bottom: -32px;
}


.btn-valider:hover {
    background-color: rgba(255, 0, 0, 1);
}

.btn-valider:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}
</style>
