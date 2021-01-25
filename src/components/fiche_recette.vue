<template>
  <div class="container">
    <div class="section1">
      <div class="ingredient">
        <div
          class="recette_item"
          v-for="item in recette.ingredients"
          :key="item.id"
        >
          <div class="ingredientImage">
            <img
              :src="require(`@/assets/${item.image}.png`)"
              class="img_ingredient"
            />
          </div>
          <div class="description">
            <div class="nom_ingredient">
              {{ item.nom }}
            </div>
            <div class="quantite">
              <div class="number">
                {{ item.contenir.quantite }}
              </div>
              <div class="unite">
                {{ item.unite }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cout">
        <p>{{ recette.cout_pers }}€ / pers</p>
      </div>
      <div class="temps">
        <p>{{ recette.temps }} min</p>
      </div>
    </div>
    <div class="section2">
      <div class="nom">
        {{ recette.nom }}
      </div>
      <div class="image">
        <img
          :src="require(`@/assets/${recette.image}.png`)"
          class="img_recette"
        />
      </div>
      <div class="pdf">
        <p v-for="tag in recette.pdf.split('/')" :key="tag">
          {{ tag }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["recette", "key"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.container {
  display: flex;
}
.section1 {
  width: 20%;
  height: 100%;
  background: #d93d3d;
  margin: 40px 0px 20px 0px;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cout {
  color: white;
  font-weight: 600;
  font-size: 20px;
}
.temps {
  color: white;
  font-weight: 600;
  font-size: 20px;
}
.section2 {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nom {
  font-size: 40px;
  text-align: center;
  color: white;
  background: #d93d3d;
  margin: 40px 0px 80px 0px;
  border-radius: 15px;
  font-weight: 600;
  width: 430px;
}
.img_recette {
  height: 200px;
  width: 200px;
}
.ingredient {
  width: 100%;
}
.recette_item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 20px 0px 20px 0px;
}
.img_ingredient {
  height: 50px;
  width: 50px;
}
.ingredientImage {
  height: 70px;
  width: 70px;
  background: white;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}
.quantite {
  display: flex;
  font-weight: 600;
}
</style>
