<template>
  <div>
    <div class="header">
      <img src="../assets/fond_head1.jpg" alt="fond" />
      <div class="nouveaute">Nouveautées</div>
    </div>
    <div class="navbar">
      <ul class="sous_menu">
        <router-link :to="`/myaccueilUser/${user.email}`">
          <li class="li_1">Mon compte</li>
        </router-link>
        <li class="li_2">Recettes <br />Rapide</li>
        <router-link :to="`/myallrecette/${user.email}`">
          <li class="li_3">Toutes les <br />recettes</li>
        </router-link>
        <li class="li_4">Recettes <br />végétariennes</li>
        <li class="li_5">Recettes<br />healthy</li>
      </ul>
    </div>

    <div class="section1">
      <div class="recette">
        <div v-for="item in filteredItems" :key="item.id">
          <div class="single-publication">
            <div class="recetteImage">
              <img
                :src="require(`@/assets/${item.image}.png`)"
                class="img_recette"
              />
            </div>

            <div class="nom_recette">
              {{ item.nom }}
            </div>

            <div class="btn_ajouter_recipe">
              <button class="btn_ajouter">Ajouter</button>
            </div>
          </div>
        </div>
      </div>
      <div class="btn">
        <button class="btn_section1">Valider</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "recette"],
  data() {
    return {
      email: this.$route.params.email,
    };
  },
  components: {},
  methods: {},
  computed: {
    filteredItems: function() {
      if (!this.recette) return [];
      return this.recette.filter((recettes) => {
        return recettes.cat_recetteId === 1;
      });
    },
  },
};
</script>

<style scoped>
.nouveaute {
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

/************************************navbar******************************/
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
li {
  margin: 15px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  height: 80px;
  width: 155px;
  transition: 0.5s;
}
li:hover {
  border: black solid 1.5px;
  transition: 0.5s;
}

.li_1 {
  background-color: #e098a3;
  padding: 30px;
}

.li_2 {
  background-color: #ffbf75;
}

.li_3 {
  background-color: #bfb09b;
}

.li_4 {
  background-color: #afce88;
}

.li_5 {
  background-color: #fe9c9d;
}
/**************************** recettes ************************************/
.section1 {
  height: 80%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
}
.recette {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 60px 0px 60px 0px;
}

.img_recette {
  height: 170px;
}

.single-publication {
  width: 200px;
  height: 290px;
  border: 2px solid #b8b5b6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 3px 1px 11px #9c9a9b, -1px -1px 3px #d4d0d1;
  font-weight: bold;
}
.btn {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.btn_section1 {
  width: 10%;
  margin: 0 auto;
  font-size: 24px;
  border-radius: 9px;
  background: #ffffff;
}
.btn_ajouter {
  border: none;
  color: white;
  border-radius: 10px;
  padding: 5px;
  background-color: brown;
  font-size: 13px;
  box-shadow: 1px 1px 2px #6f2c2c, -1px -1px 2px #973c3c;
}
.btn_ajouter:hover {
  font-size: 13.5px;
  transition: 0.2s;
}
</style>
