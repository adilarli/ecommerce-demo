<template>
  <div class="container">
    <div class="emptyCart">
      <div class="emptyCart__icon">
        <img src="@/assets/svg/cart.svg" alt="Sepet" />
      </div>
      <div class="emptyCart__title">SEPETİNİZDE ÜRÜN BULUNMAMAKTADIR</div>
      <div class="emptyCart__description">
        Birbirinden seçkin markaların, binlerce ürününü hemen keşfedin.
      </div>
      <router-link class="btn emptyCart__button" :to="{ name: 'List' }">
        ALIŞVERİŞE DEVAM ET
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketEmpty",
};
</script>

<style lang="scss">
@import "./src/assets/scss/variables/colors";
@import "./src/assets/scss/mixins/typography";

.emptyCart {
  width: 100%;
  margin-top: 30px;
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__icon {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid $Cod-Gray;
  }

  &__title {
    margin-bottom: 5px;
    @include font-size(14px);
    font-weight: 600;
    letter-spacing: 0.5px;
    text-align: center;
  }

  &__description {
    margin-bottom: 20px;
    @include font-size(14px);
    letter-spacing: 0.5px;
    text-align: center;
    font-weight: 500;
  }
}
</style>
