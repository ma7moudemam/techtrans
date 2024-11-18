export default [
  {
    path: "/Auth",
    component: () => import("@/layout/AuthLayout.vue"), // Use MainLayout as the wrapper
    children: [
      {
        path: "login", // Default route
        name: "login",
        component: () => import("@/views/auth/Login.vue"),
      },
    ],
  },
];
