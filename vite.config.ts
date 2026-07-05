import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { MS_LEARN_USER_ID } from './src/config/microsoftLearn'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.BASE_PATH || '/'

  return {
    plugins: [react()],
    base,
    build: {
      target: 'es2020',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            swiper: ['swiper'],
          },
        },
      },
    },
    server: {
      proxy: {
        '/api/ms-achievements': {
          target: 'https://learn.microsoft.com',
          changeOrigin: true,
          rewrite: () =>
            `/api/achievements/user/${MS_LEARN_USER_ID}?locale=en-us`,
        },
      },
    },
  }
})
