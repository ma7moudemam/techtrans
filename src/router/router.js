import { createRouter, createWebHistory } from "vue-router";
import appRoutes from "./appRoutes";
import authRoutes from "./authRooutes";

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes: [...appRoutes , ...authRoutes],
});

export default router;
