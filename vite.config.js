import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
const fs = require('fs')
import path from 'path'; 

// Vite Plugins
import viteSvgIcons from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/

export default ({ mode, command}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    server: {
      port: 3000
    },
    plugins: [
      vue(),
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      alias: [
        { find: '@', replacement: '/src' },
        { find: '@steps', replacement: '/src/views/steps' },
        { find: '@plugins', replacement: '/src/plugins' },
        { find: '@views', replacement: '/src/views' },
        { find: '@router', replacement: '/src/router' },
        { find: '@components', replacement: '/src/components' },
        { find: '@comp', replacement: '/src/components' },
      ]
    },
  })
}

