<template>
  <div>
    <myregister3 :prefs="pref_alimentaire" :materiels="materiel" />
  </div>
</template>

<script>
import myregister3 from "../components/register3";

export default {
  name: "register3",
  components: {
    myregister3,
  },
  data() {
    return {
      pref_alimentaire: {},
      materiel: {},
    };
  },
  created: function() {
    this.axios
      .get("http://localhost:3000/pref_alimentaire/rec_pref")
      .then((res) => {
        this.pref_alimentaire = res.data.pref;
      });
      this.axios
      .get("http://localhost:3000/materiel/rec_materiel")
      .then((res) => {
        this.materiel = res.data.materiel;
      });
  },

  
  
    
};
</script>
<style scoped></style>
