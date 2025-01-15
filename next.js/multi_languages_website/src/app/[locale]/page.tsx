// ============================================================================= //
// SRC/APP/[LOCALE]/PAGE.TS
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import Image from "next/image";
import { Link } from '@/i18n/routing';
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
  const t = useTranslations('HomePage');

  return (
    <main className={styles.ebMain}>
      <video
      autoPlay
      loop
      muted
      height="auto"
      width="100%"
      >
        <source src="/videos/cinematic_world_custom_home_tour.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.ebLogoText}>
        
      </div>

      <div className={styles.ebSectionWrapper}>

        <section id="design" className={`${styles.ebSection} ${styles.ebSectionFull}`}>
          <div className={styles.ebSectionInner}>
            <div className={styles.ebSectionContent}>
              <div className={styles.ebSectionHeader}>
                <h1>
                  {t('section_1_title')}
                </h1>

                <h4>
                  {t('section_1_sub_title')}.
                </h4>
              </div>

              <div className={styles.ebSectionBody}>
                  <p>
                    {t('section_1_text_1')}
                  </p>

                  <div>
                    <Link href={{ pathname: "/", hash: "see" }}>/ {t('section_1_link')}.</Link>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section id="see" className={styles.ebSection}>
          <div className={styles.ebSectionInner}>
            <div className={styles.ebSectionMedia}>
              <Image
                  className={styles.ebLogo}
                  src="/images/renovating_with_saw.png"
                  alt={t('section_1_image_alt')}
                  width={180}
                  height={38}
                  priority
              />
            </div>
            <div className={styles.ebSectionContent}>
              <div className={styles.ebSectionHeader}>
                <h1>
                  {t('section_2_title')}
                </h1>

                <h4>
                  {t('section_2_sub_title')}.
                </h4>
              </div>

              <div className={styles.ebSectionBody}>
                  <p>
                    {t('section_2_text_1')}
                  </p>

                  <div>
                    <Link href={{ pathname: "/", hash: "feel" }}>/ {t('section_2_link')}.</Link>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feel" className={`${styles.ebSection} ${styles.ebSectionReverse}`}>
          <div className={styles.ebSectionInner}>
            <div className={styles.ebSectionMedia}>
              <Image
                  className={styles.ebLogo}
                  src="/images/kitchen_view.png"
                  alt={t('section_1_image_alt')}
                  width={180}
                  height={38}
                  priority
              />
            </div>
            <div className={styles.ebSectionContent}>
              <div className={styles.ebSectionHeader}>
                <h1>
                  {t('section_3_title')}
                </h1>

                <h4>
                  {t('section_3_sub_title')}.
                </h4>
              </div>

              <div className={styles.ebSectionBody}>
                  <p>
                    {t('section_3_text_1')}
                  </p>

                  <div>
                    <Link href={{ pathname: "/", hash: "breathe" }}>/ {t('section_3_link')}.</Link>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section id="breathe" className={`${styles.ebSection} ebBackgroundColorSecondary`}>
          <div className={styles.ebSectionInner}>
            <div className={styles.ebSectionMedia}>
              <Image
                  className={styles.ebLogo}
                  src="/images/indoor_architecture.png"
                  alt={t('section_1_image_alt')}
                  width={180}
                  height={38}
                  priority
              />
            </div>
            <div className={styles.ebSectionContent}>
              <div className={styles.ebSectionHeader}>
                <h1>
                  {t('section_4_title')}
                </h1>

                <h4>
                  {t('section_4_sub_title')}.
                </h4>
              </div>

              <div className={styles.ebSectionBody}>
                  <p>
                    {t('section_4_text_1')}
                  </p>

                  <div>
                    <Link href={{ pathname: "/", hash: "sound" }}>/ {t('section_4_link')}.</Link>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sound" className={`${styles.ebSection} ${styles.ebSectionReverse}`}>
          <div className={styles.ebSectionInner}>
            <div className={styles.ebSectionMedia}>
              <Image
                  className={styles.ebLogo}
                  src="/images/house_outside_view.png"
                  alt={t('section_1_image_alt')}
                  width={180}
                  height={38}
                  priority
              />
            </div>
            <div className={styles.ebSectionContent}>
              <div className={styles.ebSectionHeader}>
                <h1>
                  {t('section_5_title')}
                </h1>

                <h4>
                  {t('section_5_sub_title')}.
                </h4>
              </div>

              <div className={styles.ebSectionBody}>
                  <p>
                    {t('section_5_text_1')}
                  </p>

                  <div>
                    <Link href="/projects">/ {t('section_5_link')}.</Link>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};