import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FinalCTA } from "./FinalCTA";
import { FINAL_CTA_DATA } from "@/data/lumaData";

const meta: Meta<typeof FinalCTA> = {
  title: "Components/FinalCTA",
  component: FinalCTA,
  tags: ["autodocs"],
  args: FINAL_CTA_DATA,
};

export default meta;
type Story = StoryObj<typeof FinalCTA>;

export const Default: Story = {};
