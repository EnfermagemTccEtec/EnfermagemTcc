import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: InicioView,
    meta: {
      title: "Inicio",
    },
  },
  {
    path: "/contatos",
    name: "contatos",
    component: () => import("../views/ContatosView.vue"),
    meta: {
      title: "Contato",
    },
  },
  {
    path: "/questionario",
    name: "questionario",
    component: () => import("../views/QuestionarioView.vue"),
    meta: {
      title: "Questionario",
    },
  },
  {
    path: "/resultado",
    name: "resultado",
    component: () => import("../views/ResultadoView.vue"),
    meta: {
      title: "Resultado",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
