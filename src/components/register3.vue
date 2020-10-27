<template>
    <div :style="{'background-image': 'url(' + require('../assets/ingredient_fond.jpg') + ')'} " class="background_register1" >
    <div class="container">
        <div class="head">
        <a class="a" href="/myregister2"><i class="fas fa-arrow-circle-left"></i></a>
        <h1>Paramètre Foyer</h1>
        </div>
        <div class="register">
            <div class="niveau_cuisine">
                <i
                                v-for="n in 5"
                                :class="[
                                'fas fa-star',
                                {
                                    'star--selected': n <= star
                                }
                                ]"
                                :data-star="n"
                                :key="n"
                                @click="onSelectStarNumber(n)"
                            />
            </div>
            <div class="pref">
                <div class="pref_item" id="vegetarien" @click="push">
                    <img src="../assets/vege.png" alt="vegetarien">
                </div>

                <div class="pref_item" id="sans_porc">
                    <img src="../assets/sp.png" alt="sans porc">
                </div>

                <div class="pref_item" id="sans_gluten">
                    <img src="../assets/gluten.png" alt="sans gluten">
                </div>

                <div class="pref_item" id="sans_laitier">
                    <img src="../assets/laitier.png" alt="sans laitier">
                </div>
            </div>

            <div class="materiel">
                <div class="materiel_item" id="four">
                    <img src="../assets/four.png" alt="four">
                </div>

                <div class="materiel_item" id="friteuse">
                    <img src="../assets/friteuse.png" alt="friteuse">
                </div>

                <div class="materiel_item" id="mixeur">
                    <img src="../assets/mixeur.png" alt="mixeur">
                </div>

                <div class="materiel_item" id="micro_onde">
                    <img src="../assets/micro_onde.png" alt="micro_onde">
                </div>
            </div>


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
            email : this.$route.params.email,
            star: 0
            }
},
components:{},
    methods:{
            onSelectStarNumber(num) {
                this.star = num
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
    height: 60%;
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
    height: 80%;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
}

.niveau_cuisine{
    width: 142px;
    height: 45px;
    box-shadow: 0px 0px 7px 5px #cccccc, 5px 5px 10px #ffffff;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.pref{
    width: 600px;
    height: 160px;
    box-shadow: 0px 0px 7px 5px #cccccc, 5px 5px 10px #ffffff;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}
.materiel{
    width: 600px;
    height: 160px;
    box-shadow: 0px 0px 7px 5px #cccccc, 5px 5px 10px #ffffff;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.pref_item{
    width: 120px;
    height: 120px;
    margin: 10px;
    box-shadow: 0px 0px 8px 3px #cccccc;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}

.materiel_item{
    width: 120px;
    height: 120px;
    margin: 10px;
    box-shadow: 0px 0px 8px 3px #cccccc;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
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


h1{
    font-size: 40px;
    text-align: center;
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
    border: 1px solid#b8b3b3;
    margin: 2px;
    background-color:#ff9d9e
}

.star >i {
  width: 20px;
}

.star{
    display: flex;
    width: 320px;
    margin: 30px;
   justify-content: space-around;
   color: #BFBABA;
}
.star--selected {
    color: red
}


</style>