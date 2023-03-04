import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "./src/scss/variables.scss";
            @import "node_modules/bootstrap/scss/_functions.scss";
            @import "node_modules/bootstrap/scss/_mixins.scss";
          `
      }
    }
  },
})
