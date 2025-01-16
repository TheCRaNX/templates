// ============================================================================= //
// SRC/APP/[LOCALE]/PAGE.TS
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import Image from "next/image";
import { useTranslations } from 'next-intl';



// =================
// 2. Import Styles
// =================
import "./globals.scss";
import styles from "./page.module.scss";
 


// ===================
// 3. Export Component
// ===================
export default function HomePage() {
  const ial = useTranslations('ImageAltLabels');
  const t = useTranslations('HomePage');

  return (
    <main className={styles.cstmMain}>
      <div className={styles.cstmContent}>
        <Image
            className={styles.cstmLogo}
            src="/logos/banner.png"
            alt={ial('banner')}
            width={180}
            height={38}
            priority
        />

        <h1>
            Next.js Multi-Language Website Template
        </h1>
      </div>
    </main>
  );
};