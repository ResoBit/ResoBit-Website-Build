import { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  author: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
  content: ReactNode;
};

const year = new Date().getFullYear();

export const blogPosts: BlogPost[] = [
  {
    slug: "embedded-systems-bangalore-guide",
    title: `Embedded Systems Development in Bangalore (Bengaluru): The ${year} Guide`,
    description:
      "A comprehensive look at embedded systems engineering in Bangalore—covering MCU selection, RTOS, IoT connectivity, and compliance, with local insights from ResoBit.",
    coverImage:
      "https://images.unsplash.com/photo-1581091215438-7f54a1f2c3d7?q=80&w=1600&auto=format&fit=crop&sat=-30&exp=10",
    author: "ResoBit Engineering Team",
    date: `${year}-04-15`,
    readingTime: "8 min read",
    tags: ["Embedded Systems", "IoT", "Bangalore", "Bengaluru", "MCU", "RTOS"],
    content: (
      <article className="prose prose-invert max-w-none">
        <h1>Embedded Systems in Bangalore: Building Reliable Products End‑to‑End</h1>
        <p>
          Bangalore (Bengaluru) has emerged as India&apos;s hub for embedded systems and electronics. From
          consumer IoT to industrial automation, companies in Karnataka partner with engineering teams like
          ResoBit to design, prototype, and manufacture devices that are secure, power‑efficient, and
          production‑ready.
        </p>
        <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop" alt="Embedded systems prototyping lab in Bengaluru" className="rounded-xl my-6" />
        <h2>Key Decisions: MCU, Architecture, and Power</h2>
        <ul>
          <li>Microcontroller selection: STM32, ESP32, RP2040 based on compute, peripherals, and cost</li>
          <li>RTOS vs bare‑metal: latency, determinism, and maintenance trade‑offs</li>
          <li>Power strategy: sleep states, sensor duty cycling, and battery chemistry</li>
        </ul>
        <h2>Connectivity and Security</h2>
        <p>
          Wi‑Fi, BLE, LoRaWAN, and cellular (4G/LTE‑M) are common in Bangalore deployments. At ResoBit, we
          implement secure boot, encrypted firmware updates (FOTA), and hardware root‑of‑trust to protect
          devices in the field.
        </p>
        <h2>Compliance and Manufacturing Readiness</h2>
        <p>
          We prepare products for BIS, CE, and EMI/EMC testing. Our team delivers schematic reviews, PCB
          layout, DFM/DFT, and EVT/DVT builds with Bangalore manufacturing partners.
        </p>
        <img src="https://images.unsplash.com/photo-1581093588401-16b2b0a4e3d2?q=80&w=1600&auto=format&fit=crop" alt="PCB assembly and testing in Bangalore" className="rounded-xl my-6" />
        <h2>Why ResoBit in Bengaluru</h2>
        <p>
          Local expertise, fast procurement, and hands‑on validation help you ship faster. Talk to us about
          concept‑to‑production embedded programs in Bangalore.
        </p>
      </article>
    ),
  },
  {
    slug: "firmware-development-bangalore-best-practices",
    title: `Firmware Development in Bengaluru: Best Practices for ${year}`,
    description:
      "Production‑grade firmware practices—bootloaders, OTA, memory safety, and CI—from ResoBit in Bangalore.",
    coverImage:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop",
    author: "ResoBit Firmware Group",
    date: `${year}-05-20`,
    readingTime: "7 min read",
    tags: ["Firmware", "Bangalore", "Bengaluru", "OTA", "Bootloader", "RTOS"],
    content: (
      <article className="prose prose-invert max-w-none">
        <h1>Production‑Ready Firmware for Bangalore Hardware Teams</h1>
        <p>
          Reliable firmware is the backbone of successful hardware products. In Bengaluru, ResoBit ships
          robust stacks with defensive coding, watchdog recovery, OTA pipelines, and performance profiling.
        </p>
        <h2>What Great Firmware Looks Like</h2>
        <ul>
          <li>Deterministic task design with RTOS and priority inversion avoidance</li>
          <li>Resilient bootloaders with rollback and secure updates</li>
          <li>Memory safety via static analysis and leak detection</li>
          <li>Hardware abstraction for portable code across SKUs</li>
        </ul>
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop" alt="Firmware engineers debugging in Bengaluru" className="rounded-xl my-6" />
        <h2>CI for Firmware</h2>
        <p>
          We integrate unit tests, HIL (hardware‑in‑loop), and artifact signing in CI so Bangalore teams can
          ship confidently.
        </p>
      </article>
    ),
  },
  {
    slug: "ecommerce-development-bangalore-scaling-guide",
    title: `E‑commerce Development in Bangalore: A Scaling Guide for ${year}`,
    description:
      "From storefront UX to payments and logistics in India—how ResoBit builds scalable e‑commerce in Bengaluru.",
    coverImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop&sat=-20&exp=8",
    author: "ResoBit Web Team",
    date: `${year}-06-10`,
    readingTime: "9 min read",
    tags: ["E‑commerce", "Bangalore", "Bengaluru", "React", "Payments", "SEO"],
    content: (
      <article className="prose prose-invert max-w-none">
        <h1>Build Fast Stores. Scale in India.</h1>
        <p>
          Bengaluru is a retail innovation hub. We design storefronts with blazing performance, structured
          data for SEO, and checkout flows optimized for Indian gateways like Razorpay and PayU.
        </p>
        <h2>What Matters for Growth</h2>
        <ul>
          <li>Core Web Vitals and image optimization</li>
          <li>Personalized merchandising and search</li>
          <li>Inventory, GST invoicing, and courier integrations</li>
        </ul>
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop" alt="E‑commerce operations in Bangalore" className="rounded-xl my-6" />
      </article>
    ),
  },
  {
    slug: "wordpress-development-bangalore-performance-seo",
    title: `WordPress Development in Bengaluru: Performance & SEO in ${year}`,
    description:
      "High‑performance WordPress stacks for Bangalore businesses: block themes, caching, and SEO foundations.",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    author: "ResoBit WP Studio",
    date: `${year}-07-02`,
    readingTime: "6 min read",
    tags: ["WordPress", "Bangalore", "Bengaluru", "SEO", "Caching"],
    content: (
      <article className="prose prose-invert max-w-none">
        <h1>Fast, Findable, and Flexible WordPress</h1>
        <p>
          We build block‑based themes with image CDNs, server‑side caching, and schema markup. Great for
          Bangalore SMEs needing lead gen and strong local SEO.
        </p>
        <h2>Local SEO for Bengaluru</h2>
        <p>
          NAP consistency, localized content, and structured data (Organization, LocalBusiness) help your
          brand rank across Bengaluru.
        </p>
      </article>
    ),
  },
  {
    slug: "college-projects-bangalore-ideas-and-roadmap",
    title: `Engineering College Projects in Bangalore: Ideas & Roadmap (${year})`,
    description:
      "Project ideas, documentation tips, and demo strategies for students in Bengaluru, guided by ResoBit.",
    coverImage:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
    author: "ResoBit Mentorship",
    date: `${year}-02-18`,
    readingTime: "5 min read",
    tags: ["College Projects", "Bangalore", "Bengaluru", "IoT", "Robotics"],
    content: (
      <article className="prose prose-invert max-w-none">
        <h1>From Idea to Demo Day</h1>
        <p>
          We mentor Bengaluru students through ideation, design, and documentation. Pick ideas that balance
          novelty, feasibility, and showcase value.
        </p>
        <ul>
          <li>IoT energy monitors</li>
          <li>Autonomous line‑following robots</li>
          <li>Vision‑based quality checks for manufacturing</li>
        </ul>
      </article>
    ),
  },
  {
    slug: "fun-tech-games-bangalore-interactive-electronics",
    title: `Electronic Fun‑tech Games in Bengaluru: Designing Interactive Experiences`,
    description:
      "How ResoBit blends hardware and software to build playful, educational electronic games in Bangalore.",
    coverImage:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop",
    author: "ResoBit Creative Lab",
    date: `${year}-03-05`,
    readingTime: "6 min read",
    tags: ["Electronics", "Games", "Bangalore", "Bengaluru", "STEM"],
    content: (
      <article className="prose prose-invert max-w-none">
        <h1>Playful Hardware, Serious Engineering</h1>
        <p>
          From sensor‑driven interactions to audio‑visual feedback loops, we craft durable, safe, and fun
          devices for events and education in Bengaluru.
        </p>
        <img src="https://images.unsplash.com/photo-1520975693416-35c2fa203a13?q=80&w=1600&auto=format&fit=crop" alt="Interactive electronics and games in Bengaluru" className="rounded-xl my-6" />
      </article>
    ),
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}


