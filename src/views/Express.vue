<template>
  <div>
    <navbar_user />
    <myexpress :cat_recette="cat_recette" :user="user" />
    <myfooter />
  </div>
</template>

<script>
import navbar_user from "../components/navbar_user";
import myexpress from "../components/express";
import myfooter from "../components/myfooter";

export default {
  name: "",
  data() {
    return {
      cat_recette: "",
      user: "",
    };
  },
  components: {
    navbar_user,
    myexpress,
    myfooter,
  },
  created: function() {
    this.axios
      .get("http://localhost:3000/recette/recette_cat/2")
      .then((res) => {
        (this.cat_recette = res.data.cat_recette),
          this.axios
            .get(
              "http://localhost:3000/user/rec_user/" +
                localStorage.getItem("email")
            )
            .then((res) => {
              this.user = res.data.user;
            });
      });
  },
};
</script>
<style scoped></style>
