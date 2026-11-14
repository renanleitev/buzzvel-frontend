"use client";

import React, { useState } from "react";
import type { CategoryItem } from "@/types/luma";

export interface CategoriesProps {
  eyebrow: string;
  heading: string;
  description: string;
  items: CategoryItem[];
}

export function Categories({
  eyebrow,
  heading,
  description,
  items,
}: CategoriesProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const selectedCategory = items.find((item) => item.id === selectedCategoryId);

  return (
    <section
      id="categories"
      aria-labelledby="categories-heading"
      className="w-full bg-white py-[60px] lg:py-[100px]"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col items-start max-w-[560px]">
          <p className="font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-[#3157f6]">
            {eyebrow}
          </p>
          <h2
            id="categories-heading"
            className="mt-[16px] font-display font-extrabold text-[32px] leading-[36px] tracking-[-0.8px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-1.2px] text-[#171b2c]"
          >
            {heading}
          </h2>
          <p className="mt-[16px] font-sans font-normal text-[16px] leading-[26px] lg:text-[18px] lg:leading-[28px] text-[#656770]">
            {description}
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="mt-[48px] lg:mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[20px]">
          {items.map((item) => {
            const isSelected = selectedCategoryId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategoryId((prev) =>
                    prev === item.id ? null : item.id
                  );
                }}
                aria-expanded={isSelected}
                className={`group flex flex-col justify-between min-h-[227px] lg:min-h-[264.5px] p-[24px] lg:p-[28px] rounded-[16px] border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3157f6] ${
                  isSelected
                    ? "border-[#3157f6] bg-[#f9f8f3] shadow-sm"
                    : "border-[#dbdfeb] bg-white hover:border-[#3157f6]/60 hover:shadow-sm"
                }`}
              >
                <div className="flex flex-col items-start w-full">
                  <div className="h-[46.5px] w-full flex items-start">
                    <span className="inline-flex items-center justify-center bg-[#e2e8ff] rounded-[6px] px-[8px] py-[4px] font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-[#3157f6]">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[20px] leading-[28px] lg:leading-[32px] text-[#171b2c]">
                    {item.title}
                  </h3>
                  <p className="mt-[12px] font-sans font-normal text-[14px] leading-[24px] text-[#6d7384]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-[24px] flex items-center gap-[8px]">
                  <span className="font-sans font-bold text-[14px] leading-[24px] text-[#171b2c] group-hover:text-[#3157f6] transition-colors">
                    Explore
                  </span>
                  <img
                    src="/assets/icon-arrow-dark.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="block size-[20px] transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* Interactive Category Preview Banner when a category is clicked */}
        {selectedCategory && (
          <div
            role="region"
            aria-live="polite"
            aria-label={`${selectedCategory.title} category details`}
            className="mt-[24px] rounded-[16px] border border-[#dbdfeb] bg-[#f9f8f3] p-[20px] lg:p-[24px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px]"
          >
            <div>
              <div className="flex items-center gap-[10px]">
                <span className="bg-[#e2e8ff] text-[#3157f6] font-sans font-semibold text-[12px] px-[8px] py-[2px] rounded-[6px]">
                  {selectedCategory.courseCount} courses available
                </span>
                <h4 className="font-display font-bold text-[18px] text-[#171b2c]">
                  {selectedCategory.title} Track
                </h4>
              </div>
              <p className="mt-[6px] font-sans text-[14px] leading-[24px] text-[#656770]">
                Popular topics: <strong className="text-[#171b2c]">{selectedCategory.featuredTopic}</strong>
              </p>
            </div>
            <div className="flex items-center gap-[12px]">
              <a
                href="#featured-course"
                className="bg-[#3157f6] hover:bg-[#2546d9] text-white font-sans font-bold text-[14px] px-[20px] py-[10px] rounded-[8px] transition-colors"
              >
                See featured course
              </a>
              <button
                type="button"
                onClick={() => setSelectedCategoryId(null)}
                className="text-[14px] font-sans text-[#656770] hover:text-[#171b2c] px-[12px] py-[10px] rounded-[8px]"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
