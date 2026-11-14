import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedCourse } from "@/components/FeaturedCourse";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonial } from "@/components/Testimonial";
import { PeopleSection } from "@/components/PeopleSection";
import { ContactSection } from "@/components/ContactSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import {
  NAV_ITEMS,
  HERO_DATA,
  CATEGORIES_DATA,
  FEATURED_COURSE_DATA,
  HOW_IT_WORKS_DATA,
  TESTIMONIAL_DATA,
  PEOPLE_SECTION_DATA,
  CONTACT_SECTION_DATA,
  FINAL_CTA_DATA,
  FOOTER_DATA,
} from "@/data/lumaData";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f8f3]">
      <Header navItems={NAV_ITEMS} />
      <main id="main-content" className="flex-1">
        <Hero {...HERO_DATA} />
        <Categories {...CATEGORIES_DATA} />
        <FeaturedCourse {...FEATURED_COURSE_DATA} />
        <HowItWorks {...HOW_IT_WORKS_DATA} />
        <Testimonial {...TESTIMONIAL_DATA} />
        <PeopleSection {...PEOPLE_SECTION_DATA} />
        <ContactSection {...CONTACT_SECTION_DATA} />
        <FinalCTA {...FINAL_CTA_DATA} />
      </main>
      <Footer {...FOOTER_DATA} />
    </div>
  );
}
