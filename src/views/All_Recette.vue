<template>
  <div>
    <navbar_user />
    <myallrecette :recette="recette" :user="user" />
    <myfooter />
  </div>
</template>

<script>
import navbar_user from "../components/navbar_user";
import myallrecette from "../components/all_recette";
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
    navbar_user,
    myallrecette,
    myfooter,
  },
  created: function() {
    this.axios.get("http://localhost:3000/recette/all_recette/").then((res) => {
      (this.recette = res.data.recette),
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
