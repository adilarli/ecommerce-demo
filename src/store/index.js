import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import list from "./modules/list";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    list,
  },
});
