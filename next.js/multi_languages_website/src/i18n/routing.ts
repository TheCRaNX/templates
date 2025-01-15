// ============================================================================= //
// SRC/IL8N/ROUTING.TS
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
 


// ===================
// 2. Export Component
// =================== 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      de: '/ueber_uns'
    },
    '/contact': {
      en: '/contact',
      de: '/kontakt'
    },
    '/imprint': {
      en: '/imprint',
      de: '/impressum'
    },
    '/privacy_policy': {
      en: '/privacy_policy',
      de: '/datenschutz'
    },
    '/projects': {
      en: '/projects',
      de: '/projekte'
    }
  }
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);