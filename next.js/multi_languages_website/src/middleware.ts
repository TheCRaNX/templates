// ============================================================================= //
// MIDDLEWARE.TS
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 


// ===================
// 2. Export Component
// =================== 
export default createMiddleware(routing);
 
 

// ================
// 3. Export Config
// ================ 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*']
};