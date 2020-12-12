<template>
  <div>
    <myrecetteNouveautee :recette="recette" :user="user" />
    <myfooter />
  </div>
</template>

<script>
import myrecetteNouveautee from "../components/recette_nouveautee";
import myfooter from "../components/myfooter";

export default {
  name: "",
  data() {
    return {
      recette: "",
      user: "",
    };
  },
  components: {
    myrecetteNouveautee,
    myfooter,
  },
  created: function() {
    this.axios.get("http://localhost:3000/recette/all_recette/").then((res) => {
      (this.recette = res.data.recette),
        this.axios
          .get(
            "http://localhost:3000/user/rec_user/" + this.$route.params.email
          )
          .then((res) => {
            this.user = res.data.user;
          });
    });
  },
};
</script>
<style scoped></style>
