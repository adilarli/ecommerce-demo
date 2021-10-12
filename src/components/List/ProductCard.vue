<template>
  <div class="productCard">
    <div class="productCard__image">
      <img :src="data.image" :alt="data.name" />
    </div>
    <div class="productCard__content">
      <div class="productCard__name">{{ data.name }}</div>
    </div>
    <div class="productCard__footer">
      <div class="productCard__price">
        {{ priceFormat(data.price, false) }}
      </div>
      <button class="productCard__addToBasket" @click="ADD_TO_CART(data)">
        SEPETE EKLE
      </button>
    </div>
  </div>
</template>

<script>
import priceFormat from "@/config/_priceFormat";
import { mapActions } from "vuex";

export default {
  name: "CartItem",
  props: ["data"],
  methods: {
    priceFormat,
    ...mapActions("cart", ["ADD_TO_CART"]),
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/variables/colors";
@import "./src/assets/scss/mixins/typography";
@import "./src/assets/scss/mixins/media-queries";

.productCard {
  width: calc(25% - 30px);
  min-height: 310px;
  padding: 15px 0;
  margin: 10px 15px;
  display: flex;
  flex-direction: column;
  background-color: $White;

  @include mq("tablet") {
    width: calc(50% - 30px);
  }

  &__content {
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  &__name {
    color: #000;
    font-family: $raleway;
    font-size: 16px;
    font-weight: 400;
    margin: 8px 0;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    @include mq("tablet") {
      flex-direction: column;
    }
  }

  &__addToBasket {
    cursor: pointer;
    border: 0;
    font-size: 0.75rem;
    text-align: center;
    padding: 0.9375rem;
    background-color: #111;
    color: #fff;
    font-family: $raleway;
    letter-spacing: 1px;
    max-width: 150px;
    font-weight: 600;

    @include mq("tablet") {
      width: 100%;
      max-width: unset;
    }

    &:hover {
      opacity: 0.75;
    }
  }

  &__price {
    font-size: 14px;
    font-family: $openSans;
    font-weight: 600;
    @include mq("tablet") {
      width: 100%;

      margin-bottom: 16px;
    }
  }

  &__image {
    img {
      width: 100%;
      max-width: 150px;
      height: auto;
      display: block;
      margin: auto;
    }
  }
}
</style>
