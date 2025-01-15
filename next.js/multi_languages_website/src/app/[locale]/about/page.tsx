// ============================================================================= //
// SRC/APP/[LOCALE]/ABOUT/PAGE.TSX
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import {useTranslations} from 'next-intl';



// =================
// 2. Import Layouts
// =================
import SubPagesLayout from "@/app/layouts/sub_pages/sub_pages_layout";



// =================
// 3. Import Styles
// =================
import "../globals.scss";
import styles from "./page.module.scss";
 


// ============
// 4. Component
// ============
const AboutPage = () => {
    const t = useTranslations('AboutPage');
    
    return (      
        <div className={styles.cstmAbout}>
            <SubPagesLayout
            headerContent={
                <h1>
                    {t('title')}
                </h1>
            }
            >
            <h2>#PLACEHOLDER#</h2>
            </SubPagesLayout>
        </div>
    );
};
  
 

// ===================
// 5. Export Component
// ===================
export default AboutPage;