import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect:'/main/QA/recommend'
  },
  {
    path: '/join',
    name: 'join',
    redirect:'/join/login',
    component: () => import(/* webpackChunkName: "about" */ '../views/public/join.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../components/join/login.vue'),
      },
      {
        path: 'signup',
        name: 'signup',
        component: () => import('../components/join/signup.vue'),
      },
    ],
  },
  {
    path: '/master',
    name: 'master',
    redirect:'/master/users',
    component: () => import('../views/master/index.vue'),
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('../components/master/user.vue'),
      },
      {
        path: 'questions',
        name: 'questions',
        component: () => import('../components/master/question.vue'),
      },
      {
        path: 'talk',
        name: 'talk',
        component: () => import('../components/master/talk.vue'),
      },
    ],
  },
  {
    path: '/main',
    name: 'main',
    redirect:'/main/QA/recommend',
    component: () => import('../views/user/index.vue'),
    children: [
      {
        path: 'QA/:id',
        name: 'QA',
        component: () => import('../components/user/QA.vue'),
      },
      {
        path: 'store',
        name: 'store',
        component: () => import('../components/user/store.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    redirect:'/user/center',
    component: () => import('../views/user/index.vue'),
    children: [
      {
        path: 'center',
        name: 'center',
        component: () => import('../components/userDetail/userCenter.vue'),
      }
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
