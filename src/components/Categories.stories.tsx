import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Categories } from "./Categories";
import { CATEGORIES_DATA } from "@/data/lumaData";

const meta: Meta<typeof Categories> = {
  title: "Components/Categories",
  component: Categories,
  tags: ["autodocs"],
  args: CATEGORIES_DATA,
};

export default meta;
type Story = StoryObj<typeof Categories>;

export const Default: Story = {};
