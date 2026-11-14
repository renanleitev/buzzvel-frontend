import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./Header";
import { NAV_ITEMS } from "@/data/lumaData";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    navItems: NAV_ITEMS,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
