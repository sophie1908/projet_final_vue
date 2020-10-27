<template>
    <div :style="{'background-image': 'url(' + require('../assets/ingredient_fond.jpg') + ')'}  " opacity="50" class="background_register1" >
        <div class="container">
            
            <div class="head">
                <a class="a" href="/myregister"><i class="fas fa-arrow-circle-left"></i></a>
            </div>

            <div class="section1">
                <h1>Vos paramètres</h1>
                    <!-- data-male: attribut une valeur a l'icone seléctionner -->
                        <div class="bonhomme">
                            <i
                                v-for="n in 8"
                                :class="[
                                'fas fa-male',
                                {
                                    'bonhomme--selected': n <= personne
                                }
                                ]"
                                :data-male="n"
                                :key="n"
                                @click="onSelectMaleNumber(n)"
                            />
                        </div>
        

                        <div class="repas">


                            <div class="repas_container">
                                            <!-- for: lie le label au select -->
                                <label for="option_petitdej">Petit Déjeuner</label>
                                <div class="select_option_petitdej">
                                    <select  class="option_petitdej" v-model="selected_petitdej">
            
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>

                                    </select>
                                </div>
                            </div>

                            <div class="repas_container">
                                <label for="option_dej">Déjeuner</label>
                                <div class="select_option_dej">
                                    <select  class="option_dej" v-model="selected_dej">
            
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>

                                    </select>
                                </div>
                            </div>

                            <div class="repas_container">
                                <label for="option_diner">Dîner</label>
                                <div class="select_option_diner">
                                    <select  class="option_diner" v-model="selected_diner">
            
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>

                                    </select>
                                </div>
                            </div>
            </div>

</div>
            <div class="section2">
                <h1>Votre Foyer</h1>
                    <span>Chaque semaine nous vous proposerons <br>
                    {{ selected_petitdej }} petit déjeuner <br>
                    {{ selected_dej }} déjeuner <br>
                    {{ selected_diner }} dîner <br>
                    pour {{ personne }} personnes</span>
            </div>
            
                <button @click="inscription_param" class="btn-suivant"
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
    name: "register_param",
    data() {
        return {
            selected_petitdej: "",
            selected_dej: "",
            selected_diner: "",
            email : this.$route.params.email,
            personne: 0
        }
},
components:{},
    methods:{
       
            inscription_param: function (){
                this.axios.post("http://localhost:3000/user/registerparam1",{
                    email: this.email,
                    personne: this.personne,
                    petit_dej: this.selected_petitdej,
                    dej: this.selected_dej,
                    diner: this.selected_diner
            })
            .then(res =>{

                console.log(res);
            
                if(res.data){
                        alert("ok");
                        localStorage.setItem("token",res.data.token)
                    this.$router.push({name: 'register3', params: {email : this.email}})
                   /*  La méthode Location.reload() recharge la ressource depuis l'URL actuelle */
                    window.location.reload();
                }
                else{
                    alert(res.data.msg)
                    this.$router.push({name: "register2", params: {msg: "pas enregistré"} })
                }
            })
            .catch(err => {
                console.log(err);
            })
        },
        onSelectMaleNumber(num) {
            this.personne = num
        }
    },
    
}
</script>


<style scoped>

*{
    margin: 0;
}


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
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 25px;
    position: relative;
    box-shadow: 1px 1px 5px #585757;

}

.section1{
    background: white;
    width: 740px;
    height: 300px;
    box-shadow: -5px -5px 10px #cccccc, 5px 5px 10px #ffffff;
    border-radius: 11px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bonhomme >i {
  width: 20px;
}

.bonhomme{
    display: flex;
    width: 320px;
    margin: 30px;
   justify-content: space-around;
   color: #BFBABA;
}
.bonhomme--selected {
    color: red
}

.fa-male{
    font-size: 50px;
}

.repas{
     display: flex;
    width: 580px;
    justify-content: space-around;
    
}

.repas_container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section2{
    background: white;
    width: 740px;
    height: 200px;
    box-shadow: -5px -5px 10px #cccccc, 5px 5px 10px #ffffff;
    border-radius: 11px;
    text-align: center;
}

.repas_petitdej {
	position: relative;
}

label{
    margin: 20px;
}

.option_petitdej {
    border-radius: 5px;
    width: 50px;
    box-shadow:  5px 5px 10px #969696, 
             -5px -5px 10px #ffffff;
    border: none;
}

.option_dej {
    border-radius: 5px;
    width: 50px;
    box-shadow:  5px 5px 10px #969696, 
             -5px -5px 10px #ffffff;
    border: none;
}


.option_diner { 
    border-radius: 5px;
    width: 50px;
    box-shadow:  5px 5px 10px #969696, 
             -5px -5px 10px #ffffff;
    border: none;
}



.repas_dej{
    display: flex;
    flex-direction: column;
}

.repas_diner{
    display: flex;
    flex-direction: column;
}

.btn-suivant {
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
    position: absolute;
    right: 17px;
    bottom: 10px;

}





.fa-arrow-circle-left::before{
font-size: 37px;
    position: absolute;
    left: 33px;
    top: 32px;
    color: #a9a6a3;
}
.progression{
    display: flex;
        margin: auto;
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
    background-color:#ff9d9e
}

.progress3{
    width: 75px;
    height: 12px;
    border-radius: 20px;
    border: 1px solid black;
    margin: 2px;
}



</style>