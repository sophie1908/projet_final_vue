<template>
  <div>
    <navbar_user />
    <myaccueilUser :user="user" :recette="recette" />
    <myfooter />
  </div>
</template>

<script>
import navbar_user from "../components/navbar_user";
import myaccueilUser from "../components/accueilUser";
import myfooter from "../components/myfooter";

export default {
  name: "",
  data() {
    return {
      user: "",
      recette: [],
    };
  },
  components: {
    navbar_user,
    myaccueilUser,
    myfooter,
  },
  created: function() {
    this.axios
      .get(
        "http://localhost:3000/user/rec_user/" + localStorage.getItem("email")
      )
      .then((res) => {
        (this.user = res.data.user),
          this.axios
            .get(
              "http://localhost:3000/user/user_recette_semaine/" +
                localStorage.getItem("email")
            )
            .then((res) => {
              res.data.materiels.forEach((materiel) => {
                /* concat: fusionne les deux tableaux en un */
                this.recette = this.recette.concat(materiel.recettes);
              });
            });
      });
  },
};
</script>
<style scoped></style>
