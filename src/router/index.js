import { createRouter, createWebHistory } from 'vue-router'
import Concert from "@/views/Concert.vue";
import Song from "@/views/Song.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../App.vue'),
    },
    {
      path: '/Concert',
      name: 'Concert',
      component: () => import('../views/Concert.vue'),
    },
    {
      path: '/Song',
      name: 'Song',
      component: () => import('../views/Song.vue'),
    }
  ],
})