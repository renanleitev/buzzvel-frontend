"use client";

import React, { useState, useEffect } from "react";
import type { NavItem } from "@/types/luma";

export interface HeaderProps {
  navItems: NavItem[];
}

export function Header({ navItems }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#f9f8f3] border-b border-[#dbdfeb]">
      <div className="mx-auto flex h-[68px] lg:h-[70px] max-w-[1280px] items-center justify-between px-[20px] md:px-[40px] lg:px-[80px]">
        {/* Brand Logo */}
        <a
          href="#"
          aria-label="Luma Home"
          className="relative inline-flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3157f6] rounded-sm"
        >
          <img
            src="/assets/logo-luma-dark.svg"
            alt="luma."
            width={53.738}
            height={16.918}
            className="block h-[16.918px] w-[53.738px]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-[32px]"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] leading-[24px] font-normal text-[#656770] hover:text-[#171b2c] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3157f6] rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-[8px]">
          <a
            href="#contact"
            className="px-[16px] py-[10px] text-[14px] leading-[24px] font-normal text-[#656770] hover:text-[#171b2c] transition-colors rounded-[8px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3157f6]"
          >
            Log in
          </a>
          <a
            href="#categories"
            className="bg-[#3157f6] hover:bg-[#2546d9] active:bg-[#1d39b8] transition-colors px-[20px] py-[10px] rounded-[8px] text-[14px] leading-[24px] font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3157f6]"
          >
            Start learning
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? "Close menu" : "Toggle menu"}
          className="lg:hidden flex items-center justify-center p-[6px] rounded-[8px] text-[#171b2c] hover:bg-[#dbdfeb]/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3157f6]"
        >
          <img
            src="/assets/icon-menu.svg"
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className="block size-[24px]"
          />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[#dbdfeb] bg-[#f9f8f3] px-[20px] py-[20px] shadow-md"
        >
          <ul className="flex flex-col gap-[12px]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-[6px] text-[16px] leading-[24px] font-normal text-[#171b2c] hover:text-[#3157f6] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-[20px] flex flex-col gap-[12px] border-t border-[#dbdfeb] pt-[16px]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-[12px] text-center text-[14px] leading-[24px] font-bold text-[#171b2c] bg-white border border-[#dbdfeb] rounded-[8px] hover:bg-gray-50 transition-colors"
            >
              Log in
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-[12px] text-center text-[14px] leading-[24px] font-bold text-white bg-[#3157f6] hover:bg-[#2546d9] rounded-[8px] transition-colors"
            >
              Start learning
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
