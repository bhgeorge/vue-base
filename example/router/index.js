import Vue from 'vue';
import VueRouter from 'vue-router'; // eslint-disable-line
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/alert',
    name: 'alert',
    component: () => import(/* webpackChunkName: "alert" */ '../views/components/Alert'),
  },
  {
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "forms" */ '../views/components/forms/Forms'),
  },
  {
    path: '/forms/complex',
    name: 'forms.complex',
    component: () => import('../views/components/forms/NestedForms'),
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import(/* webpackChunkName: "modal" */ '../views/components/Modal'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
