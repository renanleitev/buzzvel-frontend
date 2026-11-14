import React from "react";
import type { FooterColumn } from "@/types/luma";

export interface FooterProps {
  tagline: string;
  copyright: string;
  columns: FooterColumn[];
}

export function Footer({ tagline, copyright, columns }: FooterProps) {
  return (
    <footer
      id="footer"
      className="w-full bg-[#171b2c] pt-[60px] pb-[20px] lg:pt-[80px] lg:pb-[40px]"
    >
      <div className="mx-auto max-w-[1280px] px-[20px] md:px-[40px] lg:px-[80px]">
        <div className="flex flex-col lg:grid lg:grid-cols-[416px_208px_208px_208px] gap-y-[40px] lg:gap-x-[32px] w-full">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <a
              href="#"
              aria-label="Luma Home"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white rounded-xs"
            >
              <img
                src="/assets/logo-luma-white.svg"
                alt="luma."
                width={53.738}
                height={16.918}
                className="block w-[53.738px] h-[16.918px]"
              />
            </a>
            <p className="mt-[12px] font-sans font-normal text-[14px] leading-[24px] text-[#9e9faa] max-w-[362px] lg:max-w-[240px]">
              {tagline}
            </p>
          </div>

          {/* Link Columns (2-col grid for first two on mobile, 3rd below, or 4-col grid on desktop) */}
          <div className="grid grid-cols-2 gap-x-[40px] gap-y-[40px] lg:contents">
            {columns.map((column) => (
              <div
                key={column.title}
                className="flex flex-col items-start col-span-1 last:col-span-2 lg:last:col-span-1"
              >
                <h2 className="font-sans font-semibold text-[12px] leading-[16px] tracking-[1.44px] uppercase text-[#e7e7ec]">
                  {column.title}
                </h2>
                <ul className="mt-[16px] flex flex-col gap-[12px]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-sans font-normal text-[14px] leading-[24px] text-[#9e9faa] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-xs"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-[48px] lg:mt-[64px] border-t border-[#656770] pt-[24px]">
          <p className="font-sans font-normal text-[13px] leading-[19.5px] text-[#e7e7ec] text-center lg:text-left">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
