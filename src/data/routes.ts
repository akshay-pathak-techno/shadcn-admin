export const Routes = {
  LOGIN: '/login',
  RESET_PASSWORD: '/reset-password/:token',
  ERROR: {
    GENERAL: '/500',
    NOT_FOUND: '/404',
    MAINTENANCE: '/503',
  },
  FALLBACK: '*',
  DASHBOARD: '/',
  USERS: '/users',
}
