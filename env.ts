// env.ts
import { defineConfig } from '@julr/vite-plugin-validate-env'
import { z } from 'zod'

export const schema = {
  VITE_APP_URL: z.string().url('Invalid URL format!').transform((value) => {
    // if ends with / remove it
    if (value.endsWith('/')) {
      return value.slice(0, -1)
    }
    return value
  }), // You can also add transformations
  VITE_COOKIE_BASED_AUTHENTICATION: z.preprocess((value) => {
      return value === 'true'
  }, z.boolean()), // You can also preprocess the value
  VITE_SENTRY_ORG: z.string(),
  VITE_SENTRY_PROJECT: z.string(),
  VITE_SENTRY_AUTH_TOKEN: z.string(),
  VITE_SENTRY_DSN: z.string(),

};


export default defineConfig({
  validator: 'zod',
  schema: schema,
})

