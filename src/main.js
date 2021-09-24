import Vue from "vue";
import App from "./App.vue";
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

Vue.use(Buefy)


new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
