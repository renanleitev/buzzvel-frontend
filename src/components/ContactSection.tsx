"use client";

import React, { useState } from "react";
import type { ContactInfoCard } from "@/types/luma";

export interface ContactSectionProps {
  eyebrow: string;
  heading: string;
  description: string;
  cards: ContactInfoCard[];
  form: {
    title: string;
    descriptionDesktop: string;
    descriptionMobile: string;
    fields: {
      name: {
        labelDesktop: string;
        labelMobile: string;
        placeholderDesktop: string;
        placeholderMobile: string;
      };
      email: {
        labelDesktop: string;
        labelMobile: string;
        placeholderDesktop: string;
        placeholderMobile: string;
      };
      question: {
        labelDesktop: string;
        labelMobile: string;
        placeholderDesktop: string;
        placeholderMobile: string;
      };
    };
    submitDesktop: string;
    submitMobile: string;
  };
}

interface FormErrors {
  name?: string;
  email?: string;
  question?: string;
}

export function validateContactForm(values: {
  name: string;
  email: string;
  question: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your full name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.question.trim()) {
    errors.question = "Please enter your question or message.";
  }
  return errors;
}

export function ContactSection({
  eyebrow,
  heading,
  description,
  cards,
  form,
}: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateContactForm({ name, email, question });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setQuestion("");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full bg-white py-[60px] lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[40px] lg:gap-[60px]">
          {/* Info Column */}
          <div className="flex flex-col items-start gap-[32px] lg:gap-[40px] w-full lg:w-[480px] shrink-0">
            <div className="flex flex-col items-start gap-[16px] w-full">
              <p className="font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-[#3157f6]">
                {eyebrow}
              </p>
              <h2
                id="contact-heading"
                className="font-display font-extrabold text-[32px] leading-[36px] tracking-[-0.8px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.2px] text-[#171b2c]"
              >
                {heading}
              </h2>
              <p className="font-sans font-normal text-[14px] leading-[24px] lg:text-[18px] lg:leading-[28px] text-[#656770]">
                {description}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col items-start gap-[16px] w-full">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="flex items-center gap-[16px] p-[16px] lg:p-[20px] rounded-[12px] bg-[#f9f8f3] w-full"
                >
                  <div className="flex items-center justify-center size-[40px] rounded-[8px] bg-[#e2e8ff] p-[10px] shrink-0">
                    <img
                      src={card.iconSrc}
                      alt=""
                      aria-hidden="true"
                      width={card.iconSize}
                      height={card.iconSize}
                      style={{
                        width: `${card.iconSize}px`,
                        height: `${card.iconSize}px`,
                      }}
                      className="block shrink-0"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[2px] lg:gap-[4px] min-w-0">
                    <span className="font-sans font-normal text-[14px] leading-[24px] text-[#171b2c]">
                      {card.title}
                    </span>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="font-sans font-normal text-[14px] leading-[24px] text-[#3157f6] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3157f6] rounded-xs"
                      >
                        {card.detail}
                      </a>
                    ) : (
                      <span className="font-sans font-normal text-[14px] leading-[24px] text-[#6d7384]">
                        {card.detail}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="w-full lg:w-[540px] rounded-[16px] bg-white border border-[#dbdfeb] px-[20px] py-[24px] sm:p-[32px] lg:p-[40px] shadow-[0px_12px_16px_rgba(23,27,44,0.04)] shrink-0">
            <div className="flex flex-col items-start gap-[8px] w-full">
              <h3 className="font-display font-bold text-[20px] leading-[32px] text-[#171b2c]">
                {form.title}
              </h3>
              <p className="font-sans font-normal text-[14px] leading-[24px] text-[#656770]">
                {form.descriptionDesktop}
              </p>
            </div>

            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-[24px] rounded-[12px] bg-[#f9f8f3] border border-[#3157f6]/30 p-[24px] text-left"
              >
                <p className="font-display font-bold text-[18px] text-[#171b2c]">
                  Message sent!
                </p>
                <p className="mt-[8px] font-sans text-[14px] leading-[24px] text-[#656770]">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours on business days.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-[16px] inline-flex items-center justify-center rounded-[8px] bg-[#3157f6] hover:bg-[#2546d9] px-[20px] py-[10px] font-sans font-bold text-[14px] text-white transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-[24px] flex flex-col gap-[24px] w-full"
              >
                <div className="flex flex-col gap-[20px] w-full">
                  {/* Full Name Field */}
                  <div className="flex flex-col items-start gap-[8px] w-full">
                    <label
                      htmlFor="contact-full-name"
                      className="font-sans font-bold text-[14px] leading-[24px] text-[#171b2c]"
                    >
                      {form.fields.name.labelDesktop}
                    </label>
                    <input
                      id="contact-full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name)
                          setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder={form.fields.name.placeholderDesktop}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "contact-full-name-error" : undefined
                      }
                      className={`w-full rounded-[8px] bg-[#f9f8f3] border px-[16px] py-[12px] font-sans font-normal text-[14px] leading-[24px] text-[#171b2c] placeholder:text-[#6d7384] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3157f6] ${
                        errors.name ? "border-[#ff704d]" : "border-[#dbdfeb]"
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="contact-full-name-error"
                        role="alert"
                        className="font-sans text-[12px] leading-[16px] text-[#ff704d]"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col items-start gap-[8px] w-full">
                    <label
                      htmlFor="contact-email"
                      className="font-sans font-bold text-[14px] leading-[24px] text-[#171b2c]"
                    >
                      {form.fields.email.labelDesktop}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email)
                          setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder={form.fields.email.placeholderDesktop}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? "contact-email-error" : undefined
                      }
                      className={`w-full rounded-[8px] bg-[#f9f8f3] border px-[16px] py-[12px] font-sans font-normal text-[14px] leading-[24px] text-[#171b2c] placeholder:text-[#6d7384] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3157f6] ${
                        errors.email ? "border-[#ff704d]" : "border-[#dbdfeb]"
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="contact-email-error"
                        role="alert"
                        className="font-sans text-[12px] leading-[16px] text-[#ff704d]"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Question Field */}
                  <div className="flex flex-col items-start gap-[8px] w-full">
                    <label
                      htmlFor="contact-question"
                      className="font-sans font-bold text-[14px] leading-[24px] text-[#171b2c]"
                    >
                      {form.fields.question.labelDesktop}
                    </label>
                    <textarea
                      id="contact-question"
                      name="question"
                      rows={4}
                      value={question}
                      onChange={(e) => {
                        setQuestion(e.target.value);
                        if (errors.question)
                          setErrors((prev) => ({
                            ...prev,
                            question: undefined,
                          }));
                      }}
                      placeholder={form.fields.question.placeholderDesktop}
                      aria-invalid={Boolean(errors.question)}
                      aria-describedby={
                        errors.question ? "contact-question-error" : undefined
                      }
                      className={`w-full h-[100px] lg:h-[120px] resize-none rounded-[8px] bg-[#f9f8f3] border px-[16px] py-[14px] font-sans font-normal text-[14px] leading-[24px] text-[#171b2c] placeholder:text-[#6d7384] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3157f6] ${
                        errors.question
                          ? "border-[#ff704d]"
                          : "border-[#dbdfeb]"
                      }`}
                    />
                    {errors.question && (
                      <p
                        id="contact-question-error"
                        role="alert"
                        className="font-sans text-[12px] leading-[16px] text-[#ff704d]"
                      >
                        {errors.question}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center rounded-[8px] bg-[#3157f6] hover:bg-[#2546d9] active:bg-[#1d39b8] transition-colors px-[28px] py-[14px] font-sans font-bold text-[14px] leading-[24px] text-white text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3157f6]"
                >
                  {form.submitDesktop}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
