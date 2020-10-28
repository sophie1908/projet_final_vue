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
        <div class="pref">
          <ul>
            <li v-for="item in prefs" :key="item.id">
              <input
                type="checkbox"
                :id="'myCheckbox' + item.id"
                :value="item.id"
                v-model="prefAlimentaire"
              />
              <label :for="'myCheckbox' + item.id"
                ><img :src="require(`@/assets/${item.image}.png`)"
              /></label>
            </li>
          </ul>
        </div>

        <span
          >Chaque semaine nous vous proposerons <br />
          {{ prefAlimentaire }} petit déjeuner <br
        /></span>

        <div class="materiel">
          <ul>
            <li>
              <input type="checkbox" id="myCheckbox11" />
              <label for="myCheckbox11"><img src="../assets/four.png"/></label>
            </li>
            <li>
              <input type="checkbox" id="myCheckbox22" />
              <label for="myCheckbox22"
                ><img src="../assets/friteuse.png"
              /></label>
            </li>
            <li>
              <input type="checkbox" id="myCheckbox33" />
              <label for="myCheckbox33"
                ><img src="../assets/mixeur.png"
              /></label>
            </li>
            <li>
              <input type="checkbox" id="myCheckbox44" />
              <label for="myCheckbox44"
                ><img src="../assets/micro_onde.png"
              /></label>
            </li>
          </ul>
        </div>
      </div>
      <button class="btn-suivant" @click="registerFinal" value="Suivant">
        Suivant
      </button>

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
  props: ["prefs"],
  data() {
    return {
      prefAlimentaire: [],
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
  height: 45px;
  box-shadow: 0px 0px 7px 5px #cccccc, 5px 5px 10px #ffffff;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.pref {
  width: 600px;
  height: 160px;
  box-shadow: 0px 0px 7px 5px #cccccc, 5px 5px 10px #ffffff;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}
.materiel {
  width: 600px;
  height: 160px;
  box-shadow: 0px 0px 7px 5px #cccccc, 5px 5px 10px #ffffff;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.i {
  margin: 10px;
  height: 15px;
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

.btn-suivant {
  border: 0;
  height: 43px;
  width: 135px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  border-radius: 22px;
  background-color: #ff9d9e;
  box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6),
    inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}

.btn-suivant:active {
  box-shadow: inset -2px -2px 3px rgba(255, 255, 255, 0.6),
    inset 2px 2px 3px rgba(0, 0, 0, 0.6);
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
  width: 75px;
  height: 12px;
  border-radius: 20px;
  border: 1px solid #b8b3b3;
  margin: 2px;
  background-color: #ff9d9e;
}

.progress2 {
  width: 75px;
  height: 12px;
  border-radius: 20px;
  border: 1px solid#b8b3b3;
  margin: 2px;
  background-color: #ff9d9e;
}

.progress3 {
  width: 75px;
  height: 12px;
  border-radius: 20px;
  border: 1px solid#b8b3b3;
  margin: 2px;
  background-color: #ff9d9e;
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
  color: red;
}

ul {
  list-style-type: none;
}

li {
  display: inline-block;
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
