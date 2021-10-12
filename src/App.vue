<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    ...mapActions("cart", ["LOCAL_CART_LIST_SYNC"]),
  },
  created() {
    this.LOCAL_CART_LIST_SYNC();
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main";

#app {
}
</style>
