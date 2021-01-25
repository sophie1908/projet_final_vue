<template>
  <div>
    <div class="header">
      <img src="../assets/fond_head1.jpg" alt="fond" />
      <div class="nouveaute">Recettes Familiales</div>
    </div>

    <div class="section1">
      <div class="recette">
        <div v-for="item in cat_recette.recettes" :key="item.id">
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
              <button class="btn_ajouter"><i class="fas fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "cat_recette"],
  data() {
    return {
      email: localStorage.getItem("email"),
    };
  },
  components: {},
  methods: {},
  computed: {},
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
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0px 1px 20px 5px rgba(0, 0, 0, 0.16);
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
  border-radius: 20px;
  padding: 5px;
  background-color: #d93d3d;
  font-size: 13px;
  height: 30px;
  width: 30px;
}
</style>
