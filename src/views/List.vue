<template>
  <div class="container">
    <div class="row">
      <div class="productListWrapper">
        <ProductCard
          v-for="(item, index) in products"
          :key="index"
          :data="item"
        />
      </div>
      <Loading v-if="products && products.length === 0" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductCard from "@/components/List/ProductCard";
import Loading from "@/components/Loading";

export default {
  name: "List",
  components: { ProductCard, Loading },
  methods: {
    ...mapActions("cart", ["ADD_TO_CART"]),
    ...mapActions("list", ["GET_PRODUCT_LIST"]),
  },
  computed: {
    ...mapState({
      products: (state) => state.list.products,
    }),
  },
  created() {
    this.GET_PRODUCT_LIST();
    //this.ADD_TO_CART({id: 2});
  },
};
</script>

<style lang="scss">
.productListWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 10px;
}
</style>
