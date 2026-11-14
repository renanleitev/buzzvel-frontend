import React from "react";
import type { TestimonialData } from "@/types/luma";

export type TestimonialProps = TestimonialData;

export function Testimonial({
  quote,
  authorName,
  authorRole,
  authorImage,
  stats,
}: TestimonialProps) {
  return (
    <section
      id="testimonials"
      aria-label="Learner testimonial and key metrics"
      className="w-full bg-white py-[60px] lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-[60px] w-full max-w-[1136px]">
          {/* Quote Block */}
          <figure className="flex flex-col items-start justify-center w-full max-w-[600px] lg:flex-1">
            <img
              src="/assets/icon-quote.svg"
              alt=""
              aria-hidden="true"
              width={23.711}
              height={21.953}
              className="block w-[23.711px] h-[21.953px]"
            />

            <blockquote className="mt-[16px]">
              <p className="font-display font-semibold text-[20px] leading-[32px] lg:text-[30px] lg:leading-[44px] lg:tracking-[-0.75px] text-[#171b2c]">
                {quote}
              </p>
            </blockquote>

            <figcaption className="mt-[32px] flex items-center gap-[16px]">
              <div className="relative size-[48px] rounded-full bg-[#e2e8ff] overflow-hidden shrink-0">
                <img
                  src={authorImage}
                  alt={authorName}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="size-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-sans font-bold text-[16px] leading-[26px] lg:leading-[28px] text-[#171b2c]">
                  {authorName}
                </span>
                <span className="font-sans font-normal text-[14px] leading-[24px] text-[#656770]">
                  {authorRole}
                </span>
              </div>
            </figcaption>
          </figure>

          {/* Stats Block (3 columns on mobile/tablet, vertical stack with left border on desktop) */}
          <dl className="grid grid-cols-3 lg:flex lg:flex-col gap-[12px] sm:gap-[24px] lg:gap-[20px] w-full lg:w-[401px] lg:border-l lg:border-[#dbdfeb] lg:pl-[48px] shrink-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start min-w-0"
              >
                <dt className="order-2 pt-[4px] font-sans font-normal text-[14px] leading-[24px] text-[#6d7384] max-w-[105px] lg:max-w-none">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display font-extrabold text-[40px] leading-[44px] tracking-[-1px] lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.6px] text-[#3157f6]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
