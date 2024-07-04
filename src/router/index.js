import { createRouter, createWebHistory } from "vue-router";
import Body from '../components/body';
import PortfolioComponent from '../components/PortfolioComponent.vue'; // Убедитесь, что путь правильный

const routes = [
  {
    path: '/',
    component: Body,
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: PortfolioComponent,
      },
      // Другие маршруты, если необходимо
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
