import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PeopleSection } from "./PeopleSection";
import { PEOPLE_SECTION_DATA } from "@/data/lumaData";

const meta: Meta<typeof PeopleSection> = {
  title: "Components/PeopleSection",
  component: PeopleSection,
  tags: ["autodocs"],
  args: PEOPLE_SECTION_DATA,
};

export default meta;
type Story = StoryObj<typeof PeopleSection>;

export const Default: Story = {};
