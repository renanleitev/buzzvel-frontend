import type {
  NavItem,
  CategoryItem,
  HowItWorksStep,
  TestimonialData,
  PeopleColumnImage,
  ContactInfoCard,
  FooterColumn,
} from "@/types/luma";

export const NAV_ITEMS: NavItem[] = [
  { label: "Courses", href: "#categories" },
  { label: "For Teams", href: "#featured-course" },
  { label: "Community", href: "#the-people" },
  { label: "About", href: "#how-it-works" },
];

export const HERO_DATA = {
  eyebrow: "Learn at your own pace",
  heading: "Build skills that actually move you forward.",
  description:
    "Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
  primaryCta: {
    label: "Explore courses",
    href: "#categories",
  },
  secondaryCta: {
    label: "See how it works",
    href: "#how-it-works",
  },
  avatars: [
    { src: "/assets/hero-avatar-1.png", alt: "Learner portrait 1" },
    { src: "/assets/hero-avatar-2.png", alt: "Learner portrait 2" },
    { src: "/assets/hero-avatar-3.png", alt: "Learner portrait 3" },
  ],
  trustedBold: "Trusted by 24,000+",
  trustedSuffix: "learners",
  mainImage: {
    src: "/assets/hero-main.png",
    alt: "Person focused on learning at their laptop",
  },
  floatingBadgeTop: {
    count: "120+",
    label: "expert-led courses",
  },
  floatingBadgeBottom: {
    rating: "4.9 avg rating",
    stars: 5,
  },
};

export const CATEGORIES_DATA: {
  eyebrow: string;
  heading: string;
  description: string;
  items: CategoryItem[];
} = {
  eyebrow: "Find your next skill",
  heading: "Learn something worth knowing.",
  description:
    "Short, practical courses designed around skills you can put to work immediately.",
  items: [
    {
      id: "product-design",
      number: "01",
      title: "Product Design",
      description: "Turn complex problems into clear, useful experiences.",
      href: "#featured-course",
      courseCount: 34,
      featuredTopic: "Design Systems, UX Research & Interaction Design",
    },
    {
      id: "technology",
      number: "02",
      title: "Technology",
      description:
        "Build a stronger understanding of the tools shaping digital products.",
      href: "#featured-course",
      courseCount: 42,
      featuredTopic: "Modern Web Architecture, TypeScript & AI Engineering",
    },
    {
      id: "business",
      number: "03",
      title: "Business",
      description:
        "Develop practical skills for better decisions and stronger teams.",
      href: "#featured-course",
      courseCount: 26,
      featuredTopic: "Product Strategy, Team Leadership & Growth Metrics",
    },
    {
      id: "creative",
      number: "04",
      title: "Creative",
      description: "Explore new ways to communicate, create and tell stories.",
      href: "#featured-course",
      courseCount: 18,
      featuredTopic: "Brand Storytelling, Visual Identity & Motion Craft",
    },
  ],
};

export const FEATURED_COURSE_DATA = {
  badge: "Featured Course",
  eyebrow: "Most popular this month",
  title: "Designing products people understand.",
  description:
    "Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.",
  instructor: "with Maya Chen · Senior Product Designer",
  tags: ["8 lessons", "2h 40min", "Intermediate"],
  image: "/assets/featured-course.png",
  imageAlt: "Product design course — student working on interface designs",
  primaryCta: {
    label: "View course",
    href: "#featured-course",
  },
  secondaryCta: {
    label: "Browse all courses",
    href: "#categories",
  },
  syllabus: [
    {
      module: "Lesson 01",
      title: "Mapping user intent and mental models",
      duration: "18 min",
    },
    {
      module: "Lesson 02",
      title: "Structuring complex multi-step workflows",
      duration: "24 min",
    },
    {
      module: "Lesson 03",
      title: "Designing clear states, feedback & micro-interactions",
      duration: "22 min",
    },
    {
      module: "Lesson 04",
      title: "Usability testing and rapid iteration in practice",
      duration: "20 min",
    },
  ],
};

export const HOW_IT_WORKS_DATA: {
  eyebrow: string;
  heading: string;
  steps: (HowItWorksStep & { mobileStepLabel: string; mobileDescription: string })[];
} = {
  eyebrow: "How Luma works",
  heading: "Less browsing. More learning.",
  steps: [
    {
      id: "step-1",
      stepLabel: "Step 01",
      mobileStepLabel: "Step 01",
      title: "Choose your focus",
      description:
        "Find courses based on the skill you want to build, not endless content categories.",
      mobileDescription:
        "Find courses based on the skill you want to build, not endless content categories.",
      variant: "blue",
    },
    {
      id: "step-2",
      stepLabel: "Step 01",
      mobileStepLabel: "Step 02",
      title: "Learn from experience",
      description:
        "Follow concise lessons created by professionals who use these skills.",
      mobileDescription:
        "Follow concise lessons created by professionals who actually use these skills.",
      variant: "orange",
    },
    {
      id: "step-3",
      stepLabel: "Step 01",
      mobileStepLabel: "Step 03",
      title: "Put it into practice",
      description:
        "Every course includes practical exercises designed to turn knowledge into action.",
      mobileDescription:
        "Every course includes practical exercises designed to turn knowledge into action.",
      variant: "yellow",
    },
  ],
};

export const TESTIMONIAL_DATA: TestimonialData = {
  quote:
    "The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.",
  authorName: "Alex Morgan",
  authorRole: "Product Manager",
  authorImage: "/assets/alex-morgan.png",
  stats: [
    { value: "24K+", label: "active learners" },
    { value: "120+", label: "expert-led courses" },
    { value: "92%", label: "complete their first course" },
  ],
};

