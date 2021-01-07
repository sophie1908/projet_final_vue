<template>
  <div>
    <div class="header">
      <img class="img_fond" src="../assets/spoon.jpg" alt="fond" />
    </div>
    <div class="section">
      <p class="p_first">
        Imagine<br />
        En 1 clic, <br />
        une liste de recette et de course <br />
        pour toute la semaine suivant vos envies.
      </p>
      <div class="container_recette">
        <h2>Les nouveautées</h2>
        <div class="recette">
          <div v-for="item in recette" :key="item.id">
            <a @click="fiche_recette(item.id)"
              ><div class="single-publication">
                <div class="recetteImage">
                  <img
                    :src="require(`@/assets/${item.image}.png`)"
                    class="img_recette"
                  />
                </div>
                <div class="descriptif">
                  <div class="nom_recette">
                    {{ item.nom }}
                  </div>
                  <div class="cout_recette">
                    <div class="flex">
                      {{ item.cout_pers }}
                      <p>€/pers</p>
                    </div>
                  </div>
                  <div class="temps_recette">
                    {{ item.temps }}
                  </div>
                </div>
              </div></a
            >
          </div>
        </div>
      </div>

      <p class="p_second">
        Moins de contraintes plus de plaisir
      </p>
      <div class="meal_prep">
        <h2>Meal Prep</h2>
        <div class="container_meal">
          <div class="img">
            <img class="img_meal" src="../assets/meal.jpg" alt="meal" />
          </div>
          <p>
            Prévoyez 2h de cuisine lors d'un week-end ou d'un moment de libre.
            <br />
            Toutes vos préparation sont prêtes pour la semaine.<br />
            Quelques dernières préparation le jour J, <br />
            10 min le repas est prêt et fais maison.<br />
            Gain de temps au quotidien.
          </p>
        </div>
      </div>
      <div class="btn">
        <a href="/myregister"
          ><button class="btn_commencer" value="commencer">
            S'inscrire
          </button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["recette"],
  data() {
    return {
      id: this.$route.params.id,
    };
  },

  methods: {
    fiche_recette: function(id) {
      this.$router.push({ path: `/myficheRecette/${id}` });
    },
  },
};
</script>

<style scoped>
/***************************************recette **********************************************/
.container_recette {
  background-color: #f5f5f5;
}

.container_recette h2 {
  font-size: 40px;
  text-align: center;
  padding: 33px;
}

.recette {
  height: 640px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.single-publication {
  /* width: 200px;
  height: 290px;
  border: 2px solid #b8b5b6;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
  text-align: center;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.16); */
  width: 500px;
  height: 230px;
  border: 6px solid #cf4242;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  text-align: center;
  background: #cf4242;
  transition: 0.5s;
  cursor: pointer;
}
.single-publication:hover {
  width: 504px;
  height: 234px;
  transition: 0.5s;
}
.recetteImage {
  background: white;
  border-radius: 10px;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img_recette {
  height: 170px;
}
.descriptif {
  width: 220px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
}

.nom_recette {
  text-transform: uppercase;
  font-weight: 600;
}
.flex {
  display: flex;
  justify-content: center;
}
/***************************************meal **********************************************/
.meal_prep {
  background-color: #f5f5f5;
  height: 450px;
}

.meal_prep h2 {
  font-size: 40px;
  text-align: center;
  padding: 33px;
}

.container_meal {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container_meal p {
  font-size: 20px;
}

.maisnan {
  width: 500px !important;
}

.maisnan .benjaminLeboss {
  width: auto !important;
}
.sosomanes {
  width: 443px;
  height: 430px;
  overflow: hidden;
  border-radius: 240px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.header {
  height: 391px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header .img_fond {
  position: absolute;
  width: 100%;
}

.icone {
  font-size: 40px;
  margin: 50px;
}
.p_first {
  text-align: center;
  font-size: 34px;
  margin: 400px 100px 150px 100px;
}

.p_second {
  text-align: center;
  font-size: 34px;
  margin: 180px;
}

.btn {
  display: flex;
  justify-content: center;
}

.btn_commencer {
  background-color: #f5f5f5;
  border: none;
  height: 75px;
  width: 280px;
  font-size: 24px;
  margin: 80px;
  outline: none;
  border-radius: 29px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.16);

  transition: 0.5s;
}

.btn_commencer:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.btn_commencer:active {
  background-color: #f5f5f5;
}
</style>
