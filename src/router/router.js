import { createRouter, createWebHistory } from "vue-router";
import appRoutes from "./appRoutes";

const routes = [
   ...appRoutes
  ];
  
  const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes,
  });
  
  export default router;