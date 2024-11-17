export default [
  {
    path: "/",
    component: () => import("@/layout/MainLayout.vue"), // Use MainLayout as the wrapper
    children: [
      {
        path: "", // Default route
        name: "home",
        component: () => import("@/views/static/Home.vue"),
      },
      {
        path: "product/:id", // Dynamic route for product details
        name: "ProductDetails",
        component: () => import("@/views/static/ProductDetails.vue"),
        props: true, // Enable props to pass route params to the component
      },
    ],
  },
];
