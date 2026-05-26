"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import ConsultationModal from "@/components/consultation/ConsultationModal";

type ConsultationModalContextValue = {
  openConsultationModal: () => void;
  closeConsultationModal: () => void;
  isConsultationModalOpen: boolean;
};

const ConsultationModalContext =
  createContext<ConsultationModalContextValue | null>(null);

export function useConsultationModal() {
  const context = useContext(ConsultationModalContext);

  if (!context) {
    throw new Error(
      "useConsultationModal must be used within ConsultationModalProvider",
    );
  }

  return context;
}

export default function ConsultationModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultationModal = useCallback(() => setIsOpen(true), []);
  const closeConsultationModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      openConsultationModal,
      closeConsultationModal,
      isConsultationModalOpen: isOpen,
    }),
    [closeConsultationModal, isOpen, openConsultationModal],
  );

  return (
    <ConsultationModalContext.Provider value={value}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeConsultationModal} />
    </ConsultationModalContext.Provider>
  );
}
