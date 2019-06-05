import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DynamicUi from "./plugin/dynamic/index";
import Debounce from "./plugin/repeatPlugin/index";
import "./registerServiceWorker";
Vue.use(Debounce, { DebounceTime: 200, ThrottleTime: 200 });
Vue.use(DynamicUi, {
  router,
  store,
  Debounce
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
