export const servicesData = [
  {
    title: "Full Stack Web Development",
    description:
      "Freelance Full Stack Developer with hands-on experience delivering 5+ real-world projects, including multiple production-level applications. I build scalable, production-ready web applications using MERN stack, Next.js, and modern architectures, with a strong focus on performance, clean code, and real-world problem solving.",
    items: [
      { title: "React.js & Next.js Applications" },
      { title: "Node.js, Express & REST APIs" },
      { title: "Database Design (MongoDB, SQL)" },
    ],
  },
  {
    title: "E-Commerce Development",
    description:
      "Developed scalable eCommerce platforms using Shopify and custom MERN solutions, including production-level projects with complete payment integration and optimized performance. Built systems designed to handle high user traffic and real-world usage scenarios.",
    items: [
      { title: "Shopify (Liquid, Custom Themes, Components)" },
      { title: "Payment Gateway Integration" },
      { title: "Scalable Architecture (High Traffic Ready)" },
    ],
  },
  {
    title: "CMS & No-Code Development",
    description:
      "Delivered client websites using WordPress and Wix Studio, including portfolio and business sites with responsive UI and optimized performance. My work includes real client deployments and production-ready implementations.",
    items: [
      { title: "WordPress Development & Customization" },
      { title: "Wix Studio Advanced UI Design" },
      { title: "SEO & Responsive Design" },
    ],
  },
  {
    title: "AI & Automation Solutions",
    description:
      "Built AI-powered applications and automation systems using LLM APIs, including real-world tools for content generation and developer productivity. Experience includes integrating AI workflows into production-ready platforms.",
    items: [
      { title: "LLM APIs (OpenAI, Gemini)" },
      { title: "AI Automation & Workflows" },
      { title: "RAG & Agent-based Systems (Basic)" },
    ],
  },
  {
    title: "Frontend & UI Engineering",
    description:
      "Designed and developed modern, responsive, and interactive user interfaces for multiple client and personal projects. Focused on delivering smooth UX, clean design, and production-quality frontend systems.",
    items: [
      { title: "Responsive UI (Tailwind, Bootstrap)" },
      { title: "Animations (GSAP, Framer Motion)" },
      { title: "Figma to Pixel-Perfect UI" },
    ],
  },
  {
    title: "Performance & Optimization",
    description:
      "Optimized applications for speed and scalability, including projects designed to handle high traffic and real-time interactions. Applied modern optimization techniques to improve performance and user experience across production systems.",
    items: [
      { title: "Code Splitting & Lazy Loading" },
      { title: "Asset Optimization" },
      { title: "High Performance (90+ Lighthouse)" },
    ],
  },
];
export const projects = [
  // 🔥 1. Freelance Shopify (MOST IMPORTANT)
  {
    id: 1,
    name: "Clothes Store — Shopify E-Commerce (Freelance)",
    description:
      "A production-grade Shopify store built for a real client, handling 5–7 lakh monthly traffic. Designed a high-converting storefront with optimized performance, responsive UI, and complete product & inventory management.",
    href: "https://mgux0j-0w.myshopify.com/",
    image: "/assets/projects/Baga.png",
    bgImage: "/assets/backgrounds/baga-bg.png",
    frameworks: [
      { id: 1, name: "Shopify" },
      { id: 2, name: "Liquid" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "CSS" },
    ],
    tag: "💼 Freelance • Live Production",
  },

  // 🔥 4. SDA Final Year Project
  {
    id: 2,
    name: "Smart Developer Assistant (SDA)",
    description:
      "An AI-integrated collaboration platform with real-time coding, multi-user collaboration, and in-browser execution. Built as a final-year project with startup vision.",
    href: "https://github.com/piyushthawale19/SDA-Final",
    image: "/assets/projects/sda.png",
    bgImage: "/assets/backgrounds/sda-bg.png",
    frameworks: [
      { id: 1, name: "MERN Stack" },
      { id: 2, name: "Socket.io" },
      { id: 3, name: "Firebase Auth" },
      { id: 4, name: "Gemini API" },
    ],
    tag: "🚀 Startup Idea",
  },


  // 🔥 2. Agentic Studio (AI PROJECT)
  {
    id: 3,
    name: "Agentic Studio — AI YouTube Content Agent",
    description:
      "An AI-powered platform for YouTube creators to analyze videos, generate thumbnails, titles, scripts, and transcriptions using modern GenAI tools.",
    href: "https://agenticstudio-psi.vercel.app/",
    image: "/assets/projects/agentic.png",
    bgImage: "/assets/backgrounds/agentic-bg.png",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Convex" },
      { id: 4, name: "Gemini AI" },
      { id: 5, name: "Clerk" },
    ],
    tag: "🤖 AI SaaS",
  },

  // 🔥 3. Expensio (SAAS + AI)
  {
    id: 4,
    name: "Expensio — AI Receipt Tracker SaaS",
    description:
      "A full-stack SaaS platform that extracts and organizes receipt data using AI (Google Gemini). Includes OCR, real-time dashboard, and subscription system.",
    href: "https://receipt-tracker-app-lyart.vercel.app/",
    image: "/assets/projects/receipt.png",
    bgImage: "/assets/backgrounds/receipt-bg.png",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Convex" },
      { id: 4, name: "Gemini AI" },
      { id: 5, name: "Inngest" },
    ],
    tag: "💰 SaaS • AI",
  },



  // 🔥 5. Yummy-Fi Freelance
  {
    id: 5,
    name: "Yummy-Fi — Restaurant Platform (Freelance)",
    description:
      "A restaurant portfolio website with ongoing development of a Swiggy/Zomato-style food ordering system and dine-in app.",
    href: "https://www.yummyfi.in/",
    image: "/assets/projects/yummyfi.png",
    bgImage: "/assets/backgrounds/yummyfi-bg.png",
    frameworks: [
      { id: 1, name: "Web Platform" },
    ],
    tag: "💼 Freelance • In Progress",
  },

  // 🔥 6. Vibe Commerce
  {
    id: 6,
    name: "Vibe Commerce — Full Stack Cart",
    description:
      "A responsive e-commerce cart application with animations, live totals, and mock checkout flow.",
    href: "https://vibe-commerce-rust.vercel.app/",
    image: "/assets/projects/vibe.png",
    bgImage: "/assets/backgrounds/vibe-bg.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },

  // 🔥 7. CMS Project
  {
    id: 7,
    name: "Curriculum CMS (Intern Project)",
    description:
      "A full-stack CMS for managing curriculum and educational content with admin dashboard and secure authentication.",
    href: "https://curriculum-developer-intern.vercel.app/",
    image: "/assets/projects/cms.png",
    bgImage: "/assets/backgrounds/cms-bg.png",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "MongoDB" },
      { id: 3, name: "Mongoose" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/piyush_thawale_08/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/piyush-thawale-03b706259/" },

  { name: "GitHub", href: "https://github.com/piyushthawale19" },
  {
    name: "CV",
    href: "https://drive.google.com/file/d/19uD-i4HuEvuMiB9hvVyb-A8BtU_64FAC/view?usp=sharing",
  },
];
