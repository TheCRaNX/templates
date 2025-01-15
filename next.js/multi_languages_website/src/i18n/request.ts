// ============================================================================= //
// SRC/IL8N/REQUEST.TS
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import loadTranslations from '@/helpers/load_translations';
 


// ===================
// 2. Export Component
// =================== 
export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const translations = await loadTranslations(locale);
 
  return {
    locale,
    messages: translations
  };
});