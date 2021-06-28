import { createApp } from "vue";
import ElementPlus from "element-plus";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "element-plus/lib/theme-chalk/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
