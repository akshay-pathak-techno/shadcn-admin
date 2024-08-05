// vite.config.ts
import { ValidateEnv } from "file:///home/ubuntu28/Desktop/project/react-project/shadcn-admin/node_modules/@julr/vite-plugin-validate-env/dist/index.mjs";
import react from "file:///home/ubuntu28/Desktop/project/react-project/shadcn-admin/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { defineConfig, loadEnv } from "file:///home/ubuntu28/Desktop/project/react-project/shadcn-admin/node_modules/vite/dist/node/index.js";
import svgr from "file:///home/ubuntu28/Desktop/project/react-project/shadcn-admin/node_modules/vite-plugin-svgr/dist/index.js";
import mkcert from "file:///home/ubuntu28/Desktop/project/react-project/shadcn-admin/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import { sentryVitePlugin } from "file:///home/ubuntu28/Desktop/project/react-project/shadcn-admin/node_modules/@sentry/vite-plugin/dist/esm/index.mjs";
var __vite_injected_original_dirname = "/home/ubuntu28/Desktop/project/react-project/shadcn-admin";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    build: {
      sourcemap: true,
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (warning.code === "SOURCEMAP_ERROR") {
            return;
          }
          defaultHandler(warning);
        }
      }
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
        include: "./dist",
        sourcemaps: {
          filesToDeleteAfterUpload: "./dist/**/*.map"
        }
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS91YnVudHUyOC9EZXNrdG9wL3Byb2plY3QvcmVhY3QtcHJvamVjdC9zaGFkY24tYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3VidW50dTI4L0Rlc2t0b3AvcHJvamVjdC9yZWFjdC1wcm9qZWN0L3NoYWRjbi1hZG1pbi92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS91YnVudHUyOC9EZXNrdG9wL3Byb2plY3QvcmVhY3QtcHJvamVjdC9zaGFkY24tYWRtaW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBWYWxpZGF0ZUVudiB9IGZyb20gJ0BqdWxyL3ZpdGUtcGx1Z2luLXZhbGlkYXRlLWVudidcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSdcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InXG5pbXBvcnQgbWtjZXJ0IGZyb20gJ3ZpdGUtcGx1Z2luLW1rY2VydCdcbmltcG9ydCB7IHNlbnRyeVZpdGVQbHVnaW4gfSBmcm9tICdAc2VudHJ5L3ZpdGUtcGx1Z2luJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSlcblxuICByZXR1cm4ge1xuICAgIGJ1aWxkOiB7XG4gICAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG9ud2Fybih3YXJuaW5nLCBkZWZhdWx0SGFuZGxlcikge1xuICAgICAgICAgIGlmICh3YXJuaW5nLmNvZGUgPT09ICdTT1VSQ0VNQVBfRVJST1InKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdEhhbmRsZXIod2FybmluZylcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCgpLFxuICAgICAgVmFsaWRhdGVFbnYoKSxcbiAgICAgIHN2Z3IoKSxcbiAgICAgIG1rY2VydCgpLFxuICAgICAgc2VudHJ5Vml0ZVBsdWdpbih7XG4gICAgICAgIG9yZzogZW52LlZJVEVfU0VOVFJZX09SRyxcbiAgICAgICAgcHJvamVjdDogZW52LlZJVEVfU0VOVFJZX1BST0pFQ1QsXG4gICAgICAgIGF1dGhUb2tlbjogZW52LlZJVEVfU0VOVFJZX0FVVEhfVE9LRU4sXG4gICAgICAgIHJlYWN0Q29tcG9uZW50QW5ub3RhdGlvbjogeyBlbmFibGVkOiB0cnVlIH0sXG4gICAgICAgIGluY2x1ZGU6ICcuL2Rpc3QnLFxuICAgICAgICBzb3VyY2VtYXBzOiB7XG4gICAgICAgICAgZmlsZXNUb0RlbGV0ZUFmdGVyVXBsb2FkOiAnLi9kaXN0LyoqLyoubWFwJyxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0sXG5cbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2VixTQUFTLG1CQUFtQjtBQUN6WCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sVUFBVTtBQUNqQixPQUFPLFlBQVk7QUFDbkIsU0FBUyx3QkFBd0I7QUFOakMsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUV2QyxTQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDTCxXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsUUFDYixPQUFPLFNBQVMsZ0JBQWdCO0FBQzlCLGNBQUksUUFBUSxTQUFTLG1CQUFtQjtBQUN0QztBQUFBLFVBQ0Y7QUFDQSx5QkFBZSxPQUFPO0FBQUEsUUFDeEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsaUJBQWlCO0FBQUEsUUFDZixLQUFLLElBQUk7QUFBQSxRQUNULFNBQVMsSUFBSTtBQUFBLFFBQ2IsV0FBVyxJQUFJO0FBQUEsUUFDZiwwQkFBMEIsRUFBRSxTQUFTLEtBQUs7QUFBQSxRQUMxQyxTQUFTO0FBQUEsUUFDVCxZQUFZO0FBQUEsVUFDViwwQkFBMEI7QUFBQSxRQUM1QjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
