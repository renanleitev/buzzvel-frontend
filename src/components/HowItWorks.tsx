import React from "react";
import type { HowItWorksStep } from "@/types/luma";

export interface HowItWorksProps {
  eyebrow: string;
  heading: string;
  steps: (HowItWorksStep & {
    mobileStepLabel: string;
    mobileDescription: string;
  })[];
}

function StepIcon({ variant }: { variant: HowItWorksStep["variant"] }) {
  if (variant === "blue") {
    return (
      <div className="relative size-[56px] rounded-full bg-[#e2e8ff] shrink-0">
        <div className="absolute left-[8px] top-[8px] size-[24px] rounded-[6px] bg-[#3157f6]" />
      </div>
    );
  }
  if (variant === "orange") {
    return (
      <div className="relative size-[56px] shrink-0">
        <div className="absolute left-[-5.21px] top-[-5.21px] size-[66.419px] flex items-center justify-center">
          <div className="rotate-12 size-[56px] rounded-[8px] bg-[#ff704d]/15 lg:bg-[#ffcb9f]" />
        </div>
        <div className="absolute left-[24px] top-[24px] size-[28px] rounded-full bg-[#ff704d]" />
      </div>
    );
  }
  return (
    <div className="relative size-[56px] rounded-[12px] bg-[#fff1c2] shrink-0">
      <div className="absolute left-[8px] top-[28px] size-[20px] rounded-full bg-[#e9d659]" />
    </div>
  );
}

export function HowItWorks({ eyebrow, heading, steps }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="w-full bg-[#f9f8f3] py-[60px] lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] md:px-[40px] lg:px-[80px]">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <p className="font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-[#3157f6]">
            {eyebrow}
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-[16px] font-display font-extrabold text-[32px] leading-[36px] tracking-[-0.8px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.2px] text-[#171b2c]"
          >
            {heading}
          </h2>
        </div>

        {/* Steps Container */}
        <div className="mt-[40px] lg:mt-[80px] relative lg:py-[28px]">
          {/* Desktop Horizontal Connecting Line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-[52px] top-[56.5px] h-px w-[761px] bg-[#dbdfeb]"
          />

          <ol className="flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-[80px] w-full">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <li
                  key={step.id}
                  className="relative flex flex-col items-start w-full lg:flex-1"
                >
                  {/* Step Content */}
                  <div className="relative z-10 flex flex-col items-start w-full">
                    <StepIcon variant={step.variant} />

                    {/* Step Number Label (Mobile shows STEP 01/02/03, Desktop shows STEP 01 as in Figma) */}
                    <p className="mt-[24px] font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-[#6d7384]">
                      <span className="lg:hidden">{step.mobileStepLabel}</span>
                      <span className="hidden lg:inline">{step.stepLabel}</span>
                    </p>

                    <h3 className="mt-[8px] font-display font-bold text-[20px] leading-[28px] lg:leading-[32px] text-[#171b2c]">
                      {step.title}
                    </h3>

                    <p className="mt-[12px] font-sans font-normal text-[14px] leading-[24px] lg:text-[16px] lg:leading-[28px] text-[#656770]">
                      <span className="lg:hidden">{step.mobileDescription}</span>
                      <span className="hidden lg:inline">{step.description}</span>
                    </p>
                  </div>

                  {/* Mobile Vertical Connecting Line between steps */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="lg:hidden ml-[28px] my-[14px] w-px h-[48px] bg-[#dbdfeb]"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
