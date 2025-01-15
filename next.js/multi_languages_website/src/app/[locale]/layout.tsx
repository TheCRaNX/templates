// ============================================================================= //
// SRC/APP/[LOCALE]/LAYOUT.TS
// ============================================================================= //




// ===================
// 1. Import Libraries
// ===================
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';



// ====================
// 2. Import Components
// ====================
import { CanvasWrapper } from "../components/canvas/canvas";
import { OverflowProvider } from "@/context/overflow_context";
import { ToggleProvider } from "@/context/toggle_context";



// ================
// 3. Import Styles
// ================
import "./globals.scss";
//import styles from "./page.module.scss";



// ===================
// 4. Export Meta Data
// ===================
export const metadata: Metadata = {
  title: "#PLACEHOLDER#",
  description: "",
};



// ===================
// 5. Export Component
// ===================
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const messages = await getMessages();

  // Ensure the correct locale is being used
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ToggleProvider>
          <OverflowProvider>
          
            
            <CanvasWrapper>{
              children}
            </CanvasWrapper>
            
          </OverflowProvider>
          </ToggleProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}