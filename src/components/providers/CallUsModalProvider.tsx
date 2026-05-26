"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import CallUsModal from "@/components/consultation/CallUsModal";

type CallUsModalContextValue = {
  openCallUsModal: () => void;
  closeCallUsModal: () => void;
  isCallUsModalOpen: boolean;
};

const CallUsModalContext = createContext<CallUsModalContextValue | null>(null);

export function useCallUsModal() {
  const context = useContext(CallUsModalContext);

  if (!context) {
    throw new Error("useCallUsModal must be used within CallUsModalProvider");
  }

  return context;
}

export default function CallUsModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openCallUsModal = useCallback(() => setIsOpen(true), []);
  const closeCallUsModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({
      openCallUsModal,
      closeCallUsModal,
      isCallUsModalOpen: isOpen,
    }),
    [closeCallUsModal, isOpen, openCallUsModal],
  );

  return (
    <CallUsModalContext.Provider value={value}>
      {children}
      <CallUsModal isOpen={isOpen} onClose={closeCallUsModal} />
    </CallUsModalContext.Provider>
  );
}
