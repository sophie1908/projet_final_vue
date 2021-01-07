<template>
  <div>
    <div class="header">
      <img src="../assets/fond_head1.jpg" alt="fond" />
      <div class="parametre">Vos paramètres</div>
    </div>

    <div class="navbar">
      <ul class="sous_menu">
        <router-link :to="`/myaccueilUser`">
          <li class="menu_li" id="li_1">Mes recettes <br />de la semaine</li>
        </router-link>

        <li class="menu_li" id="li_2">Mes recettes <br />favorites</li>
        <li class="menu_li" id="li_3">Mes dernières <br />recettes</li>
        <li class="menu_li" id="li_4">Rechercher <br />une recette</li>

        <router-link :to="`/`">
          <li class="menu_li" id="li_5" @click="deconnect">
            Se <br />déconnecter
          </li>
        </router-link>
      </ul>
    </div>
    <div class="body">
      <div class="section1">
        <p class="user_params">Nom : {{ user.nom }}</p>
        <p class="user_params">Prénom : {{ user.prenom }}</p>
        <p class="user_params">Adresse : {{ user.adresse }}</p>
        <p class="user_params">
          Complément d'adresse : {{ user.complement_adresse }}
        </p>
        <p class="user_params">Code postal : {{ user.cp }}</p>
        <p class="user_params">Ville : {{ user.ville }}</p>
        <p class="user_params">Email : {{ user.email }}</p>
        <p class="user_params">
          Date de naissance : {{ user.date_de_naissance }}
        </p>
        <button @click="update" class="btn_modifier">Modifier</button>
      </div>

      <div>
        <p class="params_select">
          Votre foyer est composé de
          <button class="btn_personne" @click="open_personne = !open_personne">
            {{ user.personne }}
          </button>
          personnes
        </p>
        <div class="section2" v-if="open_personne">
          <div class="select_bonhomme">
            <div class="bonhomme">
              <i
                v-for="n in 8"
                :class="[
                  'fas fa-male',
                  {
                    'bonhomme--selected': n <= user.personne,
                  },
                ]"
                :data-male="n"
                :key="n"
                @click="onSelectMaleNumber(n)"
              />

              <button
                class="check"
                @click="(open_personne = !open_personne), update_personne()"
              >
                <svg
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 16 16"
                  class="bi bi-check2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <p class="params_select">
          Vous souhaitez
          <button class="btn_repas" @click="open_repas = !open_repas">
            {{ user.repas }}
          </button>
          recettes par semaine
        </p>

        <div class="section3" v-if="open_repas">
          <div class="select_option_repas">
            <button v-on:click="user.repas -= 1" class="btn_counter">-</button>
            <div class="counter">{{ user.repas }}</div>
            <button v-on:click="user.repas += 1" class="btn_counter">+</button>

            <button
              class="check"
              @click="(open_repas = !open_repas), update_repas()"
            >
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-check2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="section4">
          <div class="select_icone">
            <div class="materiel">
              <ul>
                <!-- key id de la ligne -->
                <li
                  class="materiel_li"
                  v-for="item in materiels"
                  :key="item.id"
                >
                  <input
                    type="checkbox"
                    :id="'myCheckbox1' + item.id"
                    :value="item.id"
                    v-model="checked"
                    v-bind:checked="checked"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "materiels"],
  data() {
    return {
      Materiels: [],
      email: localStorage.getItem("email"),
      selected_repas: "",
      personne: 0,
      open_personne: false,
      open_repas: false,
      repas: 0,
      userMateriels: [],
      checked: true,
    };
  },
  components: {},
  methods: {
    update: function() {
      this.$router.push({ name: "updateUser", params: this.email });
    },
    onSelectMaleNumber(num) {
      this.user.personne = num;
    },
    update_personne: function() {
      this.axios
        .put("http://localhost:3000/user/update_personne/" + this.email, {
          personne: this.user.personne,
        })
        .then((res) => {
          console.log(res);
          alert("Nombre de personne mis à jour");
        })
        .catch((err) => {
          alert("sa ne passe pas ");
          console.log(err);
        });
    },
    update_repas: function() {
      this.axios
        .put("http://localhost:3000/user/update_repas/" + this.email, {
          repas: this.user.repas,
        })
        .then((res) => {
          console.log(res);
          alert("Nombre de repas mis à jour");
        })
        .catch((err) => {
          alert("sa ne passe pas ");
          console.log(err);
        });
    },
    deconnect() {
      localStorage.removeItem("token");
    },
  },
  computed: {},
  created() {
    document.getElementById("myCheckbox11").prop("checked") == true ? "1" : "0";
  },
};
</script>

<style scoped>
.parametre {
  z-index: 999;
  font-size: 43px;
  text-align: center;
}

.header {
  height: 391px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header img {
  position: absolute;
  width: 100%;
}
/*****************************************  navbar ******************************************************/
.navbar {
  height: 150px;
  margin: 40px 0px 40px 0px;
}

.sous_menu {
  list-style: none;
  display: flex;
  border: none;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
.menu_li {
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  height: 80px;
  width: 155px;
  transition: 0.5s;
  color: black;
  list-style: none;
  outline: none;
}
.menu_li:hover {
  border: black solid 1.5px;
  transition: 0.5s;
  outline: none;
}

#li_1 {
  background-color: #e098a3;
}

#li_2 {
  background-color: #ffbf75;
}

#li_3 {
  background-color: #bfb09b;
}

#li_4 {
  background-color: #afce88;
}

#li_5 {
  background-color: #fe9c9d;
}
/*****************************************  coordonnées **************************************************/
.section1 {
  height: 80%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  background-color: #ffffff;
  flex-wrap: wrap;
  margin-bottom: 90px;
}
.user_params {
  border-radius: 10px;
  border: 2px solid black;
  margin: 15px;
  padding: 15px;
  width: 330px;
}
.btn_modifier {
  background-color: #accc87;
  border: none;
  height: 50px;
  width: 125px;
  font-size: 24px;
  align-items: center;
  outline: none;
  border-radius: 29px;
  background: #accc87;
  box-shadow: 1px 1px 2px #596a46, -1px -1px 16px #ffffc8;
  transform: translate(211px, 29px);
}

/*****************************************  personnes ***************************************************/
.section2 {
  height: 130px;
}
.params_select {
  text-align: center;
  margin: 40px 0px 40px 0px;
}
.btn_personne {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 20px;
  background: #ffbf75;
  box-shadow: 1px 1px 3px 1px #e6ac69, inset 1px 1px 6px 4px #ffd281;
  outline: none;
}
.select_bonhomme {
  display: flex;
  justify-content: center;
  margin: 30px 0px 30px 0px;
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
.check {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 20px;
  background: #ffbf75;
  box-shadow: 1px 1px 3px 1px #e6ac69, inset 1px 1px 6px 4px #ffd281;
  outline: none;
}
.check:checked {
  border: none;
}
/***************************************** repas ******************************************************/
.section3 {
  height: 130px;
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
  background: white;
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

.label_repas {
  margin: 20px;
}
.select_option_repas {
  width: 200px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/*****************************************  matériels ***************************************************/
.materiel {
  width: 320px;
  height: 320px;
  box-shadow: 0px 0px 5px #969696, -5px -5px 10px #ffffff;
  border-radius: 11px;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
}
.select_icone {
  display: flex;
  justify-content: space-around;
  margin: 30px 0px 30px 0px;
}
ul {
  width: 320px;
  height: 320px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.materiel_li {
  list-style: none;
  width: 110px;
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
