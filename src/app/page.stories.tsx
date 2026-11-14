import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HomePage from "./page";

const meta: Meta<typeof HomePage> = {
  title: "Pages/HomePage",
  component: HomePage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const FullPage: Story = {};
