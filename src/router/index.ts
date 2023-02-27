import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getUserStore } from '@/store';

const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: Array<RouteRecordRaw> = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const moduleRouter: Array<RouteRecordRaw> = [...routeModuleList];

const defaultRouter: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/dashboard/base'
  },
  {
    path: '/:w+',
    name: '404Page',
    redirect: '/result/404'
  }
];

export const allRoutes = [...defaultRouter, ...moduleRouter];

const whiteRouters = ['/login'];

const router = createRouter({
  history: createWebHistory(),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth'
    };
  }
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  const userStore = getUserStore();
  const { token } = userStore;
  if (token) {
    if (to.path === '/login') {
      next();
      return;
    }
    try {
      await userStore.getUserInfo();
      if (router.hasRoute(to.name)) {
        next();
      } else {
        next(`/`);
      }
    } catch (error) {
      next({
        path: '/login',
        query: { redirect: encodeURIComponent(to.fullPath) }
      });
      NProgress.done();
    }
  } else {
    if (whiteRouters.includes(to.path)) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: encodeURIComponent(to.fullPath) }
      });
    }
    NProgress.done();
  }
});

export default router;
