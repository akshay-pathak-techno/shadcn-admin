# Shadecn Admin Template

## Tech Stack

- **UI:** [ShadcnUI](https://ui.shadcn.com) (TailwindCSS + RadixUI)
- **State Management:** [Jotai](https://github.com/pmndrs/jotai)
- **Data Fetching:** [React Query](https://react-query.tanstack.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router](https://reactrouter.com/en/main)
- **Type Checking:** [TypeScript](https://www.typescriptlang.org/)
- **Linting/Formatting:** [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/)
- **Icons:** [Tabler Icons](https://tabler.io/icons)

## Quick Link

- [Changelog](CHANGELOG.md)
- [Getting Started](docs/GETTING_STARTED.md)
- [Code Standards](docs/STANDARDS.md)
- [Project Structure](docs/STRUCTURE.md)

# Sentry Integration

We have integrated [Sentry](https://sentry.io/) for error capturing and monitoring in our project. Sentry helps us track and manage errors in real-time, ensuring a more reliable and stable application.

## Source Maps

We have enabled source maps in our project, which are being sent to Sentry. Source maps help in debugging by mapping minified code back to the original source code, providing more meaningful error reports and stack traces.

**Note**: Source maps can expose the structure and code of your application. To mitigate this risk, we are using a strategy to delete source map files after they have been uploaded to Sentry.

### Deleting Source Maps

To automatically delete source map files after upload, you can use the `@sentry/vite-plugin` package. Here's how to configure it:

1. **Install the Plugin**:

   ```bash
   npm install @sentry/vite-plugin
   ```

2. **Configure the Plugin in `vite.config.ts`**:

   ```typescript
   import { defineConfig } from 'vite'
   import { VitePlugin as SentryVitePlugin } from '@sentry/vite-plugin'

   export default defineConfig({
     plugins: [
       SentryVitePlugin({
         authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
         org: process.env.VITE_SENTRY_ORG,
         project: process.env.VITE_SENTRY_PROJECT,
         include: './dist',
         sourcemaps: {
           filesToDeleteAfterUpload: [
             './dist/**/*.map', // Adjust the pattern as necessary
           ],
         },
       }),
     ],
   })
   ```

   Replace the placeholders with your actual configuration values. The `filesToDeleteAfterUpload` option specifies the source map files to delete after they have been successfully uploaded to Sentry.

For more information, refer to the [Sentry Vite Plugin Documentation](https://www.npmjs.com/package/@sentry/vite-plugin#sourcemapsfilestodeleteafterupload).
