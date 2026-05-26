"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { ConsultationService } from "@/data/consultationServices";
import { submitConsultationForm } from "@/lib/submitConsultationForm";
import ServiceDropdown from "./ServiceDropdown";

type ConsultationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormState = {
  name: string;
  contact: string;
  email: string;
  service: ConsultationService | "";
  message: string;
};

const initialFormState: FormState = {
  name: "",
  contact: "",
  email: "",
  service: "",
  message: "",
};

const MODAL_ANIMATION_MS = 620;

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4L16 16M16 4L4 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const fieldClassName =
  "h-[48px] w-full rounded-[50px] border border-[#F3BB82] bg-white px-5 font-open-sans text-[15px] leading-[22px] text-[#050102] outline-none transition-colors duration-200 placeholder:text-[#A87C4F]/70 focus:border-[#A87C4F] md:h-[52px] md:text-[16px]";

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [serviceError, setServiceError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPresent, setIsPresent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsPresent(true);

      const frame = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsVisible(true));
      });

      return () => window.cancelAnimationFrame(frame);
    }

    setIsVisible(false);

    const timer = window.setTimeout(() => {
      setIsPresent(false);
    }, MODAL_ANIMATION_MS);

    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isPresent) {
      setForm(initialFormState);
      setServiceError("");
      setSubmitError("");
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [isPresent]);

  useEffect(() => {
    if (!isPresent) return;

    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isPresent]);

  useEffect(() => {
    if (!isVisible) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isVisible, onClose]);

  useEffect(() => {
    if (!isVisible) return;
    panelRef.current?.focus();
  }, [isVisible]);

  if (!isPresent) return null;

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.service) {
      setServiceError("Please select a service");
      return;
    }

    setServiceError("");
    setSubmitError("");
    setIsSubmitting(true);

    try {
      await submitConsultationForm({
        name: form.name,
        contact: form.contact,
        email: form.email,
        service: form.service,
        message: form.message,
      });
      setIsSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const backdropAnimation = isVisible
    ? "animate-[consultation-backdrop-in_0.62s_cubic-bezier(0.22,1,0.36,1)_forwards]"
    : "animate-[consultation-backdrop-out_0.62s_cubic-bezier(0.22,1,0.36,1)_forwards]";

  const panelAnimation = isVisible
    ? "animate-[consultation-panel-in_0.62s_cubic-bezier(0.22,1,0.36,1)_forwards]"
    : "animate-[consultation-panel-out_0.62s_cubic-bezier(0.22,1,0.36,1)_forwards]";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close consultation form"
        onClick={onClose}
        className={`absolute inset-0 cursor-pointer bg-[#050102]/50 backdrop-blur-[2px] ${backdropAnimation}`}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
        tabIndex={-1}
        className={`relative z-10 flex max-h-[92dvh] w-full max-w-[640px] flex-col overflow-hidden rounded-t-[24px] bg-white shadow-[0_24px_80px_rgba(5,1,2,0.18)] will-change-transform sm:max-h-[90dvh] sm:rounded-[24px] ${panelAnimation}`}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-[#FFE4C8] px-5 py-5 md:px-8 md:py-6">
          <div>
            <p className="font-sans text-[13px] font-semibold uppercase tracking-wide text-[#A87C4F] md:text-[14px]">
              Mediovate
            </p>
            <h2
              id="consultation-modal-title"
              className="mt-1 font-sans text-[22px] font-semibold leading-[30px] text-[#050102] md:text-[28px] md:leading-[36px]"
            >
              Book a Free Consultation
            </h2>
            <p className="mt-2 font-open-sans text-[14px] leading-[22px] text-[#050102]/80 md:text-[15px] md:leading-[24px]">
              Share your details and our team will get back to you shortly.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#F3BB82] text-[#A87C4F] transition-colors duration-200 hover:border-[#A87C4F] hover:bg-[#FFF5EB]"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 md:px-8 md:py-6">
          {isSubmitted ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF5EB] text-[#A87C4F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 14.5L12 19.5L21 9.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-5 font-sans text-[22px] font-semibold text-[#050102] md:text-[24px]">
                Thank you!
              </h3>
              <p className="mt-2 max-w-[360px] font-open-sans text-[15px] leading-[24px] text-[#050102]/80">
                We&apos;ve received your request. Our team will contact you soon.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 h-[48px] cursor-pointer rounded-[50px] border border-transparent bg-[#A87C4F] px-8 font-sans text-[15px] font-semibold text-white transition-colors duration-300 hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F] md:h-[52px] md:text-[16px]"
              >
                Close
              </button>
            </div>
          ) : (
            <form className="flex flex-col gap-4 md:gap-5" onSubmit={handleSubmit}>
              <div
                className={`transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "120ms" : "0ms" }}
              >
                <label
                  htmlFor="consultation-name"
                  className="mb-2 block px-1 font-open-sans text-[14px] font-semibold text-[#050102] md:text-[15px]"
                >
                  Name
                </label>
                <input
                  id="consultation-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Enter your name"
                  className={fieldClassName}
                />
              </div>

              <div
                className={`transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "180ms" : "0ms" }}
              >
                <label
                  htmlFor="consultation-contact"
                  className="mb-2 block px-1 font-open-sans text-[14px] font-semibold text-[#050102] md:text-[15px]"
                >
                  Contact No
                </label>
                <input
                  id="consultation-contact"
                  name="contact"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.contact}
                  onChange={(event) => updateField("contact", event.target.value)}
                  placeholder="Enter your contact number"
                  className={fieldClassName}
                />
              </div>

              <div
                className={`transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "240ms" : "0ms" }}
              >
                <label
                  htmlFor="consultation-email"
                  className="mb-2 block px-1 font-open-sans text-[14px] font-semibold text-[#050102] md:text-[15px]"
                >
                  Mail ID
                </label>
                <input
                  id="consultation-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="Enter your email address"
                  className={fieldClassName}
                />
              </div>

              <div
                className={`relative z-40 transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
              >
                <label className="mb-2 block px-1 font-open-sans text-[14px] font-semibold text-[#050102] md:text-[15px]">
                  Service Required
                </label>
                <ServiceDropdown
                  value={form.service}
                  onChange={(service) => {
                    updateField("service", service);
                    setServiceError("");
                  }}
                  error={serviceError}
                />
              </div>

              <div
                className={`relative z-0 transition-[opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "360ms" : "0ms" }}
              >
                <label
                  htmlFor="consultation-message"
                  className="mb-2 block px-1 font-open-sans text-[14px] font-semibold text-[#050102] md:text-[15px]"
                >
                  Message
                </label>
                <textarea
                  id="consultation-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder="Tell us about your requirements"
                  className="min-h-[120px] w-full resize-y rounded-[20px] border border-[#F3BB82] bg-white px-5 py-4 font-open-sans text-[15px] leading-[24px] text-[#050102] outline-none transition-colors duration-200 placeholder:text-[#A87C4F]/70 focus:border-[#A87C4F] md:text-[16px]"
                />
              </div>

              {submitError ? (
                <p className="px-1 font-open-sans text-[14px] text-red-500">
                  {submitError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative z-0 mt-1 flex h-[48px] w-full cursor-pointer items-center justify-center rounded-[50px] border border-transparent bg-[#A87C4F] font-sans text-[15px] font-semibold text-white transition-[colors,opacity,transform] duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[#A87C4F] hover:bg-white hover:text-[#A87C4F] disabled:cursor-not-allowed disabled:opacity-60 md:h-[52px] md:text-[16px] ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "420ms" : "0ms" }}
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
