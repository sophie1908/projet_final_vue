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
        <a href="/"><i class="fas fa-arrow-circle-left"></i></a>
      </div>
      <div class="input_login">
        <h1>Connexion</h1>

        <input
          type="email"
          name="email"
          id="email_register"
          placeholder="Email..."
          v-model="email_login"
        />

        <input
          type="password"
          name="password"
          id="password_register"
          placeholder="Password..."
          v-model="password_login"
        />

        <button @click="connection" class="btn-valider" value="Valider">
          Valider
        </button>

        <a href="/mymdp"><p class="mdp_forget">Mot de passe oublié ?</p></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      email_login: "",
      password_login: "",
      email: this.$route.params.email,
    };
  },
  components: {},
  methods: {
    connection: function() {
      this.axios
        .post("http://localhost:3000/user/login", {
          email: this.email_login,
          password: this.password_login,
        })
        .then((res) => {
          console.log(res);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", this.email_login);
            this.$router.push({ path: "/myaccueilUser" });
            window.location.reload();
          } else {
            this.$router.push({
              name: "register",
              params: { msg: "non connecté" },
            });
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Mot de passe ou e-mail incorrect");
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
  width: 41%;
  height: 62%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  position: relative;
  box-shadow: 1px 1px 5px #585757;
}

.fa-arrow-circle-left::before {
  font-size: 35px;
  position: absolute;
  left: 39px;
  top: 34px;
  color: #d93d3d;
}
h1 {
  font-size: 45px;
  text-align: center;
}

.container .register {
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
input {
  background-color: white !important;
  border: none;
  font-size: 15px;
  width: 260px;
  height: 33px;
  display: flex;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #585757;
}

.input_login {
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.mdp_forget {
  color: black;
  text-align: center;
}

.btn-valider {
  border: none;
  height: 43px;
  width: 135px;
  font-size: 22px;
  font-weight: bolder;
  text-align: center;
  color: #fff;
  border-radius: 9px;
  background-color: #d93d3d;
  outline: none;
  transition: 0.4s;
}

.btn-valider:hover {
  font-size: 23px;
  transition: 0.4s;
}
</style>
