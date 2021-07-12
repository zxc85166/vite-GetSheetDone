import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import page1 from "@/views/page1.vue";
import page2 from "@/views/page2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page1",
    name: "page1",
    component: page1,
  },
  {
    path: "/page2",
    name: "page2",
    component: page2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
