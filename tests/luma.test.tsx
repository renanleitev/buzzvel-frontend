import "./setup-dom";
import test, { afterEach } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import React from "react";
import { render, screen, fireEvent, cleanup, within } from "@testing-library/react";

import HomePage from "../src/app/page";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { Categories } from "../src/components/Categories";
import { FeaturedCourse } from "../src/components/FeaturedCourse";
import { HowItWorks } from "../src/components/HowItWorks";
import { Testimonial } from "../src/components/Testimonial";
import { PeopleSection } from "../src/components/PeopleSection";
import { ContactSection, validateContactForm } from "../src/components/ContactSection";
import { FinalCTA } from "../src/components/FinalCTA";
import { Footer } from "../src/components/Footer";
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
} from "../src/data/lumaData";

afterEach(() => {
  cleanup();
});

// ---------------------------------------------------------------------------
// 1. Static Asset Integrity Tests
// ---------------------------------------------------------------------------

test("All static assets referenced in lumaData exist and are non-empty", () => {
  const dataFile = fs.readFileSync(
    path.join(process.cwd(), "src/data/lumaData.ts"),
    "utf8"
  );
  const assetMatches = [...dataFile.matchAll(/["'](\/assets\/[^"']+)["']/g)];
  assert.ok(assetMatches.length > 0, "Expected asset paths in lumaData.ts");

  for (const match of assetMatches) {
    const relativeAssetPath = match[1];
    const fullPath = path.join(process.cwd(), "public", relativeAssetPath);
    assert.ok(
      fs.existsSync(fullPath),
      `Asset file missing on disk: ${relativeAssetPath}`
    );
    const stats = fs.statSync(fullPath);
    assert.ok(
      stats.size > 0,
      `Asset file is empty (0 bytes): ${relativeAssetPath}`
    );
  }
});

test("All component SVG/PNG assets exist on disk and are non-empty", () => {
  const componentsDir = path.join(process.cwd(), "src/components");
  const files = fs
    .readdirSync(componentsDir)
    .filter((f) => f.endsWith(".tsx") && !f.endsWith(".stories.tsx"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(componentsDir, file), "utf8");
    const matches = [...content.matchAll(/["'](\/assets\/[^"']+)["']/g)];
    for (const match of matches) {
      const assetPath = path.join(process.cwd(), "public", match[1]);
      assert.ok(
        fs.existsSync(assetPath),
        `Missing asset ${match[1]} referenced in ${file}`
      );
      assert.ok(
        fs.statSync(assetPath).size > 0,
        `Empty asset ${match[1]} referenced in ${file}`
      );
    }
  }
});

// ---------------------------------------------------------------------------
// 2. Full HomePage Rendering with Defined Data
// ---------------------------------------------------------------------------

test("HomePage renders all required sections and semantic landmarks with defined data", () => {
  const { container } = render(<HomePage />);

  // Semantic landmarks
  assert.ok(container.querySelector("header"), "Should render a <header> landmark");
  assert.ok(container.querySelector("main#main-content"), "Should render <main id='main-content'>");
  assert.ok(container.querySelector("footer#footer"), "Should render <footer id='footer'>");

  // Verify primary headings from every section render in the document
  assert.ok(screen.getByRole("heading", { level: 1, name: HERO_DATA.heading }));
  assert.ok(screen.getByRole("heading", { level: 2, name: CATEGORIES_DATA.heading }));
  assert.ok(screen.getByRole("heading", { level: 2, name: FEATURED_COURSE_DATA.title }));
  assert.ok(screen.getByRole("heading", { level: 2, name: HOW_IT_WORKS_DATA.heading }));
  assert.ok(screen.getByRole("heading", { level: 2, name: PEOPLE_SECTION_DATA.heading }));
  assert.ok(screen.getByRole("heading", { level: 2, name: CONTACT_SECTION_DATA.heading }));
  assert.ok(screen.getByRole("heading", { level: 2, name: FINAL_CTA_DATA.heading }));
});

// ---------------------------------------------------------------------------
// 3. Individual Component Data & Interaction Tests
// ---------------------------------------------------------------------------

test("Header renders navigation items, CTAs, and toggles mobile menu drawer", () => {
  render(<Header navItems={NAV_ITEMS} />);

  // Desktop nav links
  const desktopNav = screen.getByRole("navigation", { name: /main navigation/i });
  for (const item of NAV_ITEMS) {
    const link = within(desktopNav).getByRole("link", { name: item.label });
    assert.equal(link.getAttribute("href"), item.href);
  }

  // Mobile menu button should start closed
  const toggleBtn = screen.getByRole("button", { name: /toggle menu/i });
  assert.equal(toggleBtn.getAttribute("aria-expanded"), "false");
  assert.equal(screen.queryByRole("navigation", { name: /mobile navigation/i }), null);

  // Open mobile drawer
  fireEvent.click(toggleBtn);
  assert.equal(toggleBtn.getAttribute("aria-expanded"), "true");
  const mobileNav = screen.getByRole("navigation", { name: /mobile navigation/i });
  for (const item of NAV_ITEMS) {
    assert.ok(within(mobileNav).getByRole("link", { name: item.label }));
  }

  // Pressing Escape closes the mobile drawer
  fireEvent.keyDown(window, { key: "Escape" });
  assert.equal(screen.queryByRole("navigation", { name: /mobile navigation/i }), null);
});

