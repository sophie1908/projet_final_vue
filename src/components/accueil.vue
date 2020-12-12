<template>
  <div>
    <div class="header">
      <img class="img_fond" src="../assets/fond_head1.jpg" alt="fond" />
      <div class="logo">
        <img class="img_logo" src="../assets/logo.png" alt="logo" />
      </div>
    </div>

    <div class="icone">
      <div class="barreDeRecherche">
        <b-input-group size="sm" class="mb-2">
          <b-input-group-prepend is-text>
            <b-icon icon="search"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            type="search"
            placeholder="Recette ou ingrédient"
          ></b-form-input>
        </b-input-group>
      </div>

      <a href="/mylogin"
        ><svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-person"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
          /></svg
      ></a>
    </div>
    <div class="bulle">
      <img src="../assets/bulle_orange.png" alt="fond" class="img_1" />
      <img src="../assets/bulle_verte.png" alt="fond" class="img_2" />
      <img src="../assets/bulle_rose.png" alt="fond" class="img_3" />
    </div>
    <div class="section">
      <p class="p_first">
        Imagine<br />
        En 1 clic, <br />
        Une liste de recette et de course <br />
        pour toute la semaine
      </p>

      <div class="recette">
        <div v-for="item in recette" :key="item.id">
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
          </div>
        </div>
      </div>

      <p class="p_second">
        Moins de contraintes plus de plaisir
      </p>

      <div class="img_assiette">
        <img src="../assets/Image plat.png" alt="fond" />
      </div>
      <div class="btn">
        <a href="/myregister"
          ><button class="btn_commencer" value="commencer">
            Commencer l'aventure
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
    return {};
  },
};
</script>

<style scoped>
.icone {
  position: relative;
}
.icone a {
  background-color: #e7eded;
  width: 66px;
  height: 68px;
  border-radius: 34px;
  display: flex;
  align-items: center;
  transform: translateY(-85px);
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  background: linear-gradient(145deg, #f7fefe, #d0d5d5);
  box-shadow: 6px 6px 9px #9fa4a4, -6px -6px 9px #ffffff;
  transition: 0.5s;
}
.icone a:hover {
  transform: translateY(-85px) scale(1.1);
  transition: 0.5s;
}

.logo {
  display: contents;
}

.img_logo {
  width: 410px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.bi-person {
  position: absolute;
  left: 13px;
  color: black;
  top: 12px;
}

.barreDeRecherche {
  right: 10px;
  position: absolute;
  width: 220px;
}
.embed-responsive::before {
  display: block;
  content: "";
}
.embed-responsive {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.recette {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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

.img_recette {
  height: 170px;
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
  margin: 128px;
}
/******************************bulle ***************************************/
.bulle {
  height: 180px;
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.img_1 {
  height: 165px;
}

.img_2 {
  height: 175px;
}

.img_3 {
  height: 175px;
}

.p_second {
  text-align: center;
  font-size: 34px;
  margin: 60px;
}

.img_assiette {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.btn {
  display: flex;
  justify-content: center;
}

.btn_commencer {
  background-color: #accc87;
  border: none;
  height: 75px;
  width: 280px;
  font-size: 24px;
  margin: 150px;
  outline: none;
  border-radius: 29px;
  background: #accc87;
  box-shadow: 18px 18px 29px #596a46, -18px -18px 29px #ffffc8;

  transition: 0.5s;
}

.btn_commencer:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

.btn_commencer:active {
  background-color: #accc87;
}
</style>
