import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "@/views/Register";
import Login from "@/views/Login";
import Home from "@/views/Home";
import NProgress from "nprogress";
import CreateTask from "@/views/CreateTask";

Vue.use(VueRouter);

const routes = [
  {
    path: '/sign-up',
    name: 'register',
    component: Register,
  },
  {
    path: '/sign-in',
    name: 'login',
    component: Login,
  },
  {
    path: '/boards',
    name: 'home',
    component: Home,
  },
  {
    path: '/create-task',
    name: 'create-task',
    component: CreateTask
  },
  // {
  //   path: '/task/:taskID',
  //   name: 'task',
  //   component: EditTask
  // },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router
