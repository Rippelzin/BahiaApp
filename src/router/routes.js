const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/jogo", component: () => import("pages/JogoPage.vue") },
      { path: "/diario", component: () => import("pages/DiarioPage.vue") },
      { path: "/opcoes", component: () => import("pages/OpcoesPage.vue") },
      { path: "/creditos", component: () => import("pages/CreditosPage.vue") },
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
