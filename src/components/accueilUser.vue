<template>
  <div>
    <div class="header">
      <img src="../assets/fond_head1.jpg" alt="fond" />

      <p class="user_identite">
        Bonjour <br />
        {{ user.prenom }}
      </p>
    </div>

    <div class="section1">
      <p class="hello">
        Vos recettes de cette semaine
      </p>
      <div class="recette">
        <div class="recette-item" v-for="item in recette" :key="item.id">
          <div class="single-publication">
            <i class="far fa-heart" v-on: click="togglefav"></i>
            <div class="recetteImage">
              <img
                :src="require(`@/assets/${item.image}.png`)"
                class="img_recette"
              />
            </div>

            <div class="nom_recette">
              {{ item.nom }}
            </div>

            <div class="btn_change_recipe">
              <button class="btn_change">Changer de recette</button>
              <button class="btn_supprimer" @click="delete_items(item)">
                <i class="fas fa-trash-alt"></i>
              </button>
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
      email: localStorage.getItem("email"),
    };
  },
  components: {},
  methods: {
    deconnection() {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
    },
    delete_items: function(index) {
      this.recette.splice(index);
    },
  },
  computed: {
    filteredItems: function() {
      console.log(this.recette.slice(0, this.user.repas));
      return this.recette.slice(0, this.user.repas);
    },
  },
};
</script>

<style scoped>
.user_identite {
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

.section1 {
  height: 80%;
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  border: 2px solid black;
}

.recette {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 60px 0px 60px 0px;
}
.fa-heart {
  width: 30px;
  transform: translate(156px, 10px);
}

.img_recette {
  height: 170px;
}
.section1 p {
  text-align: center;
  font-size: 30px;
  padding: 30px;
}
.single-publication {
  width: 200px;
  height: 290px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 15px;
  text-align: center;
  margin-bottom: 30px;
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
.btn_change {
  border-radius: 10px;
  padding: 5px;
}
.btn_supprimer {
  border: none;
  background-color: white;
  transform: translateX(10px);
  outline: none;
}

.fa-trash-alt {
  transform: translate(-2px, 2px);
  border: none;
}
</style>
