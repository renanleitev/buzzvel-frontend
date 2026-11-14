import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Testimonial } from "./Testimonial";
import { TESTIMONIAL_DATA } from "@/data/lumaData";

const meta: Meta<typeof Testimonial> = {
  title: "Components/Testimonial",
  component: Testimonial,
  tags: ["autodocs"],
  args: TESTIMONIAL_DATA,
};

export default meta;
type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {};
