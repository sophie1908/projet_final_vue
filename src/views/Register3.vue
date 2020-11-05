<template>
  <div>
    <myregister3 :materiels="materiel" />
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
      materiel: {},
    };
  },
  created: function() {
      this.axios
      .get("http://localhost:3000/materiel/rec_materiel")
      .then((res) => {
        this.materiel = res.data.materiel;
      });
  },

  
  
    
};
</script>
<style scoped></style>
