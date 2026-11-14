import React from "react";

export interface FinalCTAProps {
  avatars: { src: string; alt: string }[];
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function FinalCTA({
  avatars,
  heading,
  description,
  primaryCta,
  secondaryCta,
}: FinalCTAProps) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative w-full bg-[#fff1c2] py-[60px] lg:py-[100px] overflow-hidden"
    >
      {/* Decorative Background Elements (Desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:block pointer-events-none absolute inset-0 mx-auto max-w-[1280px]"
      >
        {/* Top-left outlined circle */}
        <div className="absolute left-[22px] top-[16.06px] size-[108px] rounded-full border-2 border-[#ffcb9f]" />
        {/* Bottom-left solid circle */}
        <div className="absolute left-[56px] top-[373.06px] size-[120px] rounded-full bg-[#ffcb9f]" />
        {/* Bottom-right small solid circle */}
        <div className="absolute left-[1064px] top-[468.37px] size-[40px] rounded-full bg-[#ffcb9f]" />
        {/* Top-right rotated rounded square */}
        <div className="absolute left-[1144px] top-[-23.94px] size-[136.465px] flex items-center justify-center">
          <div className="rotate-12 size-[115.057px] rounded-[8px] bg-[#ffcb9f]" />
        </div>
        {/* Left-edge rotated rounded square */}
        <div className="absolute left-[-33px] top-[230.06px] size-[66.419px] flex items-center justify-center">
          <div className="rotate-12 size-[56px] rounded-[8px] bg-[#ffcb9f]" />
        </div>
        {/* Far-bottom-right outlined circle */}
        <div className="absolute left-[1208px] top-[429.09px] size-[32px] rounded-full border-2 border-[#ffcb9f]" />
        {/* Top-center-right outlined circle */}
        <div className="absolute left-[877px] top-[43.06px] size-[32px] rounded-full border-2 border-[#ffcb9f]" />
        {/* Top-left-center rotated outlined square */}
        <div className="absolute left-[317px] top-[42.37px] size-[66.419px] flex items-center justify-center">
          <div className="rotate-12 size-[56px] rounded-[8px] border border-[#ffcb9f]" />
        </div>

        {/* Floating SVG Icons */}
        <div className="absolute left-[272px] top-[360.06px] size-[101.114px] flex items-center justify-center">
          <div className="rotate-15">
            <img
              src="/assets/cta-icon-b.svg"
              alt=""
              width={82.56}
              height={82.56}
              className="block size-[82.56px]"
            />
          </div>
        </div>

        <div className="absolute left-[1080px] top-[180.37px] size-[160px]">
          <img
            src="/assets/cta-icon-cube-container.svg"
            alt=""
            width={160}
            height={160}
            className="block size-[160px]"
          />
        </div>

        <div className="absolute left-[141px] top-[214.06px] size-[32px]">
          <img
            src="/assets/cta-icon-bubble.svg"
            alt=""
            width={32}
            height={32}
            className="block size-[32px]"
          />
        </div>

        <div className="absolute left-[1016px] top-[82.06px] size-[61.376px]">
          <img
            src="/assets/cta-icon-drop.svg"
            alt=""
            width={61.376}
            height={61.376}
            className="block size-[61.376px]"
          />
        </div>

        <div className="absolute left-[963px] top-[381.06px] size-[48px]">
          <img
            src="/assets/cta-icon-book.svg"
            alt=""
            width={48}
            height={48}
            className="block size-[48px]"
          />
        </div>
      </div>

      {/* Main CTA Content */}
      <div className="relative z-10 mx-auto flex flex-col items-center max-w-[720px] px-[20px] sm:px-[32px]">
        {/* Overlapping Avatars */}
        <div className="flex items-center justify-center">
          {avatars.map((avatar, index) => (
            <div
              key={avatar.src}
              className={`relative size-[40px] rounded-full border-2 border-[#ffee7e] bg-[#e2e8ff] overflow-hidden ${
                index > 0 ? "-ml-[8px]" : ""
              }`}
            >
              <img
                src={avatar.src}
                alt={avatar.alt}
                width={40}
                height={40}
                loading="lazy"
                className="size-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>

        <h2
          id="final-cta-heading"
          className="mt-[32px] font-display font-extrabold text-[40px] leading-[44px] tracking-[-1px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-1.4px] text-[#171b2c] text-center"
        >
          {heading}
        </h2>

        <p className="mt-[16px] font-sans font-normal text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] text-[#656770] text-center">
          {description}
        </p>

        <div className="mt-[40px] flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-[12px] w-full sm:w-auto">
          <a
            href={primaryCta.href}
            className="inline-flex items-center justify-center bg-[#3157f6] hover:bg-[#2546d9] active:bg-[#1d39b8] transition-colors px-[28px] py-[14px] rounded-[8px] font-sans font-bold text-[14px] leading-[24px] text-white text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3157f6]"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="inline-flex items-center justify-center bg-white hover:bg-[#f9f8f3] transition-colors border border-[#dbdfeb] px-[28px] py-[14px] rounded-[8px] font-sans font-bold text-[14px] leading-[24px] text-[#171b2c] text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3157f6]"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
