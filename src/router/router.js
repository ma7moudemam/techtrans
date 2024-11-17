import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/Home.vue';

const routes = [
    {
      path: "/",
      name: "Home",
      component: HomePage, // The component for this route
    },
   
   
  ];
  
  const router = createRouter({
    history: createWebHistory(), // Use HTML5 history mode
    routes,
  });
  
  export default router;