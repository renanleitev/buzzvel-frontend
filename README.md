# Luma Learning — Buzzvel Front-End Engineer Coding Challenge (2026)

A responsive landing page for **Luma Learning**, built from the supplied Figma design (`Buzzvel FE - Test 2026`) using **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.

---

## How to Install, Run, and Build

### Prerequisites
- **Node.js** `>= 20.x` (tested with Node LTS)
- **npm**

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Run Storybook (test components in isolation)
```bash
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) to browse, inspect, and test every component (`Header`, `Hero`, `Categories`, `FeaturedCourse`, `HowItWorks`, `Testimonial`, `PeopleSection`, `ContactSection`, `FinalCTA`, `Footer`) and the full `HomePage` individually with interactive props, docs, accessibility checks (`@storybook/addon-a11y`), and preset Figma Desktop (`1280px`) / Mobile (`402px`) viewports.

To build a static Storybook bundle:
```bash
npm run build-storybook
```

### 4. Run automated tests
```bash
npm test
```

### 5. Build and run for production
```bash
npm run build
npm start
```

---

## Architecture & Component Structure

```text
src/
├── app/
│   ├── globals.css          # Design tokens, Tailwind v4 config & reduced-motion rules
│   ├── layout.tsx           # Root layout, Google Fonts (Inter & Plus Jakarta Sans), SEO metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── Header.tsx           # Sticky responsive header + keyboard-accessible mobile drawer
│   ├── Hero.tsx             # Hero section with responsive column ordering & floating stat badges
│   ├── Categories.tsx       # 4-card category grid + interactive track preview panel
│   ├── FeaturedCourse.tsx   # Featured course spotlight + interactive syllabus preview modal
│   ├── HowItWorks.tsx       # 3-step learning flow with horizontal/vertical connectors
│   ├── Testimonial.tsx      # Learner quote & key platform statistics
│   ├── PeopleSection.tsx    # International students & teachers section with 4-column photo collage
│   ├── ContactSection.tsx   # Contact details + interactive validated contact form
│   ├── FinalCTA.tsx         # Call-to-action banner with decorative geometric shapes & icons
│   └── Footer.tsx           # Responsive dark footer with navigation columns
├── data/
│   └── lumaData.ts          # Typed local/mock content for all page sections
└── types/
    └── luma.ts              # Shared TypeScript interfaces for component props
```

---

## Key Decisions & Clarifications

1. **Responsive Layout & Breakpoints (Mobile, Tablet, Desktop)**:
   - **Hero Section**: Matches the Figma mobile layout where the hero image and floating badges (`120+ expert-led courses` and `4.9 avg rating`) appear above the headline on mobile (`order-1` / `order-2`), and side-by-side on desktop (`lg:flex-row`).
   - **Categories**: 1-column stack on mobile, 2×2 grid on tablet (`sm:grid-cols-2`), and 4-column row on desktop (`lg:grid-cols-4`).
   - **How Luma Works**: Uses a vertical timeline connector between steps on mobile and a horizontal connecting line behind the step icons on desktop. Also preserves the mobile step numbering (`STEP 01`, `STEP 02`, `STEP 03`) and desktop step labels from the Figma frames.
   - **Testimonial & Stats**: Displays the 3 metrics (`24K+`, `120+`, `92%`) in a 3-column horizontal row on mobile/tablet and a vertical stack with a left divider border on desktop.
   - **Contact Form Copy**: In the Figma file, the desktop contact form uses English labels (`Full name`, `Email`, `Your question`, `Send message`) whereas the mobile frame had Portuguese text (`Nome completo`, `E-mail`, `Sua dúvida`, `Enviar mensagem`). To keep the page language consistent in English across viewports (as the rest of both mobile and desktop frames are in English), we standardized the visible form labels in English while keeping both strings documented in `src/data/lumaData.ts`.

2. **Interactive Controls & Local State**:
   - **Mobile Navigation Drawer**: Clicking the hamburger menu button toggles an accessible mobile drawer with `aria-expanded`, `aria-controls`, and `Escape` key support.
   - **Category Exploration**: Clicking any of the 4 category cards toggles a live preview banner displaying the number of courses and featured topics for that track.
   - **Featured Course Modal**: Clicking **View course** opens an accessible modal (`role="dialog"`, `aria-modal="true"`, `Escape` and backdrop click to close) showing a 4-lesson syllabus preview.
   - **Contact Form Validation**: Client-side validation checks for required fields and valid email format, announcing errors with `aria-invalid`, `aria-describedby`, and `role="alert"`, and transitions to a confirmation state upon submission.

3. **Accessibility, Performance & Reduced Motion**:
   - Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<figure>`, `<blockquote>`, `<dl>`, `<footer>`) and a **Skip to main content** link for keyboard users.
   - Fonts (`Inter` and `Plus Jakarta Sans`) are loaded via `next/font/google` with `display: "swap"` to prevent layout shift.
   - Hero imagery uses `fetchPriority="high"`, while below-the-fold images use `loading="lazy"`.
   - `prefers-reduced-motion: reduce` is respected globally in `globals.css` to disable smooth scrolling and transitions for users who prefer reduced motion.

---

## Known Gaps & Approximate Time Spent

- **Known Gaps**: None. All desktop and mobile sections, assets, and interactions from the Figma specification are implemented and verified against a production build.
- **Approximate Time Spent**: ~2.5 hours.

---

## AI Tools Used

- **Google Antigravity (with Figma MCP)**: Used to inspect the Figma node hierarchy, extract exact typography/color tokens and export SVG/PNG assets locally into `public/assets/`, scaffold the Next.js + TypeScript + Tailwind CSS components, and write asset verification tests.
- **Verification**: Checked all generated components against the Figma Desktop and Mobile design renders, verified TypeScript types and automated tests (`npm test`), and ran a full production build (`npm run build`) and visual browser check across desktop (`1280px`) and mobile (`402px`) viewports.
