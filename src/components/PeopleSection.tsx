import React from "react";
import type { PeopleColumnImage } from "@/types/luma";

export interface PeopleSectionProps {
  eyebrow: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  columns: PeopleColumnImage[][];
}

export function PeopleSection({
  eyebrow,
  heading,
  description,
  ctaLabel,
  ctaHref,
  columns,
}: PeopleSectionProps) {
  return (
    <section
      id="the-people"
      aria-labelledby="people-heading"
      className="w-full bg-[#f9f8f3] py-[60px] lg:py-[100px] overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[32px] lg:gap-[60px]">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-[24px] lg:gap-[32px] w-full lg:flex-1 max-w-[530px]">
            <div className="flex flex-col items-start gap-[8px] w-full">
              <p className="font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-[#3157f6]">
                {eyebrow}
              </p>
              <h2
                id="people-heading"
                className="font-display font-extrabold text-[32px] leading-[36px] tracking-[-0.8px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.2px] text-[#171b2c]"
              >
                {heading}
              </h2>
            </div>

            <p className="font-sans font-normal text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] text-[#171b2c] lg:text-[#656770]">
              {description}
            </p>

            <a
              href={ctaHref}
              className="inline-flex items-center justify-center h-[54px] px-[28px] py-[14px] rounded-[8px] bg-white hover:bg-[#e2e8ff]/40 transition-colors border border-[#dbdfeb] font-sans font-bold text-[14px] leading-[24px] text-[#171b2c] text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3157f6]"
            >
              {ctaLabel}
            </a>
          </div>

          {/* Photo Collage */}
          <div className="relative flex items-center justify-between sm:justify-center gap-[8px] sm:gap-[12px] lg:gap-[16px] w-full max-w-[362px] sm:max-w-[530px] lg:flex-1 mx-auto lg:mx-0">
            {/* Background Light Blue Circle */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[330px] sm:size-[420px] lg:size-[500px] rounded-full bg-[#e2e8ff]"
            />

            {/* Column 1 */}
            <div className="relative z-10 flex flex-col items-end justify-center gap-[8px] lg:gap-[12.84px] pt-[48px] lg:pt-[64.2px] shrink-0">
              <div className="w-[72px] h-[96px] sm:w-[88px] sm:h-[125px] lg:w-[102.72px] lg:h-[154.08px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[0][0].src}
                  alt={columns[0][0].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="w-[94px] h-[129px] sm:w-[116px] sm:h-[168px] lg:w-[138.03px] lg:h-[207.05px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[0][1].src}
                  alt={columns[0][1].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative z-10 flex flex-col items-start gap-[8px] lg:gap-[12.84px] lg:pt-[25.68px] shrink-0">
              <div className="w-[72px] h-[106px] sm:w-[88px] sm:h-[138px] lg:w-[102.72px] lg:h-[170.13px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[1][0].src}
                  alt={columns[1][0].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="w-[72px] h-[107.5px] sm:w-[88px] sm:h-[140px] lg:w-[102.72px] lg:h-[172.54px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[1][1].src}
                  alt={columns[1][1].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="w-[72px] h-[80px] sm:w-[88px] sm:h-[104px] lg:w-[102.72px] lg:h-[128.4px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[1][2].src}
                  alt={columns[1][2].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="relative z-10 flex flex-col items-start gap-[8px] lg:gap-[12.84px] shrink-0">
              <div className="w-[72px] h-[85.5px] sm:w-[88px] sm:h-[112px] lg:w-[102.72px] lg:h-[137.23px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[2][0].src}
                  alt={columns[2][0].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="w-[72px] h-[86px] sm:w-[88px] sm:h-[112px] lg:w-[102.72px] lg:h-[138.03px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[2][1].src}
                  alt={columns[2][1].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="w-[72px] h-[96px] sm:w-[88px] sm:h-[125px] lg:w-[102.72px] lg:h-[154.08px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[2][2].src}
                  alt={columns[2][2].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>

            {/* Column 4 */}
            <div className="relative z-10 flex flex-col items-start justify-center gap-[8px] lg:gap-[12.84px] shrink-0">
              <div className="w-[88px] h-[127.5px] sm:w-[108px] sm:h-[166px] lg:w-[128.4px] lg:h-[204.64px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[3][0].src}
                  alt={columns[3][0].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="w-[72px] h-[82.5px] sm:w-[88px] sm:h-[108px] lg:w-[102.72px] lg:h-[132.42px] rounded-[5px] lg:rounded-[4.013px] overflow-hidden shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_0px_4px_0px_rgba(0,0,0,0.07)]">
                <img
                  src={columns[3][1].src}
                  alt={columns[3][1].alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
