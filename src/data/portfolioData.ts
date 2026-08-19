export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  tech: string[];
  features: string[];
  highlights: { title: string; desc: string }[];
  contributions: string[];
  challenges: string;
  performance: string;
  githubUrl: string;
  demoUrl?: string;
  imageMockup: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
}

export interface Certification {
  name: string;
  issuer: string;
  topics?: string;
}

export const personalInfo = {
  name: "Ravula Rahul Reddy",
  role: "React.js Frontend Developer",
  experienceYears: "2+",
  location: "Hyderabad, India",
  email: "ravularahulreddy07@gmail.com",
  phone: "+91 9154967515",
  linkedin: "https://www.linkedin.com/in/ravula-rahul-reddy",
  github: "https://github.com/rahulreddyravula",
  tagline: "Building scalable, responsive, and high-performance web experiences with React.js, TypeScript, and modern frontend architecture.",
  bio: "React.js Frontend Developer with 2+ years of professional experience designing and developing scalable, responsive, and high-performance web applications. Expert in component architecture, state management, and seamless API integrations.",
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React.js", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap 5", "Tailwind CSS", "Responsive Web Design", "Flexbox", "CSS Grid"],
  },
  {
    category: "State Management",
    skills: ["Redux Toolkit"],
  },
  {
    category: "Backend Integration",
    skills: ["RESTful APIs", "Axios", "Fetch API", "JSON"],
  },
  {
    category: "Backend Knowledge",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    skills: ["MongoDB"],
  },
  {
    category: "Authentication & Payments",
    skills: ["JWT", "Stripe"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Kushal Technologies, Hyderabad",
    role: "React.js Developer",
    location: "Hyderabad, India",
    period: "May 2024 – Present",
    bullets: [
      "Developed responsive and mobile-first interfaces using React.js, TypeScript, and Tailwind CSS.",
      "Built reusable and modular React components for core web applications.",
      "Implemented Redux Toolkit for centralized state management across dynamic views.",
      "Integrated RESTful APIs using Axios to handle structured server operations.",
      "Implemented JWT authentication and configured protected client-side routes.",
      "Developed dynamic filtering, searching, and sorting functionality for complex data tables.",
      "Optimized application performance by minimizing unnecessary re-renders.",
      "Implemented lazy loading and component-level optimization techniques.",
      "Worked with designers, backend developers, and QA teams in Agile environments to align on milestones.",
      "Delivered high-quality features and project modules reliably on time.",
      "Received client appreciation for quality delivery and polished execution.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "pudami-stores",
    title: "Pudami Stores",
    subtitle: "Full-Stack E-Commerce Platform for Kids Toys",
    description: "A comprehensive e-commerce application custom-designed to sell children's toys online. It delivers a fast, fluid shopping experience with state-of-the-art search, filter and cart features, backed by a powerful administrative dashboard.",
    role: "Frontend Developer",
    tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "NodeMailer",
      "Git",
      "GitHub"
    ],
    features: [
      "Interactive Product Catalog with live search and complex multi-parameter filtering",
      "Shopping Cart & Wishlist management synced with local storage and user database",
      "Secure Stripe integration for smooth credit/debit card checkouts",
      "Personalized User Dashboard to track orders and manage profiles",
      "Administrative Portal for stock control, order status tracking, and analytics",
      "Automated order confirmations and shipment alerts via NodeMailer"
    ],
    highlights: [
      { title: "State Management", desc: "Redux Toolkit handles cart items, wishlist status, product caches, and user authentication centrally." },
      { title: "Authentication", desc: "JWT-based authentication tokens with secure httpOnly storing mechanisms and automatic routing protection." },
      { title: "Payments Flow", desc: "Seamless checkout flow using Stripe elements, supporting webhooks for asynchronous payment status verification." },
      { title: "API Architecture", desc: "Express RESTful endpoints communicating efficiently with React client via structured JSON payloads." },
      { title: "Performance Hooks", desc: "React.memo, useMemo, and image lazy loading to maintain a sub-second page load speed." },
      { title: "Responsive Layout", desc: "Tailwind CSS mobile-first breakpoint definitions ensuring layout consistency across all smart devices." }
    ],
    contributions: [
      "Designed and structured the entire frontend layout using React and TypeScript.",
      "Built custom filters, sorting rules, and product search UI that update instantly without page refreshes.",
      "Created the shopping cart state machine utilizing Redux Toolkit to prevent synchronization issues.",
      "Integrated Stripe API webhooks and customized payment forms.",
      "Refactored components to eliminate redundant re-renders, speeding up page interactions by 40%."
    ],
    challenges: "Synchronizing cart and wishlist state between anonymous guest visitors and authenticated accounts on login, without losing data or creating race conditions.",
    performance: "Used lazy loading for secondary modules, optimized image loading with modern picture formats, and cached product queries in memory to decrease database pressure.",
    githubUrl: "https://github.com/rahulreddyravula",
    imageMockup: "pudami-mockup"
  },
  {
    id: "medical-staff-management",
    title: "Medical Staff Management",
    subtitle: "Hospital Management & Appointment Platform",
    description: "A secure web portal designed to streamline medical appointments, physician availability schedules, and patient files. The platform features strict role-based dashboards to provide doctors, receptionists, and patients customized access rights.",
    role: "React.js Developer",
    tech: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
      "Git",
      "GitHub"
    ],
    features: [
      "Dynamic scheduler showing doctor shift times, vacation days, and slot booking states",
      "Multi-role user portal (separate view hierarchies for patients, physicians, and admins)",
      "Interactive appointment scheduler with reschedule, cancel, and status tracking options",
      "Electronic Health Record (EHR) viewer allowing doctors to log visit reports securely",
      "Real-time notifications warning doctors of emergency schedules or changes"
    ],
    highlights: [
      { title: "Role-Based Dashboards", desc: "Protected layouts and page routing based on JWT user claims (Doctor, Receptionist, Patient)." },
      { title: "Secure Authentication", desc: "JWT-based sessions with request interceptors to automatically append tokens to API calls." },
      { title: "Appointment Matrix", desc: "Advanced scheduling calendar with live status updates (Booked, Cancelled, Completed)." },
      { title: "Redux State Engine", desc: "Global store for doctors' listings, schedules, and active patient records for snappy navigation." },
      { title: "Axios API Layer", desc: "Centralized api client with custom request interceptors, retry hooks, and unified error handling." },
      { title: "Lazy Splitting", desc: "Split dashboard views into distinct chunks to minimize the initial bundle size for patients." }
    ],
    contributions: [
      "Developed the role-based dashboard router that checks user permissions dynamically.",
      "Created an interactive calendar grid displaying doctors' weekly hours and slot states.",
      "Wrote custom Axios middleware to automatically handle token refreshing and session timeouts.",
      "Collaborated closely with backend teams to normalize the MongoDB schedule schema for faster query times.",
      "Implemented component-level optimization, lowering load times on weak mobile networks."
    ],
    challenges: "Handling concurrent appointment booking attempts on the same slot, preventing double-bookings while maintaining an intuitive user interface.",
    performance: "Implemented route-based code splitting via React.lazy and Suspense, reducing the initial JavaScript weight. Optimized rendering by decoupling inputs from global states.",
    githubUrl: "https://github.com/rahulreddyravula",
    imageMockup: "medical-mockup"
  }
];

