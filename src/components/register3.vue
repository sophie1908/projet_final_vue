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
                  'bonhomme--selected': n <= personne,
                },
              ]"
              :data-male="n"
              :key="n"
              @click="onSelectMaleNumber(n)"
            />
          </div>
          <p>Votre Foyer est composé de {{ personne }} personnes</p>
        </div>

        <div class="section3">
          <div class="select_option_repas">
            <button v-on:click="repas -= 1" class="btn_counter">-</button>
            <div class="counter">{{ repas }}</div>
            <button v-on:click="repas += 1" class="btn_counter">+</button>
          </div>
          <p>Vous souhaitez {{ repas }} recettes par semaine</p>
        </div>

        <div class="select_icone">
          <div class="materiel">
            <ul>
              <!-- key id de la ligne -->
              <li v-for="item in materiels" :key="item.id">
                <input
                  type="checkbox"
                  :id="'myCheckbox1' + item.id"
                  :value="item.id"
                  v-model="Materiels"
                />
                <label class="label_container" :for="'myCheckbox1' + item.id"
                  ><img :src="require(`@/assets/${item.image}.png`)" />
                  {{ item.nom }}</label
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="btnsuiv">
        <button @click="registerFinal">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 16 16"
            class="bi bi-chevron-right"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
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
      repas: 0,
      personne: 0,
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
          repas: this.repas,
        })

        .then((res) => {
          console.log(res);

          if (res.data) {
            alert("ok");
            localStorage.setItem("token", res.data.users);
            this.$router.push({
              name: "accueilUser",
              params: { users: res.data.users },
            });
            /*  La méthode Location.reload() recharge la ressource depuis l'URL actuelle */
            window.location.reload();
          } else {
            alert(res.data.msg);
            this.$router.push({
              name: "register3",
              params: { msg: "pas enregistré" },
            });
          }
        })

        .then((res) => {
          console.log(res.data);
        })

        .catch((err) => {
          console.log(err);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onSelectMaleNumber(num) {
      this.personne = num;
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
h1 {
  font-size: 40px;
  text-align: center;
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

/******************************************bonhomme ******************************/
.select_bonhomme {
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.bonhomme {
  background: white;
  width: 377px;
  height: 70px;
  justify-content: space-around;
  color: #bfbaba;
  box-shadow: 0px 0px 5px #969696, -5px -5px 10px #ffffff;
  border-radius: 11px;
  display: flex;
  align-items: center;
}

.bonhomme > i {
  width: 20px;
}

.bonhomme--selected {
  color: red;
}

.fa-male {
  font-size: 50px;
}
.select_icone {
  display: flex;
  justify-content: space-around;
  margin: 30px 0px 30px 0px;
}

/***************************************** repas ******************************************************/
.section3 {
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.btn_repas {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background: #ffbf75;
  box-shadow: 1px 1px 3px 1px #e6ac69, inset 1px 1px 6px 4px #ffd281;
  outline: none;
  border: none;
}

.btn_counter {
  background-color: #f1f1f1;
  border: none;
  width: 50px;
  font-size: 44px;
  display: flex;
  justify-content: center;
  outline: none;
}

.counter {
  font-size: 40px;
}

.select_option_repas {
  width: 200px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/*********************************************materiel**************************************/
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
