import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/main/QA/recommend',
  },
  {
    path: '/join',
    name: 'join',
    redirect: '/join/login',
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
    redirect: '/master/users',
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
    redirect: '/main/QA',
    component: () => import('../views/user/index.vue'),
    children: [
      {
        path: 'QA',
        name: 'QA',
        redirect:'/main/QA/recommend',
        component: () => import('../components/user/QA.vue'),
        children:[
          {
            path: 'recommend',
            name: 'recommend',
            component: () => import('../components/user/recommend.vue'),
          },
          {
            path: 'follow',
            name: 'follow',
            component: () => import('../components/user/follow.vue'),
          },
        ]
      },
      {
        path: 'QA/question',
        name: 'question',
        component: () => import('../components/user/question.vue'),
        props:  (route) => ({ query: route.query.data }),
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
    redirect: '/user/center',
    component: () => import('../views/user/index.vue'),
    children: [
      {
        path: 'setting',
        name: 'setting',
        component: () => import('../components/userDetail/userSet.vue'),
      },
      {
        path: 'center',
        name: 'center',
        component: () => import('../components/userDetail/userCenter.vue'),
      },
    ],
  },
  {
    path: '/users/editor',
    name: 'editor',
    component: () => import('../components/editor/index.vue'),
  },
  {

      path: '/postDetail/:postId',
      name: '/postDetail',
    component: () => import( '../components/postDetail/index.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
