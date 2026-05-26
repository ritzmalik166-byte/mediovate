"use client";

import { useConsultationModal } from "@/components/providers/ConsultationModalProvider";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ConsultationTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function ConsultationTrigger({
  children,
  onClick,
  ...props
}: ConsultationTriggerProps) {
  const { openConsultationModal } = useConsultationModal();

  return (
    <button
      type="button"
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openConsultationModal();
        }
      }}
    >
      {children}
    </button>
  );
}
