// ============================================================================= //
// SRC/APP/[LOCALE]/PROJECTS/PAGE.TSX
// ============================================================================= //


"use client";


// ====================
// 1. Require Libraries
// ====================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from 'react';
import {useTranslations} from 'next-intl';



// ====================
// 2. Import Components
// ====================
import { useToggleOverflow } from "@/context/overflow_context";



// =================
// 3. Import Layouts
// =================
import SubPagesLayout from "@/app/layouts/sub_pages/sub_pages_layout";



// =================
// 4. Import Styles
// =================
import "../globals.scss";
import styles from "./page.module.scss";
 


// ============
// 5. Component
// ============
const ProjectPage = () => {
    const t = useTranslations('ProjectsPage');
    const { ebIsOverflowToggled, setebIsOverflowToggled } = useToggleOverflow();

    console.log('ebIsOverflowToggled:', ebIsOverflowToggled);
    
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

    const handleImageClick = (src: string, alt: string) => {
        setSelectedImage({ src, alt });
        setebIsOverflowToggled(true);
        console.log("HEllos");
    };

    const handleClose = () => {
        setSelectedImage(null);
        setebIsOverflowToggled(false);
    };

    return (
        <div className={`${styles.ebProjects} ${ebIsOverflowToggled ? 'ebNoOverflow' : ''}`}>
            <SubPagesLayout headerContent={<h1>{t('title')}</h1>}>
                <div className={styles.ebContainer}>
                    <div className={styles.ebGallery}>
                        {[
                            { src: "/images/renovating_with_saw.png", alt: "Renovating with saw" },
                            { src: "/images/kitchen_view.png", alt: "Kitchen view" },
                            { src: "/images/indoor_architecture.png", alt: "Indoor architecture" },
                            { src: "/images/house_outside_view.png", alt: "House outside view" }
                        ].map((image, index) => (
                            <div
                                key={index}
                                className={styles.ebImageWrapper}
                                onClick={() => handleImageClick(image.src, image.alt)}
                            >
                                <Image
                                    className={styles.ebImage}
                                    src={image.src}
                                    alt={image.alt}
                                    width={180}
                                    height={38}
                                    priority
                                />
                            </div>
                        ))}
                    </div>

                    <div className={`${styles.ebProjector} ${ebIsOverflowToggled ? styles.ebProjectorActive : ''}`}>
                        <div className={styles.ebContent}>
                            {selectedImage ? (
                                <>
                                    <Image
                                        className={styles.ebProjection}
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                        width={600}
                                        height={400}
                                        priority
                                    />
                                    <FontAwesomeIcon icon={faSquareXmark} className={styles.ebClose} onClick={handleClose}/>
                                </>
                            ) : (
                                <p>No image selected</p>
                            )}
                        </div>
                    </div>
                </div>
            </SubPagesLayout>
        </div>
    );
};
  
 

// ===================
// 6. Export Component
// ===================
export default ProjectPage;