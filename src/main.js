import { createApp } from "vue";
import router from "./router";
import ElementPlus from "element-plus";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";

createApp(App).use(router).use(ElementPlus).mount("#app");