export const PEOPLE_SECTION_DATA: {
  eyebrow: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  columns: PeopleColumnImage[][];
} = {
  eyebrow: "the people",
  heading: "Meet international students & teachers",
  description:
    "Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.",
  ctaLabel: "Explore teachers and students",
  ctaHref: "#contact",
  columns: [
    [
      {
        src: "/assets/people-1.png",
        alt: "Student waving during an online study session",
        desktopW: 102.72,
        desktopH: 154.08,
        mobileW: 72,
        mobileH: 96,
      },
      {
        src: "/assets/people-2.png",
        alt: "Group of creative students collaborating at a desk",
        desktopW: 138.03,
        desktopH: 207.05,
        mobileW: 94,
        mobileH: 129,
      },
    ],
    [
      {
        src: "/assets/people-3.png",
        alt: "Student reading notes in a library",
        desktopW: 102.72,
        desktopH: 170.13,
        mobileW: 72,
        mobileH: 106,
      },
      {
        src: "/assets/people-4.png",
        alt: "Two musicians practicing in a bright studio",
        desktopW: 102.72,
        desktopH: 172.54,
        mobileW: 72,
        mobileH: 107.5,
      },
      {
        src: "/assets/people-5.png",
        alt: "Learner taking notes with a laptop at home",
        desktopW: 102.72,
        desktopH: 128.4,
        mobileW: 72,
        mobileH: 80,
      },
    ],
    [
      {
        src: "/assets/people-6.png",
        alt: "Graduate smiling in cap and gown",
        desktopW: 102.72,
        desktopH: 137.23,
        mobileW: 72,
        mobileH: 85.5,
      },
      {
        src: "/assets/people-7.png",
        alt: "Designer working at a studio desk",
        desktopW: 102.72,
        desktopH: 138.03,
        mobileW: 72,
        mobileH: 86,
      },
      {
        src: "/assets/people-8.png",
        alt: "Teacher mentoring a student on a video call",
        desktopW: 102.72,
        desktopH: 154.08,
        mobileW: 72,
        mobileH: 96,
      },
    ],
    [
      {
        src: "/assets/people-9.png",
        alt: "Student holding notebooks outdoors on campus",
        desktopW: 128.4,
        desktopH: 204.64,
        mobileW: 88,
        mobileH: 127.5,
      },
      {
        src: "/assets/people-10.png",
        alt: "International student smiling with books and coffee",
        desktopW: 102.72,
        desktopH: 132.42,
        mobileW: 72,
        mobileH: 82.5,
      },
    ],
  ],
};

export const CONTACT_SECTION_DATA = {
  eyebrow: "CONTACT",
  heading: "Get in touch",
  description:
    "Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.",
  cards: [
    {
      id: "email",
      title: "Email",
      detail: "contact@luma.com",
      href: "mailto:contact@luma.com",
      iconSrc: "/assets/icon-message.svg",
      iconSize: 24,
    },
    {
      id: "response-time",
      title: "Response Time",
      detail: "Up to 24 hours on business days",
      iconSrc: "/assets/icon-clock.svg",
      iconSize: 20,
    },
  ] satisfies ContactInfoCard[],
  form: {
    title: "Contact us",
    descriptionDesktop: "Fill out the fields and we will get in touch.",
    descriptionMobile: "Preencha os campos e entraremos em contato.",
    fields: {
      name: {
        labelDesktop: "Full name",
        labelMobile: "Nome completo",
        placeholderDesktop: "Your name",
        placeholderMobile: "Seu nome",
      },
      email: {
        labelDesktop: "Email",
        labelMobile: "E-mail",
        placeholderDesktop: "youremail@example.com",
        placeholderMobile: "seuemail@exemplo.com",
      },
      question: {
        labelDesktop: "Your question",
        labelMobile: "Sua dúvida",
        placeholderDesktop: "Tell us how we can help...",
        placeholderMobile: "Conte como podemos ajudar...",
      },
    },
    submitDesktop: "Send message",
    submitMobile: "Enviar mensagem",
  },
};

export const FINAL_CTA_DATA = {
  avatars: [
    { src: "/assets/cta-avatar-1.png", alt: "Community learner 1" },
    { src: "/assets/cta-avatar-2.png", alt: "Community learner 2" },
    { src: "/assets/cta-avatar-3.png", alt: "Community learner 3" },
    { src: "/assets/cta-avatar-4.png", alt: "Community learner 4" },
  ],
  heading: "What will you learn next?",
  description: "Start with one course. Build from there.",
  primaryCta: {
    label: "Explore all courses",
    href: "#categories",
  },
  secondaryCta: {
    label: "Join Luma",
    href: "#contact",
  },
};

export const FOOTER_DATA: {
  tagline: string;
  copyright: string;
  columns: FooterColumn[];
} = {
  tagline: "Practical learning for curious people.",
  copyright: "© 2026 Luma Learning",
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Courses", href: "#categories" },
        { label: "Categories", href: "#categories" },
        { label: "Instructors", href: "#featured-course" },
        { label: "For Teams", href: "#featured-course" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#how-it-works" },
        { label: "Careers", href: "#the-people" },
        { label: "Journal", href: "#testimonials" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#contact" },
        { label: "Contact", href: "#contact" },
        { label: "Terms", href: "#footer" },
        { label: "Privacy", href: "#footer" },
      ],
    },
  ],
};
