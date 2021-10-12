import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueToast from "vue-toast-notification";

import "vue-toast-notification/dist/theme-sugar.css";
Vue.use(VueToast, {
  position: "top",
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
