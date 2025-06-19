
export interface Course {
  slug: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageHint: string;
  // Add other relevant fields like instructor, price, modules, etc. if needed
}

export const courses: Course[] = [
  {
    slug: "ai-ml-fundamentals",
    title: "AI & Machine Learning Fundamentals",
    description: "Master the basics of AI and Machine Learning, and understand how they're shaping industries. This course provides a comprehensive introduction, covering key concepts, algorithms, and practical applications. No prior coding experience is required, making it accessible for beginners looking to step into the world of artificial intelligence.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "AI machine learning",
    category: "Artificial Intelligence",
  },
  {
    slug: "digital-marketing-pro-bootcamp",
    title: "Digital Marketing Pro Bootcamp",
    description: "Become a certified digital marketing expert. Learn SEO, SEM, social media marketing, content strategy, and analytics in this intensive bootcamp. We cover everything from campaign creation to performance tracking, equipping you with the skills to drive online growth for businesses of any size.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "digital marketing computer",
    category: "Marketing",
  },
  {
    slug: "remote-work-productivity-mastery",
    title: "Remote Work & Productivity Mastery",
    description: "Optimize your remote work setup, boost productivity, and master tools for efficient online collaboration. This course covers time management techniques, effective communication strategies for distributed teams, and essential software for staying organized and connected while working from anywhere.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "remote work productivity",
    category: "Productivity",
  },
  {
    slug: "cybersecurity-essentials",
    title: "Cybersecurity Essentials for Professionals",
    description: "Protect yourself and your organization from cyber threats. Learn essential cybersecurity concepts, common attack vectors, and best practices for data protection and incident response. This course is crucial for any professional handling sensitive information in today's digital landscape.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "cybersecurity shield",
    category: "Tech",
  },
  {
    slug: "data-science-business-decisions",
    title: "Data Science for Business Decisions",
    description: "Unlock the power of data. Learn to collect, clean, analyze, and visualize data to derive actionable insights and make informed business decisions. This course covers statistical methods, data modeling, and an introduction to machine learning for business applications.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "data science chart",
    category: "Data Science",
  },
  {
    slug: "web-development-foundations",
    title: "Web Development Foundations",
    description: "Build modern, responsive websites from scratch. This foundational course covers HTML, CSS, and JavaScript – the core technologies of the web. You'll also get an introduction to popular frameworks and tools used by professional web developers.",
    imageUrl: "https://placehold.co/400x250.png",
    imageHint: "web development code",
    category: "Development",
  }
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return courses.find(course => course.slug === slug);
};