test("Hero renders eyebrow, headline, description, CTAs, learner avatars, and floating badges", () => {
  render(<Hero {...HERO_DATA} />);

  assert.ok(screen.getByText(HERO_DATA.eyebrow));
  assert.ok(screen.getByRole("heading", { level: 1, name: HERO_DATA.heading }));
  assert.ok(screen.getByText(HERO_DATA.description));

  const primaryLink = screen.getByRole("link", { name: HERO_DATA.primaryCta.label });
  assert.equal(primaryLink.getAttribute("href"), HERO_DATA.primaryCta.href);

  const secondaryLink = screen.getByRole("link", { name: HERO_DATA.secondaryCta.label });
  assert.equal(secondaryLink.getAttribute("href"), HERO_DATA.secondaryCta.href);

  // Floating badges
  assert.ok(screen.getByText(HERO_DATA.floatingBadgeTop.count));
  assert.ok(screen.getByText(HERO_DATA.floatingBadgeTop.label));
  assert.ok(screen.getByText(HERO_DATA.floatingBadgeBottom.rating));

  // Main hero image and avatars
  const mainImg = screen.getByAltText(HERO_DATA.mainImage.alt);
  assert.equal(mainImg.getAttribute("src"), HERO_DATA.mainImage.src);
  for (const avatar of HERO_DATA.avatars) {
    assert.ok(screen.getByAltText(avatar.alt));
  }
});

test("Categories renders all 4 category cards with numbers/titles and toggles track preview on click", () => {
  render(<Categories {...CATEGORIES_DATA} />);

  assert.ok(screen.getByText(CATEGORIES_DATA.eyebrow));
  assert.ok(screen.getByRole("heading", { level: 2, name: CATEGORIES_DATA.heading }));

  for (const item of CATEGORIES_DATA.items) {
    assert.ok(screen.getByText(item.number));
    assert.ok(screen.getByRole("heading", { level: 3, name: item.title }));
    assert.ok(screen.getByText(item.description));
  }

  // Click "Product Design" card to open the interactive track preview banner
  const productDesignHeading = screen.getByRole("heading", {
    level: 3,
    name: "Product Design",
  });
  const cardLink = productDesignHeading.closest("a");
  assert.ok(cardLink, "Category heading should be inside a link card");

  fireEvent.click(cardLink);
  assert.ok(screen.getByText("Product Design Track"));
  assert.ok(screen.getByText(/34 courses available/i));
  assert.ok(
    screen.getByText(/Design Systems, UX Research & Interaction Design/i)
  );

  // Dismiss preview banner
  const dismissBtn = screen.getByRole("button", { name: /dismiss/i });
  fireEvent.click(dismissBtn);
  assert.equal(screen.queryByText("Product Design Track"), null);
});

test("FeaturedCourse renders course metadata, instructor, and opens/closes syllabus modal", () => {
  render(<FeaturedCourse {...FEATURED_COURSE_DATA} />);

  assert.ok(screen.getByText(FEATURED_COURSE_DATA.badge));
  assert.ok(screen.getByText(FEATURED_COURSE_DATA.eyebrow));
  assert.ok(screen.getByRole("heading", { level: 2, name: FEATURED_COURSE_DATA.title }));
  assert.ok(screen.getByText(FEATURED_COURSE_DATA.instructor));

  // Course tags ("8 lessons", "2h 40min", "Intermediate")
  for (const tag of FEATURED_COURSE_DATA.tags) {
    assert.ok(screen.getByText(tag));
  }

  // Open syllabus modal by clicking "View course"
  const viewCourseBtn = screen.getByRole("button", {
    name: FEATURED_COURSE_DATA.primaryCta.label,
  });
  fireEvent.click(viewCourseBtn);

  const dialog = screen.getByRole("dialog");
  assert.ok(dialog);
  for (const lesson of FEATURED_COURSE_DATA.syllabus) {
    assert.ok(within(dialog).getByText(lesson.title));
    assert.ok(within(dialog).getByText(lesson.duration));
  }

  // Close syllabus modal via Escape key
  fireEvent.keyDown(window, { key: "Escape" });
  assert.equal(screen.queryByRole("dialog"), null);
});

test("HowItWorks renders all 3 steps with their titles and descriptions", () => {
  render(<HowItWorks {...HOW_IT_WORKS_DATA} />);

  assert.ok(screen.getByText(HOW_IT_WORKS_DATA.eyebrow));
  assert.ok(screen.getByRole("heading", { level: 2, name: HOW_IT_WORKS_DATA.heading }));

  for (const step of HOW_IT_WORKS_DATA.steps) {
    assert.ok(screen.getByRole("heading", { level: 3, name: step.title }));
    assert.ok(screen.getAllByText(step.description).length > 0);
  }
});

