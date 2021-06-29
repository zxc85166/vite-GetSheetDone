import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import page1 from "@/views/page1.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
