import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer } from "./Footer";
import { FOOTER_DATA } from "@/data/lumaData";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  args: FOOTER_DATA,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
