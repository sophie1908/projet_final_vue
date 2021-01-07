<template>
  <div>
    <myficheRecette :recette="recette" />
    <myfooter />
  </div>
</template>

<script>
import myficheRecette from "../components/fiche_recette";
import myfooter from "../components/myfooter";

export default {
  name: "lalala",
  data() {
    return {
      recette: "",
    };
  },
  components: {
    myficheRecette,
    myfooter,
  },
  created: function() {
    this.axios
      .get("http://localhost:3000/recette/rec_recette/" + this.$route.params.id)
      .then((res) => {
        this.recette = res.data.recette;
      });
  },
};
</script>
<style scoped></style>