export const educationList: Education[] = [
  {
    degree: "Bachelor of Technology — Information Technology",
    institution: "University College of Engineering, Kakatiya University",
    location: "Kothagudem, India",
    period: "Oct 2020 – May 2024",
    grade: "CGPA: 7.2/10",
  },
  {
    degree: "Intermediate — MPC",
    institution: "Narayana Junior College",
    location: "Hyderabad, India",
    period: "June 2018 – April 2020",
    grade: "Percentage: 92.7%",
  },
];

export const certifications: Certification[] = [
  {
    name: "React.js Development",
    issuer: "Udemy",
  },
  {
    name: "Front-End Web Development",
    issuer: "Great Learning",
    topics: "HTML, CSS, Bootstrap",
  },
  {
    name: "REST API Integration and Web Development",
    issuer: "Great Learning",
  },
];

export const achievementsList: string[] = [
  "Delivered React.js features and project modules consistently ahead of scheduled milestones.",
  "Improved application performance significantly through optimized API calling structures and reusable component designs.",
  "Developed robust, highly scalable, modular UI components used across multiple internal projects.",
  "Built responsive, mobile-first applications that perform flawlessly across varying screen sizes.",
  "Integrated JWT authentication systems and RESTful APIs, securing client routes and data layers.",
  "Collaborated productively in Agile teams containing designers, backend developers, and QA engineers.",
  "Received formal client appreciation for quality delivery and successful production deployments.",
];
