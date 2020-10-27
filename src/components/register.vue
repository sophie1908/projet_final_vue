<template>
    <div :style="{'background-image': 'url(' + require('../assets/ingredient_fond.jpg') + ')'} " class="background_register1" >
    <div class="container">
        <div class="head">
        <a class="a" href="/"><i class="fas fa-arrow-circle-left"></i></a>
        <h1>Créé votre compte</h1>
        </div>
        <div class="register">
            
            <input type="text" name="nom" id="nom_register" placeholder="Nom..." v-model="nom_register" required >
          

            
            <input type="text" name="prenom" id="prenom_register" placeholder="Prénom..." v-model="prenom_register" required >
            

            
            <input type="text" name="adresse" id="adresse_register" placeholder="Adresse..." v-model="adresse_register" >
            

            
            <input type="text" name="comp" id="comp_register" placeholder="Complément d'adresse..." v-model="comp_register" >
           

            
            <input type="number" name="code_postal" id="code_postal_register" placeholder="Code Postal..." v-model="code_postal_register">
           

            
            <input type="text" name="ville" id="ville_register" placeholder="Ville..." v-model="ville_register" >
           

           
            <input type="email" name="email" id="email_register" autocomplete="off" placeholder="Email..." v-model="email_register" required >
            

            
            <input type="date" name="date_de_naissance" id="date_de_naissance_register" placeholder="Date de naissance..." v-model="date_de_naissance_register" >
           

            
            <input type="password" name="password" id="password_register" autocomplete="off" placeholder="Password..." v-model="password_register" required >
            

            
            <input type="password" name="confirm" id="confirm_register" placeholder="Confirmation password" v-model="confirm_register" required >
           

        </div>
            
            <button @click="inscription" class="btn-suivant"
            value="Suivant">Suivant</button>

            <div class="progression">
            <div class="progress1"></div>
            <div class="progress2"></div>
            <div class="progress3"></div>
            </div>
    </div>

    </div>
</template>
<script>
export default {
    name: "register",
    data() {
        return {
            nom_register: "",
            prenom_register: "",
            adresse_register: "",
            comp_register: "",
            code_postal_register: "",
            ville_register: "",
            email_register: "",
            date_de_naissance_register: "",
            password_register: "",
            confirm_register: "",
            }
},
components:{},
    methods:{
            inscription: function (){
                this.axios.post("http://localhost:3000/user/register",{
                    nom: this.nom_register,
                    prenom: this.prenom_register,
                    adresse: this.adresse_register,
                    complement_adresse: this.comp_register,
                    cp: this.code_postal_register,
                    ville: this.ville_register,
                    email: this.email_register,
                    date_de_naissance:this.date_de_naissance_register,
                    password:this.password_register,
                    confirm_password: this.confirm_register
            })
            .then(res =>{

                console.log(res);
            
                if(res.data.token){
                        alert("ok");
                    localStorage.setItem("token",res.data.token)
                    this.$router.push({name: 'register2', params: {email : this.email_register}})
                    window.location.reload();
                }
                else{
                    alert(res.data.msg)
                    this.$router.push({name: "register", params: {msg: "pas enregistré"} })
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
    },
    
            
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
    opacity: 90%;
}

.container{
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    position: relative;
    box-shadow: 1px 1px 5px #585757;
}
.container .register{
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}


.register input{
    background-color: white;
    border: none;
    font-size: 15px;
    width: 260px;
    height: 33px;
    margin-left: 8px;
    padding: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
     margin: 20px;
     border-radius: 5px;
}





h1{
    font-size: 35px;
   text-align: center;
   margin-top:10px ;
}

.btn-suivant {
    border: 0;
    height: 43px;
    width: 135px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    border-radius: 22px;
    background-color: #ff9d9e;
    position: relative;
    margin: 20px;
    transition: all 0.5s;
    box-shadow:  5px 5px 6px #663f3f, 
             -5px -5px 6px #fffbfd;
    outline:none;

    
}

.btn-suivant:hover{
    transform: scale(1.1);
    transition: all 0.5s;


}


.btn-suivant:hover {
    background-color: inset 2px 2px 3px rgba(255, 255, 255, .6);
}


.head{
    display: flex;
    justify-content: space-around;
}
.fa-arrow-circle-left::before{
font-size: 35px;
    position: absolute;
    left: 40px;
    top: 20px;
    color: #a9a6a3;
}

.progression{
    display: flex;
    }

.progress1{
    width: 75px;
    height: 12px;
    border-radius: 20px;
    border: 1px solid #b8b3b3;
    margin: 2px;
    background-color:#ff9d9e
}

.progress2{
    width: 75px;
    height: 12px;
    border-radius: 20px;
    border: 1px solid#b8b3b3;
    margin: 2px;
}

.progress3{
    width: 75px;
    height: 12px;
    border-radius: 20px;
    border: 1px solid black;
    margin: 2px;
}




</style>