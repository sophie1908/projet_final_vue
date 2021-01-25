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
          <!-- <a @click="fiche_recette(item.id)"> -->
          <div class="single-publication">
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
              <div class="btn_change_recipe">
                <button class="btn_change" @click="delete_items(item)">
                  <a href="/myallrecette">Changer de recette</a>
                </button>
                <button class="btn_supprimer" @click="delete_items(item)">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn">
        <button class="btn_section1"><i class="fas fa-check"></i></button>
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
      id: this.$route.params.id,
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
    fiche_recette: function(id) {
      this.$router.push({ path: `/myficheRecette/${id}` });
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
  box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.16);
}

.recette {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 60px 0px 60px 0px;
}

.img_recette {
  height: 170px;
  width: 200px;
}
.hello {
  text-align: center;
  font-size: 30px;
  padding: 30px;
}
.single-publication {
  width: 420px;
  height: 201px;
  border: 6px solid #d93d3d;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  text-align: center;
  background: #d93d3d;
  transition: 0.5s;
  cursor: pointer;
  margin: 20px;
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
.nom_recette {
  font-size: 19px;
  transform: translateY(-11px);
  font-weight: bolder;
}
.descriptif {
  width: 220px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: white;
}
.flex {
  display: flex;
  justify-content: center;
}
.btn_change_recipe {
  transform: translate(9px, 21px);
  background: white;
  border-radius: 11px;
  display: flex;
  align-items: center;
  padding: 4px;
  width: 200px;
}
.btn {
  height: 120px;
  position: relative;
}
.btn_section1 {
  height: 60px;
  width: 60px;
  border-radius: 50px;
  border: none;
  background-color: #d93d3d;
  transition: 0.3s;
  position: absolute;
  right: 30px;
  top: 38px;
}
.btn_section1:hover {
  height: 65px;
  width: 65px;
  transition: 0.5s;
}
.fa-check {
  color: white;
  font-size: 31px;
}
.btn_change {
  padding: 5px;
  background: white;
  border: none;
  border-right: solid;
  width: 150px;
  font-size: 14px;
  outline: none;
}
.btn_supprimer {
  border: none;
  background-color: white;
  transform: translateX(10px);
  outline: none;
  height: 25px;
  width: 25px;
  border-radius: 25px;
}

.fa-trash-alt {
  transform: translate(0px, 1px);
  border: none;
}
</style>
