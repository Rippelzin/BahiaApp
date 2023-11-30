const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/jogo",
        component: () => import("pages/JogoPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/mapa",
        component: () => import("pages/MapPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/diario",
        component: () => import("pages/DiarioPage.vue"),
        meta: { requiresAuth: true },
      },
      { path: "/opcoes", component: () => import("pages/OpcoesPage.vue") },
      { path: "/creditos", component: () => import("pages/CreditosPage.vue") },
      { path: "/registrar", component: () => import("pages/RegisterPage.vue") },
      { path: "/login", component: () => import("pages/SignIn.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
