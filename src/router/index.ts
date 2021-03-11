import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/join',
    name: 'join',
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
    path: '/',
    name: 'Home',
    component: Home,
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
