// =================================================== //
// SRC/CONTEXT/MODAL_CONTEXT.TSX
// =================================================== //


"use client";


// ===================
// 1. Import Libraries
// ===================
import React, { createContext, useContext, useState, ReactNode } from 'react';
import Modal from '@/app/components/modal/modal';


// ==================
// 2. Import Contexts
// ==================
import { useToggleOverflow } from './overflow_context';



// ===============
// 3. Define Types
// ===============
interface ModalContextType {
    ebOpenModal: (content: React.ReactNode, showCloseButton?: boolean) => void;
    ebCloseModal: () => void;
}



// ===================
// 4. Define Variables
// ===================
const ModalContext = createContext<ModalContextType | undefined>(undefined);



// ====================
// 5. Export Components
// ====================
export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    const { ebIsOverflowToggled, setEbIsOverflowToggled } = useToggleOverflow();

    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(false);

    const ebOpenModal = (content: React.ReactNode, showCloseButton = true) => {
      setEbIsOverflowToggled(true);
      setModalContent(content);
      setShowCloseButton(showCloseButton);
      setIsModalOpen(true);
    };

    const ebCloseModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
        setEbIsOverflowToggled(false);
    };

    return (
        <ModalContext.Provider value={{ ebOpenModal, ebCloseModal }}>
            {children}
            {isModalOpen && (
            <Modal
                modalContent={modalContent}
                isOverflowToggled={ebIsOverflowToggled}
                showCloseButton={showCloseButton}
                onClose={ebCloseModal}
            />
            )}
        </ModalContext.Provider>
    );
};

export const useModal = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};