<template>
  <div>
    <navbar />
    <myaccueil :recette="recette" />
    <myfooter />
  </div>
</template>

<script>
import navbar from "../components/navbar";
import myaccueil from "../components/accueil";
import myfooter from "../components/myfooter";

export default {
  name: "",
  data() {
    return {
      recette: {},
    };
  },
  components: {
    navbar,
    myaccueil,
    myfooter,
  },
  created: function() {
    this.axios.get("http://localhost:3000/recette/all_recette/").then((res) => {
      console.log(res.data.recette.images);
      this.recette = res.data.recette;
    });
  },
};
</script>
<style scoped></style>
