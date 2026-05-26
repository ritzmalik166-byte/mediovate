"use client";

import { useCallUsModal } from "@/components/providers/CallUsModalProvider";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CallUsTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function CallUsTrigger({
  children,
  onClick,
  ...props
}: CallUsTriggerProps) {
  const { openCallUsModal } = useCallUsModal();

  return (
    <button
      type="button"
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openCallUsModal();
        }
      }}
    >
      {children}
    </button>
  );
}
