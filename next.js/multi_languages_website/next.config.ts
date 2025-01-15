// ============================================================================= //
// NEXT.CONFIG.TS
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 


// ===================
// 2. Export Component
// ===================
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {};
 
export default withNextIntl(nextConfig);
