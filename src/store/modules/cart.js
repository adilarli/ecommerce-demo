import Vue from "vue";
import router from "../../router/index";
import Services from "@/config/_axios";
import API from "@/api";

const cart = {
  state: () => ({
    list: [],
  }),
  mutations: {
    SET_TO_CART(state, payload) {
      state.list.push(payload);
    },
    REMOVE_TO_CART(state, payload) {
      state.list.splice(payload, 1);
    },
    CLEAR_CART(state) {
      state.list = [];
      localStorage.removeItem("cartList");
    },
    SET_LOCAL_CART_LIST(state) {
      localStorage.setItem("cartList", JSON.stringify(state.list));
    },
    GET_LOCAL_CART_LIST(state) {
      const localCartList = JSON.parse(localStorage.getItem("cartList"));
      state.list = localCartList?.length > 0 ? localCartList : [];
    },
    SET_INCREASE_PRODUCT(state, payload) {
      let product = state.list.find((item) => {
        return item.id === payload.id;
      });
      product.amount++;
      state.list = JSON.parse(JSON.stringify(state.list));
    },
    SET_DECREASE_PRODUCT(state, payload) {
      state.list.map((item) => {
        if (payload.id === item["id"] && item["amount"] > 1) {
          item["amount"] = item["amount"] - 1;
        }
        return item[0];
      });
    },
  },
  actions: {
    ADD_TO_CART({ commit, state }, product) {
      const currentProduct = state.list.filter(function (_product) {
        return _product.id == product.id;
      });
      if (currentProduct.length > 0) {
        commit("SET_INCREASE_PRODUCT", currentProduct[0]);
      } else {
        product["amount"] = 1;
        commit("SET_TO_CART", product);
      }
      commit("SET_LOCAL_CART_LIST");
      router.push({ name: "Cart" });
    },
    REMOVE_TO_CART({ commit }, index) {
      commit("REMOVE_TO_CART", index);
      commit("SET_LOCAL_CART_LIST");
    },
    LOCAL_CART_LIST_SYNC({ commit }) {
      commit("GET_LOCAL_CART_LIST");
    },
    INCREASE_PRODUCT({ commit }, product) {
      commit("SET_INCREASE_PRODUCT", product);
      commit("SET_LOCAL_CART_LIST");
    },
    DECREASE_PRODUCT({ commit }, product) {
      commit("SET_DECREASE_PRODUCT", product);
      commit("SET_LOCAL_CART_LIST");
    },
    ORDER({ state, commit }) {
      Services.post(API.order, JSON.stringify(state.list), {
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          Vue.$toast.success(res.data.message);
          commit("CLEAR_CART");
          router.push({ name: "List" });
        })
        .catch((err) => {
          Vue.$toast.error(err.response.data.message);
        });
    },
  },
  getters: {
    cartCount: (state) => {
      const totalCount = state.list.reduce(function (accumulator, item) {
        return accumulator + item.amount;
      }, 0);
      return totalCount;
    },

    cartTotal: (state) => {
      const totalCount = state.list.reduce(function (accumulator, item) {
        return accumulator + item.amount * item.price;
      }, 0);
      return totalCount;
    },
  },
  namespaced: true,
};

export default cart;
