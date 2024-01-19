import { createApp } from 'vue';
import './style.scss';
import GameView from './views/GameView.vue';
import SetGameView from './views/SetGameView.vue';
import App from './App.vue';
import { createVuesticEssential } from 'vuestic-ui';
import 'vuestic-ui/styles/essential.css';
import 'vuestic-ui/styles/grid.css';
import 'vuestic-ui/styles/reset.css';
import 'vuestic-ui/styles/typography.css';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    { path: '/', component: SetGameView },
    { path: '/game', component: GameView },
  ],
});

createApp(App).use(createVuesticEssential()).use(router).mount('#app');