test("Testimonial renders quote, author details, and all 3 statistics", () => {
  render(<Testimonial {...TESTIMONIAL_DATA} />);

  assert.ok(screen.getByText(TESTIMONIAL_DATA.quote));
  assert.ok(screen.getByText(TESTIMONIAL_DATA.authorName));
  assert.ok(screen.getByText(TESTIMONIAL_DATA.authorRole));
  assert.ok(screen.getByAltText(TESTIMONIAL_DATA.authorName));

  for (const stat of TESTIMONIAL_DATA.stats) {
    assert.ok(screen.getByText(stat.value));
    assert.ok(screen.getByText(stat.label));
  }
});

test("PeopleSection renders copy, CTA, and all 10 collage photos with alt descriptions", () => {
  render(<PeopleSection {...PEOPLE_SECTION_DATA} />);

  assert.ok(screen.getByText(PEOPLE_SECTION_DATA.eyebrow));
  assert.ok(screen.getByRole("heading", { level: 2, name: PEOPLE_SECTION_DATA.heading }));
  assert.ok(screen.getByText(PEOPLE_SECTION_DATA.description));
  assert.ok(screen.getByRole("link", { name: PEOPLE_SECTION_DATA.ctaLabel }));

  const allImages = PEOPLE_SECTION_DATA.columns.flat();
  assert.equal(allImages.length, 10);
  for (const imgData of allImages) {
    const imgEl = screen.getByAltText(imgData.alt);
    assert.equal(imgEl.getAttribute("src"), imgData.src);
  }
});

test("ContactSection renders contact info cards, validates empty/invalid inputs, and submits valid data", () => {
  // Unit-check pure validation helper
  const emptyErrors = validateContactForm({ name: "", email: "", question: "" });
  assert.ok(emptyErrors.name);
  assert.ok(emptyErrors.email);
  assert.ok(emptyErrors.question);

  const badEmailErrors = validateContactForm({
    name: "Renan",
    email: "not-an-email",
    question: "Hello",
  });
  assert.equal(badEmailErrors.name, undefined);
  assert.ok(badEmailErrors.email);
  assert.equal(badEmailErrors.question, undefined);

  // Render component
  render(<ContactSection {...CONTACT_SECTION_DATA} />);

  assert.ok(screen.getByRole("heading", { level: 2, name: CONTACT_SECTION_DATA.heading }));
  for (const card of CONTACT_SECTION_DATA.cards) {
    assert.ok(screen.getByText(card.detail));
  }

  const submitBtn = screen.getByRole("button", {
    name: CONTACT_SECTION_DATA.form.submitDesktop,
  });

  // Submitting empty form shows validation alerts
  fireEvent.click(submitBtn);
  const alerts = screen.getAllByRole("alert");
  assert.equal(alerts.length, 3);

  // Fill valid form data and submit
  fireEvent.change(
    screen.getByLabelText(CONTACT_SECTION_DATA.form.fields.name.labelDesktop),
    { target: { value: "Alex Morgan" } }
  );
  fireEvent.change(
    screen.getByLabelText(CONTACT_SECTION_DATA.form.fields.email.labelDesktop),
    { target: { value: "alex@example.com" } }
  );
  fireEvent.change(
    screen.getByLabelText(CONTACT_SECTION_DATA.form.fields.question.labelDesktop),
    { target: { value: "Interested in team licenses for 15 designers." } }
  );

  fireEvent.click(submitBtn);

  // Confirmation status should appear
  const statusBox = screen.getByRole("status");
  assert.ok(within(statusBox).getByText(/Message sent!/i));
});

test("FinalCTA renders avatars, headline, subtitle, and both action links", () => {
  render(<FinalCTA {...FINAL_CTA_DATA} />);

  assert.ok(screen.getByRole("heading", { level: 2, name: FINAL_CTA_DATA.heading }));
  assert.ok(screen.getByText(FINAL_CTA_DATA.description));
  assert.ok(screen.getByRole("link", { name: FINAL_CTA_DATA.primaryCta.label }));
  assert.ok(screen.getByRole("link", { name: FINAL_CTA_DATA.secondaryCta.label }));

  for (const avatar of FINAL_CTA_DATA.avatars) {
    assert.ok(screen.getByAltText(avatar.alt));
  }
});

test("Footer renders tagline, all navigation columns/links, and copyright notice", () => {
  render(<Footer {...FOOTER_DATA} />);

  assert.ok(screen.getByText(FOOTER_DATA.tagline));
  assert.ok(screen.getByText(FOOTER_DATA.copyright));

  for (const col of FOOTER_DATA.columns) {
    assert.ok(screen.getByRole("heading", { level: 2, name: col.title }));
    for (const link of col.links) {
      const linkEl = screen.getByRole("link", { name: link.label });
      assert.equal(linkEl.getAttribute("href"), link.href);
    }
  }
});
