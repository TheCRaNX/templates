// ============================================================================= //
// SRC/APP/[LOCALE]/IMPRINT/PAGE.TSX
// ============================================================================= //




// ====================
// 1. Require Libraries
// ====================
import Link from "next/link";
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
const ImprintPage = () => {
    const t = useTranslations('ImprintPage');
    const it = useTranslations('TextsImprintText');
    
    return (      
        <div className={styles.ebImprint}>
            <SubPagesLayout
            headerContent={
                <h1>
                    {t('title')}
                </h1>
            }
            >
            
            <div className={styles.ebTextWrapper}>
                <p>
                    {it('introduction')}
                </p>

                <h4>
                    {it('paragraph')}
                </h4>

                <h6>
                    {it('legal_form_title')}
                </h6>
                <p>
                    {it('legal_form_text')}
                </p>

                <h6>
                    {it('represented_by_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: it.raw('represented_by_text')}}></p>

                <h6>
                    {it('registry_entry_title')}
                </h6>
                <p>
                    {it('registry_entry_text')} 
                </p>

                <h6>
                    {it('registry_court_title')}
                </h6>
                <p>
                    {it('registry_court_text')}
                </p>

                <h6>
                    {it('register_number_title')}
                </h6>
                <p>
                    {it('register_number_text')}
                </p>

                <h6>
                    {it('turnover_tax_id_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: it.raw('turnover_tax_id_text')}}></p>

                <h6>
                    {it('business_id_title')}
                </h6>
                <p>
                    {it('business_id_text')}
                </p>

                <h6>
                    {it('regulatory_authority_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: it.raw('regulatory_authority_text')}}></p>

                <h6>
                    {it('website_developer_title')}
                </h6>
                <p>
                    {it('website_developer_text')}
                </p>


                <h4>
                    {it('disclaimer_title')}
                </h4>
                

                <h6>
                    {it('liability_for_content_title')}
                </h6>
                <p>
                    {it('liability_for_content_text')} 
                </p>

                <h6>
                    {it('liability_for_links_title')}
                </h6>
                <p>
                    {it('liability_for_links_text')}
                </p>

                <h6>
                    {it('copyright_title')}
                </h6>
                <p>
                    {it('copyright_text')}
                </p>

                <h6>
                    {it('privacy_policy_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: it.raw('privacy_policy_text')}}></p>

                <h6>
                    {it('google_analytics_title')}
                </h6>
                <p>
                    {it('google_analytics_text')} 
                </p>

                <h6>
                    {it('severability_clause_title')}
                </h6>
                <p>
                    {it('severability_clause_text')}
                </p>
            
                <h6>
                    {it('notice_general_equal_treatment_act_title')}
                </h6>
                <p>
                    {it('notice_general_equal_treatment_act_text')}
                </p>

<<<<<<< HEAD
                <p>
                    {it('generator_source_link_text_part_1')}
                    &nbsp;
                    <Link href="https://www.datenschutzerklaerung.de" target="_blank">{it('generator_source_link_text_part_2')}</Link>
                    &nbsp;
                    {it('generator_source_link_text_part_3')}
                    &nbsp;
                    <Link href="https://www.kanzlei-hasselbach.de/rechtsgebiete/familienrecht/" target="_blank">{it('lawyer_source_link_text')}</Link>
                </p>
=======
            <h6>
                {it('liability_for_content_title')}
            </h6>
            <p>
                {it('liability_for_content_text')} 
            </p>

            <h6>
                {it('liability_for_links_title')}
            </h6>
            <p>
                {it('liability_for_links_text')}
            </p>

            <h6>
                {it('copyright_title')}
            </h6>
            <p>
                {it('copyright_text')}
            </p>

            <h6>
                {it('privacy_policy_title')}
            </h6>
            <p>
                {it('privacy_policy_text')}
            </p>

            <h6>
                {it('google_analytics_title')}
            </h6>
            <p>
                {it('google_analytics_text')} 
            </p>

            <h6>
                {it('severability_clause_title')}
            </h6>
            <p>
                {it('severability_clause_text')}
            </p>
           
            <h6>
                {it('notice_general_equal_treatment_act_title')}
            </h6>
            <p>
                {it('notice_general_equal_treatment_act_text')}
            </p>

            <div id="link">
                Website Impressum von <a href="https://www.impressum-generator.de">impressum-generator.de</a>
>>>>>>> 671cf4f (Added soure link;)
            </div>
            </SubPagesLayout>
        </div>
    );
};
  
 

// ===================
// 5. Export Component
// ===================
export default ImprintPage;