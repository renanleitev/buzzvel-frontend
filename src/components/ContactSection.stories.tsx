import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ContactSection } from "./ContactSection";
import { CONTACT_SECTION_DATA } from "@/data/lumaData";

const meta: Meta<typeof ContactSection> = {
  title: "Components/ContactSection",
  component: ContactSection,
  tags: ["autodocs"],
  args: CONTACT_SECTION_DATA,
};

export default meta;
type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {};
