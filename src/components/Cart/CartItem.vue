<template>
  <div class="basketItem">
    <div class="basketItem__image">
      <img :src="data.image" :alt="data.name" />
    </div>
    <div class="basketItem__content">
      <div class="basketItem__name">{{ data.name }}</div>
      <div class="basketItem__price">
        {{ priceFormat(data.price, false) }}
      </div>
      <div class="basketItem__quantityWrapper">
        <span
          class="basketItem__quantityDecrease"
          :class="{ '-disable': data.amount <= 1 }"
          @click="DECREASE_PRODUCT(data)"
        >
          -
        </span>
        <span class="basketItem__quantityNumber">{{ data.amount }}</span>
        <span
          class="basketItem__quantityIncrease"
          @click="INCREASE_PRODUCT(data)"
        >
          +
        </span>
      </div>
    </div>
    <div class="basketItem__delete" @click="REMOVE_TO_CART(index)">Sil</div>
  </div>
</template>

<script>
import priceFormat from "@/config/_priceFormat";
import { mapActions } from "vuex";

export default {
  name: "CartItem",
  props: ["data", "index"],
  methods: {
    priceFormat,
    ...mapActions("cart", [
      "REMOVE_TO_CART",
      "INCREASE_PRODUCT",
      "DECREASE_PRODUCT",
    ]),
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/variables/colors";
@import "./src/assets/scss/mixins/typography";
@import "./src/assets/scss/mixins/media-queries";

.basketItem {
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid $Iron;

  @include mq("tablet") {
    width: 50%;
    flex-direction: column;
  }

  &__content {
    width: 100%;
    padding: 10px 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    @include mq("tablet") {
      align-items: center;
      padding-left: 0;
    }
  }

  &__brand {
    @include font-size(16px);
    margin-bottom: 7px;
    font-weight: 600;

    letter-spacing: 0.5px;
  }

  &__name {
    max-width: 260px;
    margin-bottom: 15px;
    font-weight: 500;
  }

  &__price {
    margin-bottom: 15px;
    @include font-size(16px, 18px);
    font-family: $openSans;
    font-weight: $semi-bold;
  }

  &__image {
    flex-grow: 0;
    flex-shrink: 0;
    @include mq("tablet") {
      width: 100%;
    }

    img {
      width: 100%;
      max-width: 170px;
      height: auto;
      display: block;
      margin: auto;
    }
  }

  &__delete {
    padding: 10px 0 0 0;
    flex-grow: 0;
    flex-shrink: 0;
    color: $Red;
    font-weight: 500;
    cursor: pointer;
    @include mq("tablet") {
      width: 100%;
      text-align: center;
    }
  }

  &__quantityDecrease,
  &__quantityIncrease,
  &__quantityNumber {
    height: 20px;
    width: 20px;
    font-size: 18px;
    color: $Cod-Gray;
    line-height: 20px;
    display: inline-block;
    text-align: center;
    font-family: $openSans;
  }

  &__quantityNumber {
    margin: 0 10px;
    font-size: 16px;
  }

  &__quantityDecrease,
  &__quantityIncrease {
    border-radius: 50%;
    background-color: $Iron;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }

    &.-disable {
      cursor: default;
      opacity: 0.5;
    }
  }
}
</style>
