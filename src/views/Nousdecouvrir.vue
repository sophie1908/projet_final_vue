<template>
  <div>
    <mynavbar />
    <mydecouvrir />
    <myfooter />
  </div>
</template>

<script>
import mynavbar from "../components/navbar";
import mydecouvrir from "../components/nousdecouvrir";
import myfooter from "../components/myfooter";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    mynavbar,
    mydecouvrir,
    myfooter,
  },
};
</script>
<style scoped></style>
