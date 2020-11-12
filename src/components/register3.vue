<template>
  <div
    :style="{
      'background-image':
        'url(' + require('../assets/ingredient_fond.jpg') + ')',
    }"
    class="background_register1"
  >
    <div class="container">
      
      
      <div class="head">
        <a class="a" href="/myregister"
          ><i class="fas fa-arrow-circle-left"></i
        ></a>
      </div>
      
      
      <div class="register">
          <!-- data-male: attribut une valeur a l'icone seléctionner -->
          <h1>Vos paramètres</h1>
          <div class="select_bonhomme">
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
          </div>
          
          <!-- for: lie le label au select -->
          
                                
            <div class="select_option_repas">
              <label class="label_repas" for="option_repas">Repas</label>
            <select  class="option_repas" v-model="selected_repas">
            
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>

            </select>
            </div>
                             
          <div class="select_icone">
            
            

          <!-- <span
            >Chaque semaine nous vous proposerons <br />
            {{ prefAlimentaire }} petit déjeuner <br
          /></span> -->

            <div class="materiel">
              <ul>
                <li v-for="item in materiels" :key="item.id">
                  <input
                    type="checkbox"
                    :id="'myCheckbox1' + item.id"
                    :value="item.id"
                    v-model="Materiels"
                  />
                  <label class="label_container" :for="'myCheckbox1' + item.id"
                    ><img :src="require(`@/assets/${item.image}.png`)"
                  />
                  {{item.nom}}</label>
                </li>
              </ul>
            </div>
          
          </div>
          <div class="container_recapitulatif">
            <div class="recapitulatif">
                      <span>
                      {{ selected_repas }} repas <br>
                      pour {{ personne }} personnes <br>
                      </span>
            </div>
          </div>
      </div>
          
          <div class="btnsuiv">
                    <button @click="registerFinal">
                        <svg width="40px" height="40px" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </button>
          </div>

      
    </div>
  </div>
</template>
<script>
export default {
  name: "register_final",
  props: ["materiels"],
  data() {
    return {
      Materiels: [],
      email: this.$route.params.email,
      selected_repas: "",
      personne: 0
    };
  },
  components: {},
  methods: {

        registerFinal: function() {
            this.axios
                .post("http://localhost:3000/user/registerfinal", {
                email: this.email,
                materiel: this.Materiels,
                personne: this.personne,
                repas: this.selected_repas,
                })
                
                .then(res =>{
                  console.log(res);
            
                      if(res.data){
                              alert("ok");
                              localStorage.setItem("token",res.data.users)
                              this.$router.push({name: 'accueilUser', params: {users : res.data.users}})
                              /*  La méthode Location.reload() recharge la ressource depuis l'URL actuelle */
                              window.location.reload();
                      }
                      else{
                          alert(res.data.msg)
                          this.$router.push({name: "register3", params: {msg: "pas enregistré"} })
                      }
                })
        
                .then((res) => {
                  console.log(res.data);
                })
        
                .catch((err) => {
                  console.log(err);
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
.background_register1 {
    height: 1000px;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    padding: 30px;
}

.container {
  height: 900px;
  display: flex;
  justify-content: center;
  background-color: #f1f1f1;
  border-radius: 25px;
  position: relative;
  box-shadow: 1px 1px 5px #585757;
}

.register {
  width: 80%;
  height: 80%;
}

.select_bonhomme{
    display: flex;
    justify-content: center;
    margin: 30px 0px 30px 0px;
}

.bonhomme{
    background: white;
    width: 377px;
    height: 70px;
    justify-content: space-around;
    color: #BFBABA;
    box-shadow: 0px 0px 5px #969696, -5px -5px 10px #ffffff;;
    border-radius: 11px;
    display: flex;
    align-items: center;
}

.bonhomme > i {
  width: 20px;
}

.bonhomme--selected {
    color: red
}


.fa-male{
    font-size: 50px;
}
.select_icone{
    display: flex;
    justify-content: space-around;
    margin: 30px 0px 30px 0px;
}
.label_repas{
  margin: 20px;
}
.select_option_repas{
    display: flex;
    justify-content: center;
    margin: 30px 0px 30px 0px;
    align-items: center;
    
}

.materiel {
  width: 320px;
    height: 320px;
    box-shadow: 0px 0px 5px #969696, -5px -5px 10px #ffffff;
    border-radius: 11px;
    display: flex;
    align-items: center;
    margin: 0px 30px 0px 30px;
    background-color: white;
    padding: 25px;
}




.container_recapitulatif{
    display: flex;
    justify-content: center;
    
    margin: 80px 0px 20px 0px;
}
.recapitulatif{
    background: white;
    width: 326px;
    height: 139px;
    box-shadow: 0px 0px 5px #969696, -5px -5px 10px #ffffff;
    border-radius: 11px;
    text-align: center;
}

.repas_repas {
	position: relative;
}

.label_container{
    margin: 20px;
}

.option_repas {
    border-radius: 5px;
    width: 40px;
    height: 40px;
    box-shadow:  0px 0px 5px #969696, -5px -5px 10px #ffffff;;
    border: none;
}


h1 {
  font-size: 40px;
  text-align: center;
}
h2{
  text-align: center;
  font-size: 20px;
}


.btn-suivant:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
}
.btnsuiv button {
    width: 80px;
    height: 80px;
    border-radius: 100px;
    background-color: #ff9d9e;
    border: 5px solid white;
    transform: translate(100px, 840px) !important;
    transition: 0.5s;
    outline: none;
    cursor: pointer;
}

.bi-chevron-right {
    color: white;
    transition: all 1s;
}

.bi-chevron-right:hover {
    color: white;
    width: 60px;
    height: 60px;
    transition: all 1s;
}
.head {
  display: flex;
  justify-content: space-around;
}
.fa-arrow-circle-left::before {
  font-size: 45px;
  position: absolute;
  left: 60px;
  top: 58px;
  color: #a9a6a3;
}

ul {
  list-style-type: none;
}

li {
  display: inline-block;
  width: 130px;
}

input[type="checkbox"][id^="myCheckbox"] {
  display: none;
}


.label_container {
  border: 1px solid #fff;
    padding: 10px;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    text-align: center;
}

.label_container:before {
  background-color: white;
  color: white;
  content: " ";
  display: block;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 28px;
  transition-duration: 0.4s;
  transform: scale(0);
}

label img {
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
}

:checked + label {
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px #bbb9b9;
}

:checked + label:before {
  content: "✓";
  background-color: #ff9d9e;
  transform: scale(1);
}

:checked + label img {
  transform: scale(0.9);
  /* box-shadow: 0 0 5px #333; */
  z-index: -1;
}
</style>
