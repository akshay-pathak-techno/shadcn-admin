import * as Sentry from '@sentry/react'
import { createBrowserRouter } from 'react-router-dom'
export const sentryCreateBrowserRouter =
  Sentry.wrapCreateBrowserRouter(createBrowserRouter)
