import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../pages/Layout.vue";
import Index from "../pages/index/Index.vue";
import Login from "../pages/Login.vue";
import Happy from "../pages/Happy.vue";
import NotFound404 from '../pages/404.vue'
import NotFound403 from '../pages/403.vue'

const routes = [
  {
    path: "/",
    component: Login,
    redirect: "/happyBirthday",
    children: [{ path: "/index", component: Index }],
  },
  {
    path: "/happyBirthday",
    component: Login
  },
  {
    path: "/happy",
    component: Happy
  },
  {
    path: "/403",
    component: NotFound403
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFound404
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
