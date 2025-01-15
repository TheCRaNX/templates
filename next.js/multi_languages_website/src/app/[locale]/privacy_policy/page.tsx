// ============================================================================= //
// SRC/APP/[LOCALE]/PRIVACY_POLICY/PAGE.TSX
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
const PrivacyPolicyPage = () => {
    const c = useTranslations('ContactDetails');
    const t = useTranslations('PrivacyPolicyPage');
    const pp = useTranslations('TextsPrivacyPolicyText');
    
    return (      
        <div className={styles.ebPrivacyPolicy}>
            <SubPagesLayout
            headerContent={
                <h1>
                    {t('title')}
                </h1>
            }
            >
            
            <div className={styles.ebTextWrapper}>
                <h4>
                    1. {pp('privacy_policy_nutshell_title')}
                </h4>

                <h6>
                    {pp('general_notice_title')}
                </h6>
                <p>
                    {pp('general_notice_text')}
                </p>
                
                <h4>
                    2. {pp('data_collection_title')}
                </h4>

                <h6>
                    {pp('data_collection_responsibility_title')}
                </h6>
                <p>
                    {pp('data_collection_responsibility_text')}
                </p>

                <h6>
                    {pp('data_collection_process_title')}
                </h6>
                <p>
                    {pp('data_collection_process_text')}
                </p>

                <h6>
                    {pp('data_usage_title')}
                </h6>
                <p>
                    {pp('data_usage_text')}
                </p>

                <h6>
                    {pp('data_user_rights_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('data_user_rights_text')}}></p>

                <h6>
                    {pp('third_party_analytic_tools_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('third_party_analytic_tools_text')}}></p>

                <h6>
                    {pp('hosting_title')}
                </h6>
                <p>
                    {pp('hosting_text')}
                </p>

                <h6>
                    {pp('external_hosting_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('external_hosting_text')}}></p>
                <p dangerouslySetInnerHTML={{__html: pp.raw('external_hosting_company')}}></p>

                <h6>
                    {pp('order_processing_title')}
                </h6>
                <p>
                    {pp('order_processing_text')}
                </p>
                
                <h4>
                    3. {pp('general_notice_and_mandatory_information_title')}                
                </h4>

                <h6>
                    {pp('privacy_policy_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('privacy_policy_text')}}></p>

                <h6>
                    {pp('notice_regarding_responsible_site_title')}
                </h6>
                <p>
                    {pp('notice_regarding_responsible_site_text_1')}
                </p>
                <p dangerouslySetInnerHTML={{__html: c.raw('full_address')}}></p>
                <p>
                    {pp('notice_regarding_responsible_site_text_2')}
                </p>

                <h6>
                    {pp('storing_time_title')}
                </h6>
                <p>
                    {pp('storing_time_text')}
                </p>

                <h6>
                    {pp('general_notice_regarding_legal_basis_for_data_processing_title')}
                </h6>
                <p>
                    {pp('general_notice_regarding_legal_basis_for_data_processing_text')}
                </p>

                <h6>
                    {pp('general_notice_regarding_data_policy_guideline_third_party_states_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('general_notice_regarding_data_policy_guideline_third_party_states_text')}}></p>

                <h6>
                    {pp('receiver_of_personal_data_title')}
                </h6>
                <p>
                    {pp('receiver_of_personal_data_text')}
                </p>

                <h6>
                    {pp('recall_of_data_processing_title')}
                </h6>
                <p>
                    {pp('recall_of_data_processing_text')}
                </p>

                <h6>
                    {pp('objection_to_data_collection_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('objection_to_data_collection_text')}}></p>

                <h6>
                    {pp('right_of_appeal_title')}
                </h6>
                <p>
                    {pp('right_of_appeal_text')}
                </p>

                <h6>
                    {pp('right_to_request_collected_data_title')}
                </h6>
                <p>
                    {pp('right_to_request_collected_data_text')}
                </p>

                <h6>
                    {pp('disclosure_revision_deletion_title')}
                </h6>
                <p>
                    {pp('disclosure_revision_deletion_text')}
                </p>

                <h6>
                    {pp('right_to_constraint_processing_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('right_to_constraint_processing_text_1')}}></p>
                <ul>
                    <li>
                        {pp('right_to_constraint_processing_list_item_1')}
                    </li>
                    <li>
                        {pp('right_to_constraint_processing_list_item_2')}
                    </li>
                    <li>
                        {pp('right_to_constraint_processing_list_item_3')}
                    </li>
                    <li>
                        {pp('right_to_constraint_processing_list_item_4')}
                    </li>
                </ul>
                <p dangerouslySetInnerHTML={{__html: pp.raw('right_to_constraint_processing_text_2')}}></p>

                <h6>
                    {pp('ssl_tls_encryption_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('ssl_tls_encryption_text')}}></p>

                <h4>
                    4. {pp('data_collection_on_this_website_title')}                
                </h4>

                <h6>
                    {pp('cookies_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('cookies_text_1')}}></p>
                <p dangerouslySetInnerHTML={{__html: pp.raw('cookies_text_2')}}></p>
                <p>
                    {pp('cookies_text_3')}
                </p>
                <p dangerouslySetInnerHTML={{__html: pp.raw('cookies_text_4')}}></p>

                <h6>
                    {pp('request_per_mail_phone_fax_title')}
                </h6>
                <p>
                    {pp('request_per_mail_phone_fax_text_1')}
                </p>
                <p>
                    {pp('request_per_mail_phone_fax_text_2')}
                </p>
                <p>
                    {pp('request_per_mail_phone_fax_text_3')}
                </p>

                <h4>
                    5. {pp('plugins_and_tools_title')}                
                </h4>

                <h6>
                    {pp('open_street_map_title')}
                </h6>
                <p dangerouslySetInnerHTML={{__html: pp.raw('open_street_map_text')}}></p>

                <Link href="https://www.datenschutzerklaerung.de" target="_blank">{pp('source_text')}</Link>
            </div>
            </SubPagesLayout>
        </div>
    );
};
  
 

// ===================
// 5. Export Component
// ===================
export default PrivacyPolicyPage;