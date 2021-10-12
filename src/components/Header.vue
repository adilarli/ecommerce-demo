<template>
  <div class="header">
    <div class="header__wrapper container">
      <router-link to="/">
        <img
          src="@/assets/svg/logo.svg"
          width="170"
          height="22"
          class="header__logo"
          alt="Logo"
        />
      </router-link>
      <router-link to="/cart" class="header__countWrapper">
        <img src="@/assets/svg/cart.svg" height="35" alt="Sepet" />
        <span v-if="cartCount > 0" class="header__count">{{ cartCount }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters("cart", ["cartCount"]),
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/variables/colors";

.header {
  width: 100%;
  border-bottom: 1px solid $Lighter;
  background-color: $White;

  &__logo {
    display: block;
  }

  &__wrapper {
    display: flex;
    align-items: center;

    justify-content: space-between;
    height: 72px;
  }
  &__countWrapper {
    position: relative;
  }
  &__count {
    position: absolute;
    right: -3px;
    top: -3px;
    background-color: $Lighter;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    color: $Cod-Gray;
    font-size: 11px;
    line-height: 18px;
    text-align: center;
  }
}
</style>
