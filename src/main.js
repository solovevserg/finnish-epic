import Vue from 'vue';
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'material-design-icons-iconfont'
import 'animate.css'




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

