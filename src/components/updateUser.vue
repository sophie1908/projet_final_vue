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
        <a class="a" href="/"><i class="fas fa-arrow-circle-left"></i></a>
        <h1>Modifier vos coordonnées</h1>
      </div>
      <div class="register">
        <input type="text" name="nom" id="nom_register" v-model="user.nom" />

        <input
          type="text"
          name="prenom"
          id="prenom_register"
          v-model="user.prenom"
        />

        <input
          type="text"
          name="adresse"
          id="adresse_register"
          v-model="user.adresse"
        />

        <input
          type="text"
          name="comp"
          id="comp_register"
          v-model="user.complement_adresse"
        />

        <input
          type="number"
          name="code_postal"
          id="code_postal_register"
          v-model="user.cp"
        />

        <input
          type="text"
          name="ville"
          id="ville_register"
          v-model="user.ville"
        />

        <input
          type="email"
          name="email"
          id="email_register"
          v-model="user.email"
          required
        />

        <input
          type="date"
          name="date_de_naissance"
          id="date_de_naissance_register"
          v-model="user.date_de_naissance"
        />
      </div>

      <div class="btnsuiv">
        <button @click="update">
          Modifier
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "update",
  props: ["user"],

  data() {
    return {
      nom: "",
      prenom: "",
      adresse: "",
      complement_adresse: "",
      cp: "",
      ville: "",
      email: "",
      date_de_naissance: "",
    };
  },
  components: {},
  methods: {
    update: function() {
      this.axios
        .put("http://localhost:3000/user/update/" + this.$route.params.email, {
          nom: this.user.nom,
          prenom: this.user.prenom,
          adresse: this.user.adresse,
          complement_adresse: this.user.complement_adresse,
          cp: this.user.cp,
          ville: this.user.ville,
          email: this.user.email,
          date_de_naissance: this.user.date_de_naissance,
        })
        .then((res) => {
          console.log(res);

          if (res.data) {
            alert("ok");
            this.$router.push({
              name: "accueilUser",
              params: { email: this.user.email },
            });
          } else {
            alert("impossible de modifier vos coordonnées");
          }
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
  padding: 30px;
}

.container {
  background-color: #f1f1f1;
  height: 560px;
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.register input {
  background-color: white;
  border: none;
  font-size: 15px;
  width: 260px;
  height: 33px;
  margin-left: 8px;
  padding: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 5px;
}

h1 {
  font-size: 35px;
  text-align: center;
  margin-top: 10px;
}

.btnsuiv button {
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background-color: #ff9d9e;
  border: 5px solid white;
  transform: translate(550px, 90px) !important;
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
  font-size: 35px;
  position: absolute;
  left: 40px;
  top: 20px;
  color: #a9a6a3;
}
</style>
