<template>
    <div :style="{'background-image': 'url(' + require('../assets/ingredient_fond.jpg') + ')'} " class="background_register1" >
    <div class="container">
        <div class="head">
        <a class="a" href="/myregister2"><i class="fas fa-arrow-circle-left"></i></a>
        <h1>Paramètre Foyer</h1>
        </div>
        <div class="register">
            
            <i class="far fa-user user"> <span></span>
            <input type="text" name="nom" id="nom_register" placeholder="Nom..." v-model="nom_register" >
            </i>

           

            </div>
            <button @click="inscription" class="btn-suivant"
            value="Suivant">Suivant</button>

    </div>
    </div>
</template>
<script>
export default {
    name: "register",
    data() {
        return {
            
            }
},
components:{},
    methods:{
    
            
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
    width: 60%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    position: relative;
}
.container .register{
    display: flex;
    width: 80%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.i{
    margin: 10px;
    height: 15px;
    
}

.register .user{
  
    background-color: white;
    width: 290px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #b0d18a;
    border-radius: 5px;
    margin: 20px;
}

.register .home{
  
    background-color: white;
    width: 624px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #b0d18a;
    border-radius: 5px;
    margin: 20px;
}

.register .user input{
    border: none;
    font-size: 17px;
    width: 243px;
    height: 33px;
    margin-left: 8px;
}

.register .home input{
    border: none;
    font-size: 17px;
    width: 575px;
    height: 33px;
    margin-left: 8px;
    
}
.register .span{
    height: 20px;
    width: 2px;
    background:black;
    margin-right: 5px;
}
h1{
    font-size: 60px;
        margin-bottom: 70px;
        text-decoration: underline #b0d18a;
        text-align: center;
}
.fa-home:before{
    font-size: 21px;
    color: #ff9d9e;
}

.fa-user:before{
font-size: 21px;
 color: #ff9d9e;
 
}

.fa-at:before{
font-size: 21px;
 color: #ff9d9e;
}

.fa-lock:before{
font-size: 21px;
 color: #ff9d9e;
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
    position: relative;
    bottom: -32px;
}


.btn-suivant:hover {
    background-color: rgba(255, 0, 0, 1);
}

.btn-suivant:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
}
.head{
    display: flex;
    justify-content: space-around;
}
.fa-arrow-circle-left::before{
font-size: 45px;
position: absolute;
    left: 60px;
    top: 58px;
    color: #a9a6a3;
}



</style>