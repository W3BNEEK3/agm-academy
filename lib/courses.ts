export type PriceTier = {
  original: number;
  price: number;
};

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  outcomes: string[];
  image: string;
  duration: string;
  physical: PriceTier;
  online: PriceTier;
};

export const courses: Course[] = [
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    tagline: "Go from your first line of code to a working full-stack app.",
    description:
      "A beginner-friendly path into software development, covering both the front end (what users see) and the back end (what makes it work). You'll build real, working applications from scratch, not just follow along with tutorials.",
    outcomes: [
      "Build responsive web interfaces with HTML, CSS, and JavaScript",
      "Work with a modern front-end framework",
      "Build and connect a back end with a database",
      "Ship and deploy a full working project by the end of the course",
    ],
    image: "/images/fullstack-dev1.jpeg",
    duration: "3 Months",
    physical: { original: 250000, price: 200000 },
    online: { original: 200000, price: 150000 },
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    tagline: "Learn to find the gaps before attackers do.",
    description:
      "Learn how systems get attacked and how to defend them. This course starts from the fundamentals of networks and security, then builds up to hands-on practice finding and fixing vulnerabilities.",
    outcomes: [
      "Understand core networking and security concepts",
      "Identify common vulnerabilities in systems and applications",
      "Use industry-standard security tools",
      "Follow the mindset and process behind real security assessments",
    ],
    image: "/images/cyber-security2.jpeg",
    duration: "3 Months",
    physical: { original: 250000, price: 200000 },
    online: { original: 200000, price: 150000 },
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    tagline: "Make brands look like they mean it.",
    description:
      "Learn to design visuals that communicate: logos, social posts, brand identities, and marketing materials. You'll learn the tools and the design thinking behind work that actually looks professional.",
    outcomes: [
      "Master the design fundamentals: color, type, layout, hierarchy",
      "Work confidently in industry-standard design software",
      "Design a complete brand identity from scratch",
      "Build a portfolio of real design work",
    ],
    image: "/images/graphic-design1.jpeg",
    duration: "3 Months",
    physical: { original: 150000, price: 100000 },
    online: { original: 100000, price: 50000 },
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    tagline: "Run brand accounts that actually grow, not just post.",
    description:
      "Learn how to plan, create, and manage social media accounts that build a real audience, not just post for the sake of posting. Covers content strategy, scheduling, community management, and basic analytics.",
    outcomes: [
      "Plan a content calendar and posting strategy",
      "Understand what each major platform actually rewards",
      "Manage community engagement and DMs professionally",
      "Read analytics to know what's working",
    ],
    image: "/images/social-media-management.jpeg",
    duration: "2 Months",
    physical: { original: 100000, price: 50000 },
    online: { original: 50000, price: 35000 },
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Get products in front of the people who need them.",
    description:
      "A practical introduction to getting products and services in front of the right audience online, covering search, paid ads, email, and content marketing fundamentals.",
    outcomes: [
      "Understand the core digital marketing channels and when to use each",
      "Plan and run a basic paid ad campaign",
      "Write marketing copy that converts",
      "Track and interpret campaign performance",
    ],
    image: "/images/product-design1.jpeg",
    duration: "2 Months",
    physical: { original: 100000, price: 50000 },
    online: { original: 50000, price: 35000 },
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    tagline: "Put AI to work on real business problems.",
    description:
      "Learn to use AI tools to automate real tasks, not just chat with a chatbot. You'll learn to connect AI tools into workflows that save actual time for actual businesses.",
    outcomes: [
      "Understand what AI tools are actually good at (and what they aren't)",
      "Build automated workflows connecting AI tools to everyday tasks",
      "Apply prompt design to get reliable, useful output",
      "Ship a working automation project by the end of the course",
    ],
    image: "/images/ai-automation.jpeg",
    duration: "2 Months",
    physical: { original: 150000, price: 100000 },
    online: { original: 100000, price: 50000 },
  },
  {
    slug: "product-design",
    title: "Product Design (UI/UX)",
    tagline: "Design interfaces people actually enjoy using.",
    description:
      "Learn how to design digital products people actually enjoy using, from research and wireframes to polished, testable interfaces. Covers both the craft (UI) and the thinking behind it (UX).",
    outcomes: [
      "Run basic user research and turn it into design decisions",
      "Wireframe and prototype in an industry-standard design tool",
      "Design clean, usable interfaces with real design systems thinking",
      "Present and defend design decisions like a working designer",
    ],
    image: "/images/product-design.jpeg",
    duration: "2 Months",
    physical: { original: 150000, price: 100000 },
    online: { original: 100000, price: 50000 },
  },
  {
    slug: "data-analysis",
    title: "Data Analysis",
    tagline: "Read the numbers everyone else scrolls past.",
    description:
      "Learn to turn raw data into decisions. This course covers the practical tools and thinking behind data analysis: cleaning data, finding patterns, and telling a clear story with numbers.",
    outcomes: [
      "Clean and organize messy real-world data",
      "Analyze data using spreadsheets and a data analysis tool",
      "Build clear charts and dashboards",
      "Turn a dataset into a written or presented recommendation",
    ],
    image: "/images/data-analysis2.jpeg",
    duration: "2 Months",
    physical: { original: 150000, price: 100000 },
    online: { original: 100000, price: 50000 },
  },
];

export const featuredCourses = courses.slice(0, 6);
