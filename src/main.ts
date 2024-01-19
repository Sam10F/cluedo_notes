import { createApp } from 'vue';
import './style.scss';

import App from './App.vue';
import { createVuesticEssential } from 'vuestic-ui';
import 'vuestic-ui/styles/essential.css';
import 'vuestic-ui/styles/grid.css';
import 'vuestic-ui/styles/reset.css';
import 'vuestic-ui/styles/typography.css';
import { router } from './router';

createApp(App).use(createVuesticEssential()).use(router).mount('#app');
