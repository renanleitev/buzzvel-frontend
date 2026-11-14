import React from "react";

export interface HeroProps {
  eyebrow: string;
  heading: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  avatars: { src: string; alt: string }[];
  trustedBold: string;
  trustedSuffix: string;
  mainImage: { src: string; alt: string };
  floatingBadgeTop: { count: string; label: string };
  floatingBadgeBottom: { rating: string; stars: number };
}

export function Hero({
  eyebrow,
  heading,
  description,
  primaryCta,
  secondaryCta,
  avatars,
  trustedBold,
  trustedSuffix,
  mainImage,
  floatingBadgeTop,
  floatingBadgeBottom,
}: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full bg-[#f9f8f3] py-[60px] lg:py-[100px] overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[40px] lg:gap-[60px]">
          {/* Text Column (Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 lg:order-1 flex flex-col items-start w-full max-w-[560px] lg:flex-1">
            <p className="font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-[#3157f6]">
              {eyebrow}
            </p>

            <h1
              id="hero-heading"
              className="mt-[16px] font-display font-extrabold text-[40px] leading-[44px] tracking-[-1px] sm:text-[52px] sm:leading-[58px] lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.6px] text-[#171b2c]"
            >
              {heading}
            </h1>

            <p className="mt-[24px] font-sans font-normal text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] text-[#656770] max-w-[480px]">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="mt-[32px] flex flex-col sm:flex-row items-stretch sm:items-center gap-[12px] w-full sm:w-auto">
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

            {/* Trusted By Learners */}
            <div className="mt-[32px] flex items-center justify-center lg:justify-start gap-[12px] w-full">
              <div className="flex items-center">
                {avatars.map((avatar, index) => (
                  <div
                    key={avatar.src}
                    className={`relative size-[32px] rounded-full border-2 border-[#f9f8f3] bg-[#e2e8ff] overflow-hidden ${
                      index > 0 ? "-ml-[8px]" : ""
                    }`}
                  >
                    <img
                      src={avatar.src}
                      alt={avatar.alt}
                      width={32}
                      height={32}
                      className="size-full object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>
              <p className="font-sans text-[14px] leading-[24px] text-[#171b2c]">
                <strong className="font-bold">{trustedBold}</strong>{" "}
                <span className="font-normal text-[#656770]">
                  {trustedSuffix}
                </span>
              </p>
            </div>
          </div>

          {/* Image & Floating Badges Column (Order 1 on mobile, Order 2 on desktop) */}
          <div className="order-1 lg:order-2 relative w-full max-w-[362px] sm:max-w-[440px] lg:max-w-none lg:w-[500px] h-[380px] sm:h-[440px] lg:h-[520px] shrink-0 mx-auto lg:mx-0">
            {/* Decorative Orange Shape Right */}
            <div
              aria-hidden="true"
              className="absolute bg-[#ffcb9f] rounded-[16px] top-[24px] h-[342px] sm:h-[400px] lg:h-[468px] left-[100.5px] right-[-10px] lg:left-[450px] lg:right-auto lg:w-[89px]"
            />

            {/* Decorative Blue Circle Bottom-Left */}
            <div
              aria-hidden="true"
              className="absolute bg-[#e2e8ff] rounded-full size-[64px] lg:size-[106px] left-[-10px] lg:left-[-44.8px] top-[304px] lg:top-[403px]"
            />

            {/* Main Hero Image */}
            <div className="relative mx-auto lg:mx-0 w-[calc(100%-16px)] lg:w-[500px] h-full rounded-[16px] lg:rounded-[24px] bg-[#e2e8ff] overflow-hidden">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                width={500}
                height={520}
                fetchPriority="high"
                className="size-full object-cover"
              />
            </div>

            {/* Top-left Floating Card: 120+ expert-led courses */}
            <div className="absolute left-0 lg:left-[-22px] top-[6px] lg:top-[16px] bg-white rounded-[12px] px-[16px] py-[12px] flex items-center gap-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
              <span className="bg-[#e2e8ff] rounded-[8px] px-[8px] h-[32px] inline-flex items-center justify-center font-sans font-bold text-[14px] leading-[24px] text-[#3157f6]">
                {floatingBadgeTop.count}
              </span>
              <span className="font-sans font-normal text-[14px] leading-[24px] text-[#171b2c] whitespace-nowrap">
                {floatingBadgeTop.label}
              </span>
            </div>

            {/* Bottom-right Floating Card: 4.9 avg rating */}
            <div className="absolute right-[-11px] lg:right-auto lg:left-[348.2px] top-[296.5px] sm:top-[356px] lg:top-[436.5px] bg-white rounded-[12px] px-[16px] py-[12px] flex items-center gap-[8px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
              <div
                className="flex items-center gap-[2px]"
                aria-label={`${floatingBadgeBottom.stars} out of 5 stars`}
              >
                {Array.from({ length: floatingBadgeBottom.stars }).map(
                  (_, idx) => (
                    <img
                      key={idx}
                      src="/assets/icon-star.svg"
                      alt=""
                      aria-hidden="true"
                      width={14}
                      height={14}
                      className="block size-[14px]"
                    />
                  )
                )}
              </div>
              <span className="font-sans font-normal text-[14px] leading-[24px] text-[#171b2c] whitespace-nowrap">
                {floatingBadgeBottom.rating}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
