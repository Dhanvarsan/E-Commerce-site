import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/', 
    name: 'Home' ,
    component: () => import("../views/MainComponent.vue"),
  },
  {
    path: '/orders', 
    name: 'orders' ,
    component: () => import("../views/OrdersComp.vue"),
  }, {
    path: '/cart', 
    name: 'cart' ,
    component: () => import("../views/CartComp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
