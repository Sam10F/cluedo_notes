import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        name: 'Cluedo Notes',
        start_url: '/',
        short_name: 'CluedoNotes',
        description: 'Add your cluedo notes here and win the game!',
        theme_color: '#031c36',
        icons: [
          {
            src: '/cluedo_icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/cluedo_icon-120x120.png',
            sizes: '120x120',
            type: 'image/png',
          },
          {
            src: '/cluedo_icon-87x87.png',
            sizes: '87x87',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "∼/common/scss/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: [{ find: '∼', replacement: path.resolve(__dirname, 'src') }],
  },
});
