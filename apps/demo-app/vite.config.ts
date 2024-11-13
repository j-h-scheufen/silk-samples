import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.SILK_NODE_ENV': JSON.stringify(env.SILK_NODE_ENV),
      'process.env.DOMAIN': JSON.stringify(env.DOMAIN),
    },
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            plugins: ['preset-default'],
          },
        },
      }),
    ],
  };
});
