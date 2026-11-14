import type { Preview } from "@storybook/nextjs-vite";
import React from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../src/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["600", "700", "800"],
  display: "swap",
});

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: {
        figmaMobile: {
          name: "Figma Mobile (402px)",
          styles: { width: "402px", height: "874px" },
        },
        tablet: {
          name: "Tablet (768px)",
          styles: { width: "768px", height: "1024px" },
        },
        figmaDesktop: {
          name: "Figma Desktop (1280px)",
          styles: { width: "1280px", height: "900px" },
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased text-[#171b2c]`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
