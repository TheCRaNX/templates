// ============================================================================= //
// SRC/APP/COMPONENTS/MAP/MAP.TS
// ============================================================================= //


"use client";



// ====================
// 1. Require Libraries
// ====================
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef } from "react";
import {useTranslations} from 'next-intl';



// =================
// 2. Import Styles
// =================
import '../../[locale]/globals.scss';
import styles from './modal.module.scss';



// ========
// 3. Props
// ========
interface ModalProps {
    modalContent?: React.ReactNode;
    isOverflowToggled?: boolean;
    showCloseButton?: boolean;
    onClose?: () => void;
}
 


// ============
// 4. Component
// ============
const Modal: React.FC<ModalProps> = ({
    modalContent,
    isOverflowToggled,
    showCloseButton = true,
    onClose,
  }) => {
    const f = useTranslations("Fallbacks");
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!showCloseButton) {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
          ) {
            onClose?.(); // Close the modal if clicked outside
          }
        };
  
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }
    }, [showCloseButton, onClose]);
  
    return (
        <div
            className={`${styles.ebModal} ${
            isOverflowToggled ? styles.ebModalActive : ""
            }`}
        >
            <div ref={modalRef} className={styles.ebModalContent}>
            {showCloseButton && (
                <FontAwesomeIcon
                icon={faSquareXmark}
                className={styles.ebClose}
                onClick={onClose}
                />
            )}
            {modalContent || <p>{f("modal_fallback")}</p>}
            </div>
        </div>
    );
};



// ===================
// 6. Export Component
// ===================
export default Modal;