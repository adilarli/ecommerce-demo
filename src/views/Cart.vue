<template>
  <div class="basket container">
    <div class="basket__wrapper">
      <span class="basket__title">
        ALIŞVERİŞ SEPETİM <span v-if="cartCount > 0">({{ cartCount }})</span>
      </span>
      <CartItem
        v-for="(item, index) in cart"
        :key="index"
        :index="index"
        :data="item"
      />
      <Empty v-if="cartCount === 0" />
    </div>
    <div class="summary__wrapper">
      <div class="summary__title">ALIŞVERİŞ ÖZETİ</div>

      <div class="summary__body">
        <div class="summary__item">
          <span class="summary__info">Toplam Tutar (KDV Dahil)</span>
          <span class="summary__price">{{
            priceFormat(cartTotal, false)
          }}</span>
        </div>
      </div>
      <div class="summary__footer">
        <button
          type="button"
          class="btn -secondary"
          v-if="cartCount > 0"
          @click="ORDER"
        >
          SİPARİŞİ TAMAMLA
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import priceFormat from "@/config/_priceFormat";

import CartItem from "@/components/Cart/CartItem";
import Empty from "@/components/Cart/Empty";

export default {
  name: "Cart",
  components: {
    CartItem,
    Empty,
  },
  methods: {
    priceFormat,
    ...mapActions("cart", ["ORDER"]),
  },
  computed: {
    ...mapGetters("cart", ["cartCount", "cartTotal"]),
    ...mapState({
      cart: (state) => state.cart.list,
    }),
  },
};
</script>

<style lang="scss">
@import "./src/assets/scss/variables/colors";
@import "./src/assets/scss/mixins/typography";
@import "./src/assets/scss/mixins/media-queries";

.basket {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;

  &__wrapper {
    flex-wrap: wrap;
    display: flex;
    margin: 20px 0;
    padding: 20px;
    width: calc(100% - 410px);
    background-color: $White;
    @include mq("tablet") {
      flex-direction: row;
      width: 100%;
    }
  }

  &__title {
    padding-bottom: 15px;
    border-bottom: 1px solid $Iron;
    width: 100%;
    @include font-size(16px);
    font-weight: 600;
    letter-spacing: 0.5px;
  }
}

.summary {
  &__wrapper {
    width: 370px;
    margin: 20px 0;
    padding: 20px;
    background-color: #fff;
    height: max-content;
    @include mq("tablet") {
      width: 100%;
    }
  }

  &__title {
    padding-bottom: 15px;
    border-bottom: 1px solid $Iron;
    width: 100%;
    @include font-size(16px);
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  &__body {
    margin-top: 20px;
    @include font-size(14px);
  }

  &__info {
    font-weight: 600;
  }

  &__price {
    font-family: $openSans;
  }

  &__item {
    display: flex;
    justify-content: space-between;
  }

  &__footer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
