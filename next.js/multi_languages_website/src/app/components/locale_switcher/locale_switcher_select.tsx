// ============================================================================= //
// SRC/APP/COMPONENTS/LOCALE_SWITCHER/LOCALE_SWITCHER_SELECT.TSX
// ============================================================================= //


'use client';


// ====================
// 1. Require Libraries
// ====================
import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {Locale, usePathname, useRouter} from '@/i18n/routing';



// ===============
// 2. Define Types
// ===============
type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};



// =================
// 3. Import Styles
// =================
import '../../[locale]/globals.scss';



// ===================
// 4. Export Component
// ===================
export default function LocaleSwitcherSelect({
  children,
  defaultValue
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <div
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </div>
  );
}