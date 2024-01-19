import { createRouter, createWebHistory } from 'vue-router';
import GameView from './views/GameView.vue';
import SetGameView from './views/SetGameView.vue';
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: '/', component: SetGameView },
    { path: '/game', component: GameView },
  ],
});
