import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HowItWorks } from "./HowItWorks";
import { HOW_IT_WORKS_DATA } from "@/data/lumaData";

const meta: Meta<typeof HowItWorks> = {
  title: "Components/HowItWorks",
  component: HowItWorks,
  tags: ["autodocs"],
  args: HOW_IT_WORKS_DATA,
};

export default meta;
type Story = StoryObj<typeof HowItWorks>;

export const Default: Story = {};
