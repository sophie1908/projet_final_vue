<template>
  <div>
    <myaccueilUser :recette="recette" :user="user" />
    <myfooter />
  </div>
</template>

<script>
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
    myaccueilUser,
    myfooter,
  },
  created: function() {
    this.axios
      .get("http://localhost:3000/user/rec_user/" + this.$route.params.email)
      .then((res) => {
        (this.user = res.data.user),
          this.axios
            .get(
              "http://localhost:3000/user/user_recette_semaine/" +
                this.$route.params.email
            )
            .then((res) => {
              res.data.materiels.forEach((materiel) => {
                this.recette = this.recette.concat(materiel.recettes);
              });
            });
      });
  },
};
</script>
<style scoped></style>
