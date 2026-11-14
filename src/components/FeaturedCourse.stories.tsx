import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeaturedCourse } from "./FeaturedCourse";
import { FEATURED_COURSE_DATA } from "@/data/lumaData";

const meta: Meta<typeof FeaturedCourse> = {
  title: "Components/FeaturedCourse",
  component: FeaturedCourse,
  tags: ["autodocs"],
  args: FEATURED_COURSE_DATA,
};

export default meta;
type Story = StoryObj<typeof FeaturedCourse>;

export const Default: Story = {};
