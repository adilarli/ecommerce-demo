import Vue from "vue";
import VueRouter from "vue-router";

import List from "../views/List.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes,
});

export default router;
