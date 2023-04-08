import { createRouter, createWebHistory } from "vue-router";
import Home from "~/components/pages/Home.vue";
import Edit from "~/components/pages/Edit.vue";
import Signup from "~/components/pages/Signup.vue";
import Login from "~/components/pages/Login.vue";
import Store from "~/store/index.ts";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!Store.state.isLogin) {
      // 認証されていない時、認証画面へ遷移
      next({
        path: "/Login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
