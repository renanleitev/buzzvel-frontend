import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Hero } from "./Hero";
import { HERO_DATA } from "@/data/lumaData";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  args: HERO_DATA,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
