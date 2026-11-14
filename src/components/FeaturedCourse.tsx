"use client";

import React, { useState, useEffect } from "react";

export interface FeaturedCourseProps {
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  instructor: string;
  tags: string[];
  image: string;
  imageAlt: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  syllabus: { module: string; title: string; duration: string }[];
}

export function FeaturedCourse({
  badge,
  eyebrow,
  title,
  description,
  instructor,
  tags,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  syllabus,
}: FeaturedCourseProps) {
  const [showSyllabusModal, setShowSyllabusModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSyllabusModal(false);
      }
    };
    if (showSyllabusModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showSyllabusModal]);

  return (
    <section
      id="featured-course"
      aria-labelledby="featured-course-heading"
      className="w-full bg-[#3157f6] py-[60px] lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px] w-full max-w-[1136px]">
          {/* Course Image with Yellow Badge */}
          <div className="relative w-full lg:flex-1">
            <div className="w-full h-[280px] sm:h-[360px] lg:h-[408px] rounded-[16px] overflow-hidden bg-[#2546d9]">
              <img
                src={image}
                alt={imageAlt}
                width={538}
                height={408}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute left-[-12px] top-[-12px] bg-[#ffee7e] rounded-[6px] px-[12px] py-[6px]">
              <span className="block font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-[#171b2c] whitespace-nowrap">
                {badge}
              </span>
            </div>
          </div>

          {/* Course Details */}
          <div className="flex flex-col items-start w-full lg:flex-1">
            <p className="font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-white">
              {eyebrow}
            </p>

            <h2
              id="featured-course-heading"
              className="mt-[16px] font-display font-extrabold text-[32px] leading-[36px] tracking-[-0.8px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.2px] text-white max-w-[536px]"
            >
              {title}
            </h2>

            <p className="mt-[20px] font-sans font-normal text-[14px] leading-[24px] lg:text-[16px] lg:leading-[28px] text-white max-w-[536px]">
              {description}
            </p>

            <p className="mt-[24px] font-sans font-normal text-[14px] leading-[24px] lg:text-[16px] lg:leading-[28px] text-white">
              {instructor}
            </p>

            {/* Metadata Pills */}
            <ul
              aria-label="Course details"
              className="mt-[24px] flex flex-wrap items-center gap-[12px]"
            >
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-[#dbdfeb] rounded-[8px] px-[14px] py-[6px] font-sans font-normal text-[14px] leading-[24px] text-[#e7e7ec] lg:text-white whitespace-nowrap"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="mt-[32px] flex flex-col sm:flex-row items-stretch sm:items-center gap-[12px] w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setShowSyllabusModal(true)}
                className="inline-flex items-center justify-center bg-[#ffee7e] hover:bg-[#ffe855] active:bg-[#f5dc3d] transition-colors px-[28px] py-[14px] rounded-[8px] font-sans font-bold text-[14px] leading-[24px] text-[#171b2c] text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {primaryCta.label}
              </button>

              <a
                href={secondaryCta.href}
                className="group inline-flex items-center justify-center gap-[8px] px-[16px] py-[14px] rounded-[8px] font-sans font-bold text-[14px] leading-[24px] text-[#e7e7ec] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>{secondaryCta.label}</span>
                <img
                  src="/assets/icon-arrow-light.svg"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  className="block size-[20px] transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Course Preview Dialog */}
      {showSyllabusModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-course-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171b2c]/70 p-[20px] backdrop-blur-xs"
          onClick={() => setShowSyllabusModal(false)}
        >
          <div
            className="w-full max-w-[520px] rounded-[16px] bg-white p-[28px] lg:p-[36px] text-[#171b2c] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-[16px]">
              <div>
                <span className="inline-block bg-[#ffee7e] px-[10px] py-[4px] rounded-[6px] font-sans font-semibold text-[11px] uppercase tracking-[1.2px] text-[#171b2c]">
                  {badge}
                </span>
                <h3
                  id="modal-course-title"
                  className="mt-[12px] font-display font-extrabold text-[24px] leading-[30px]"
                >
                  {title}
                </h3>
                <p className="mt-[4px] font-sans text-[14px] text-[#656770]">
                  {instructor}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSyllabusModal(false)}
                aria-label="Close course preview"
                className="rounded-[8px] p-[8px] text-[#656770] hover:bg-[#f9f8f3] hover:text-[#171b2c] font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-[20px] border-t border-[#dbdfeb] pt-[16px]">
              <h4 className="font-sans font-bold text-[13px] uppercase tracking-[1px] text-[#6d7384]">
                Course Syllabus Preview
              </h4>
              <ul className="mt-[12px] space-y-[10px]">
                {syllabus.map((item) => (
                  <li
                    key={item.module}
                    className="flex items-center justify-between rounded-[8px] bg-[#f9f8f3] px-[14px] py-[10px] text-[14px]"
                  >
                    <div>
                      <span className="font-semibold text-[#3157f6] mr-[8px]">
                        {item.module}:
                      </span>
                      <span className="font-medium text-[#171b2c]">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[12px] text-[#6d7384] shrink-0 ml-[8px]">
                      {item.duration}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-[24px] flex justify-end gap-[12px]">
              <button
                type="button"
                onClick={() => setShowSyllabusModal(false)}
                className="px-[20px] py-[10px] rounded-[8px] border border-[#dbdfeb] font-sans font-bold text-[14px] text-[#171b2c] hover:bg-[#f9f8f3]"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setShowSyllabusModal(false)}
                className="px-[20px] py-[10px] rounded-[8px] bg-[#3157f6] hover:bg-[#2546d9] font-sans font-bold text-[14px] text-white"
              >
                Enroll in course
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
