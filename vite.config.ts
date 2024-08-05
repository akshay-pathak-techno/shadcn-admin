import { ValidateEnv } from '@julr/vite-plugin-validate-env'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import mkcert from 'vite-plugin-mkcert'
import { sentryVitePlugin } from '@sentry/vite-plugin'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    build: {
      sourcemap: true,
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (warning.code === 'SOURCEMAP_ERROR') {
            return
          }
          defaultHandler(warning)
        },
      },
    },
    plugins: [
      react(),
      ValidateEnv(),
      svgr(),
      mkcert(),
      sentryVitePlugin({
        org: env.VITE_SENTRY_ORG,
        project: env.VITE_SENTRY_PROJECT,
        authToken: env.VITE_SENTRY_AUTH_TOKEN,
        reactComponentAnnotation: { enabled: true },
        include: './dist',
        sourcemaps: {
          filesToDeleteAfterUpload: './dist/**/*.map',
        },
      }),
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
