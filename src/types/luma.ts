export interface NavItem {
  label: string;
  href: string;
}

export interface CategoryItem {
  id: string;
  number: string;
  title: string;
  description: string;
  href: string;
  courseCount: number;
  featuredTopic: string;
}

export interface FeaturedCourseData {
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  instructor: string;
  tags: string[];
  image: string;
  imageAlt: string;
  syllabus: {
    module: string;
    title: string;
    duration: string;
  }[];
}

export interface HowItWorksStep {
  id: string;
  stepLabel: string;
  title: string;
  description: string;
  variant: "blue" | "orange" | "yellow";
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialData {
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage: string;
  stats: StatItem[];
}

export interface PeopleColumnImage {
  src: string;
  alt: string;
  desktopW: number;
  desktopH: number;
  mobileW: number;
  mobileH: number;
}

export interface ContactInfoCard {
  id: string;
  title: string;
  detail: string;
  href?: string;
  iconSrc: string;
  iconSize: number;
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}
