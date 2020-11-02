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
        <a class="a" href="/myregister2"
          ><i class="fas fa-arrow-circle-left"></i
        ></a>
        <h1>Paramètre Foyer</h1>
      </div>
      <div class="register">
        
        <div class="niveau_cuisine">
          <h2>Votre niveau de cuisine</h2>
          <div class="stars_kitchen">
          <i
            v-for="n in 5"
            :class="[
              'fas fa-star',
              {
                'star--selected': n <= star,
              },
            ]"
            :data-star="n"
            :key="n"
            @click="onSelectStarNumber(n)"
          />
          </div>
        </div>
        <div class="container_parametre">
        <div class="pref">
          <ul>
            <li v-for="item in prefs" :key="item.id">
              <input
                type="checkbox"
                :id="'myCheckbox' + item.id"
                :value="item.id"
                v-model="prefAlimentaire"
              />
              <label class="label_container" :for="'myCheckbox' + item.id"
                ><img :src="require(`@/assets/${item.image}.png`)"
              />
              {{item.nom}}
              </label>
            </li>
          </ul>
        </div>

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
      </div>
      <div class="btnsuiv">
                <button @click="registerFinal">
                    <svg width="40px" height="40px" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
            </div>

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
  name: "register_final",
  props: ["prefs", "materiels"],
  data() {
    return {
      prefAlimentaire: [],
      Materiels: [],
      email: this.$route.params.email,
      star: "",
    };
  },
  components: {},
  methods: {
    onSelectStarNumber(num) {
      this.star = num;
    },
    registerFinal: function() {
      this.axios
        .post("http://localhost:3000/user/registerfinal", {
          email: this.email,
          pref: this.prefAlimentaire,
          materiel: this.Materiel,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.background_register1 {
  height: 1000px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background-color: #f1f1f1;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  position: relative;
  box-shadow: 1px 1px 5px #585757;
}
.container .register {
  display: flex;
  width: 80%;
  height: 80%;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}

.niveau_cuisine {
  width: 142px;
  height: 80px;
  box-shadow: 0px 0px 7px 5px #cccccc, 5px 5px 10px #ffffff;
  border-radius: 11px;
  display: block;
  align-items: center;
  justify-content: center;
  background-color: white;
}
.container_parametre{
  display: flex;

}

.pref {
  width: 320px;
    height: 320px;
    box-shadow: 0px 0px 3px 2px #cccccc, 5px 5px 10px #ffffff;
    border-radius: 11px;
    display: flex;
    align-items: center;
    margin: 0px 30px 0px 30px;
    background-color: white;
    padding: 25px;
}


.materiel {
  width: 320px;
    height: 320px;
    box-shadow: 0px 0px 3px 2px #cccccc, 5px 5px 10px #ffffff;
    border-radius: 11px;
    display: flex;
    align-items: center;
    margin: 0px 30px 0px 30px;
    background-color: white;
    padding: 25px;
}


.i {
  margin: 10px;
  height: 15px;
}
.stars_kitchen{
  text-align: center;
}

.register .user {
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

.register .home {
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
    transform: translate(552px, 35px) !important;
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
.progression {
  display: flex;
  margin: auto;
}

.progress1 {
  width: 15px;
    height: 15px;
    border-radius: 68px;
    border: 2px solid white;
    margin: 2px;
    background-color: #ff9d9e
}

.progress2 {
  width: 15px;
    height: 15px;
    border-radius: 68px;
    border: 2px solid white;
    margin: 2px;
    background-color: #ff9d9e
}

.progress3 {
  width: 15px;
    height: 15px;
    border-radius: 68px;
    border: 2px solid white;
    margin: 2px;
    background-color: #ff9d9e
}

.star > i {
  width: 20px;
}

.star {
  display: flex;
  width: 320px;
  margin: 30px;
  justify-content: space-around;
  color: #bfbaba;
}
.star--selected {
  color: #ff9d9e;
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


label {
  border: 1px solid #fff;
    padding: 10px;
    display: block;
    position: relative;
    margin: 10px;
    cursor: pointer;
    text-align: center;
}

label:before {
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
