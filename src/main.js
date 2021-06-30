import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import ElementPlus from "element-plus";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";

createApp(App)
  .use(router)
  .use(ElementPlus)
  .use(VueLoading)
  .use(VueAxios, axios)
  .mount("#app");
