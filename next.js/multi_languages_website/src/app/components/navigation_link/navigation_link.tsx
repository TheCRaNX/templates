// ============================================================================= //
// SRC/APP/COMPONENTS/NAVIGATION_LINK/NAVIGATION_LINK.TS
// ============================================================================= //


'use client';



// ====================
// 1. Require Libraries
// ====================
import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link} from '@/i18n/routing';



// ===================
// 2. Export Component
// ===================
export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-2 py-3 transition-colors",
        isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
      )}
      href={href}
      {...rest}
    />
  );
}