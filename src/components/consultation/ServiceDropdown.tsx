"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  consultationServices,
  type ConsultationService,
} from "@/data/consultationServices";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1.5L8 8.5L15 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ServiceDropdownProps = {
  value: ConsultationService | "";
  onChange: (value: ConsultationService) => void;
  error?: string;
};

export default function ServiceDropdown({
  value,
  onChange,
  error,
}: ServiceDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const selectOption = (option: ConsultationService) => {
    onChange(option);
    setIsOpen(false);
    setHighlightedIndex(-1);
  };

  const onTriggerKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen((open) => !open);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      setHighlightedIndex(0);
    }
  };

  const onListKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((index) =>
        index < consultationServices.length - 1 ? index + 1 : 0,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((index) =>
        index > 0 ? index - 1 : consultationServices.length - 1,
      );
      return;
    }

    if (event.key === "Enter" && highlightedIndex >= 0) {
      event.preventDefault();
      selectOption(consultationServices[highlightedIndex]);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${isOpen ? "z-50" : "z-0"}`}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={onTriggerKeyDown}
        className={`flex h-[48px] w-full cursor-pointer items-center justify-between rounded-[50px] border bg-white px-5 text-left font-open-sans text-[15px] leading-[22px] transition-colors duration-200 md:h-[52px] md:text-[16px] ${
          error
            ? "border-red-400 text-[#A87C4F]"
            : "border-[#F3BB82] text-[#A87C4F] hover:border-[#A87C4F]"
        } ${value ? "text-[#050102]" : "text-[#A87C4F]"}`}
      >
        <span className="truncate pr-3">{value || "Select Service"}</span>
        <ChevronIcon open={isOpen} />
      </button>

      {error ? (
        <p className="mt-1.5 px-2 font-open-sans text-[13px] text-red-500">
          {error}
        </p>
      ) : null}

      {isOpen ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Select a service"
          onKeyDown={onListKeyDown}
          className="absolute top-[calc(100%+8px)] z-[60] max-h-[min(320px,50vh)] w-full overflow-y-auto rounded-[20px] border border-[#F3BB82] bg-white py-2 shadow-[0_16px_48px_rgba(5,1,2,0.16)]"
        >
          {consultationServices.map((option, index) => {
            const isSelected = value === option;
            const isHighlighted = highlightedIndex === index;

            return (
              <li key={option} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onClick={() => selectOption(option)}
                  className={`w-full cursor-pointer px-5 py-3 text-left font-open-sans text-[15px] leading-[24px] transition-colors duration-150 md:text-[16px] ${
                    isHighlighted || isSelected
                      ? "bg-[#4A4A4A] text-white"
                      : "text-[#A87C4F] hover:bg-[#4A4A4A] hover:text-white"
                  }`}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
