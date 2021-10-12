import Vue from "vue";
import API from "@/api";
import Services from "@/config/_axios";

const list = {
  state: () => ({
    products: [],
  }),
  mutations: {
    SET_PRODUCT_LIST(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async GET_PRODUCT_LIST({ commit }) {
      Services.get(API.listing)
        .then((res) => {
          commit("SET_PRODUCT_LIST", res.data);
        })
        .catch((err) => {
          Vue.$toast.error(err.response.data.message);
        });
    },
  },
  getters: {},
  namespaced: true,
};

export default list;
