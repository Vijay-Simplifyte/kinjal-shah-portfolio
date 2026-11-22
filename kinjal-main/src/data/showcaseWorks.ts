export interface ShowcaseImage {
  src: string;
  w: number;
  h: number;
}

export interface ShowcaseWork {
  c: string;
  t: string;
  d: string;
  imgs?: ShowcaseImage[];
  g: [string, string];
  tools: string[];
  pos?: string;
  fit?: "cover" | "contain";
  u?: string;
  caseStudyUrl?: string;
}

export const SHOWCASE_WORKS: ShowcaseWork[] = [
  // Landing Pages
  {
    c: "Landing Pages",
    t: "The Perfect Home",
    d: "A modern architecture landing page featuring scenic landscapes, elegant typography, and warm neutral tones to showcase premium homes and contemporary living.",
    imgs: [
      { src: "/project_k/3. Landing Pages/1.The Perfect Home.png", w: 1728, h: 1117 },
    ],
    g: ["#C85A1E", "#E07A45"],
    tools: ["Figma"],
    fit: "contain",
  },
  {
    c: "Landing Pages",
    t: "Skincare & Beauty",
    d: "A minimalist beauty landing page combining elegant skincare photography, soft neutral colors, and glass-style panels to create a luxurious digital experience.",
    imgs: [
      { src: "/project_k/3. Landing Pages/2.Skincare & Beauty.png", w: 1728, h: 1117 },
    ],
    g: ["#B8956A", "#D4A97A"],
    tools: ["Figma"],
    fit: "contain",
  },
  {
    c: "Landing Pages",
    t: "Headphone Accessories",
    d: "A sleek electronics landing page featuring bold product visuals, dark contrasting colors, and modern layouts to highlight premium headphone accessories.",
    imgs: [
      { src: "/project_k/3. Landing Pages/3.Headphone Accessories.png", w: 1024, h: 661 },
    ],
    g: ["#2E2416", "#4A3828"],
    tools: ["Figma"],
    fit: "contain",
  },
  {
    c: "Landing Pages",
    t: "Coffee House",
    d: "A modern coffee shop landing page featuring rich coffee imagery, warm golden accents, and a dark aesthetic designed to create an inviting cafe experience.",
    imgs: [
      { src: "/project_k/3. Landing Pages/4.Coffee House.png", w: 1024, h: 661 },
    ],
    g: ["#7A4A28", "#A0663C"],
    tools: ["Figma"],
    fit: "contain",
  },
  // Social Media
  {
    c: "Social Media",
    t: "Radiate Confidence",
    d: "A stylish fashion promotional design combining elegant typography, soft neutral colors, and modern editorial visuals to create a bold, sophisticated look.",
    imgs: [
      { src: "/project_k/1. Social Media Posts/1.Radiate Confidence.png", w: 1080, h: 1350 },
    ],
    g: ["#C85A1E", "#E07A45"],
    tools: ["Photoshop", "Figma"],
    fit: "contain",
  },
  {
    c: "Social Media",
    t: "Glow Skin Serum",
    d: "A refreshing skincare product design featuring icy blue tones, floral elements, and elegant product visuals to communicate freshness, beauty, and luxury.",
    imgs: [
      { src: "/project_k/1. Social Media Posts/2.Glow Skin Serum.png", w: 1080, h: 1350 },
    ],
    g: ["#5A8A9F", "#7AAABB"],
    tools: ["Photoshop", "Canva"],
    fit: "contain",
  },
  {
    c: "Social Media",
    t: "Rice Bowl",
    d: "A vibrant food promotional design featuring bold typography, rich green tones, and appetizing food photography to create an eye-catching visual.",
    imgs: [
      { src: "/project_k/1. Social Media Posts/3.Rice Bowl.png", w: 1080, h: 1350 },
    ],
    g: ["#4A7A4A", "#6A9A6A"],
    tools: ["Photoshop", "Canva"],
    fit: "contain",
  },
  {
    c: "Social Media",
    t: "Hello, I'm Kinjal",
    d: "A modern personal introduction post featuring bold red gradients, geometric shapes, and minimal typography for a clean and confident digital identity.",
    imgs: [
      { src: "/project_k/1. Social Media Posts/4.Hello, I'm Kinjal.png", w: 623, h: 623 },
    ],
    g: ["#C85A1E", "#A8471A"],
    tools: ["Figma", "Photoshop"],
    fit: "contain",
  },
  {
    c: "Social Media",
    t: "Eat. Chill. Repeat.",
    d: "A creative food advertisement featuring delicious meal photography, warm colors, and playful typography to create an inviting promotional design.",
    imgs: [
      { src: "/project_k/6. Social Media Posters/1.Eat. Chill. Repeat..png", w: 1122, h: 1402 },
    ],
    g: ["#9A6230", "#C07840"],
    tools: ["Photoshop", "Canva"],
    fit: "contain",
  },
  {
    c: "Social Media",
    t: "R.K. Enterprise - Step Inside",
    d: "A professional showroom promotional poster featuring elegant interior photography, premium typography, and warm lighting to highlight the shopping experience.",
    imgs: [
      { src: "/project_k/6. Social Media Posters/2.R.K. Enterprise – Step Inside.png", w: 1122, h: 1402 },
    ],
    g: ["#2A3A4A", "#3A4E62"],
    tools: ["Photoshop", "Figma"],
    fit: "contain",
  },
  {
    c: "Social Media",
    t: "R.K. Enterprise - Business Showcase",
    d: "A modern business promotional design featuring storefront photography, product highlights, and structured layouts to communicate the brand's presence and offerings.",
    imgs: [
      { src: "/project_k/6. Social Media Posters/3.R.K. Enterprise – Business Showcase.png", w: 1254, h: 1254 },
    ],
    g: ["#1A2A3A", "#2E4258"],
    tools: ["Photoshop", "Figma"],
    fit: "contain",
  },
  {
    c: "Social Media",
    t: "Less Chaos, Better Work",
    d: "A playful social media design featuring a cute illustrated character, calming blue tones, and minimal typography to communicate a stress-free work experience.",
    imgs: [
      { src: "/project_k/6. Social Media Posters/4.Less Chaos, Better Work.png", w: 1086, h: 1448 },
    ],
    g: ["#4A6A9A", "#6A8ABE"],
    tools: ["Photoshop", "Illustrator"],
    fit: "contain",
  },
  {
    c: "Social Media",
    t: "Ownership & Deadlines",
    d: "A minimalist motivational post combining an adorable elephant illustration, soft blue backgrounds, and meaningful typography to highlight workplace responsibility.",
    imgs: [
      { src: "/project_k/6. Social Media Posters/5.Ownership & Deadlines.png", w: 1254, h: 1254 },
    ],
    g: ["#5A7A9A", "#7A9ABA"],
    tools: ["Photoshop", "Canva"],
    fit: "contain",
  },
  {
    c: "Social Media",
    t: "Kaam No Load Chhe?",
    d: "A fun Gujarati promotional post featuring expressive photography, bold typography, and a playful layout to connect with audiences through relatable workplace humor.",
    imgs: [
      { src: "/project_k/6. Social Media Posters/6.Kaam No Load Chhe.png", w: 1122, h: 1402 },
    ],
    g: ["#C85A1E", "#E07A45"],
    tools: ["Photoshop", "Canva"],
    fit: "contain",
  },
  // Book Design
  {
    c: "Book Design",
    t: "Less Chaos. More Clarity.",
    d: "A professional book cover design for Simplifyte featuring bold typography, clean illustrations, and a blue-and-white color palette that reflects clarity and teamwork.",
    imgs: [
      { src: "/project_k/2. Book Design/1.Simplifyte Book Cover/1.png", w: 2480, h: 3508 },
      { src: "/project_k/2. Book Design/1.Simplifyte Book Cover/2.png", w: 2480, h: 3508 },
      { src: "/project_k/2. Book Design/1.Simplifyte Book Cover/3.png", w: 3487, h: 3487 },
    ],
    g: ["#2A4A7A", "#3A6AA0"],
    tools: ["Photoshop", "InDesign"],
    fit: "contain",
  },
  // Brochures
  {
    c: "Brochures",
    t: "Simplifyte - Work Smarter",
    d: "A professional business brochure showcasing Simplifyte's workflow management features through clean layouts, modern typography, and consistent brand visuals.",
    imgs: [
      { src: "/project_k/4. Brochures/1.Simplifyte – Work Smarter/1.jpg", w: 1877, h: 3988 },
      { src: "/project_k/4. Brochures/1.Simplifyte – Work Smarter/2.jpg", w: 451, h: 957 },
      { src: "/project_k/4. Brochures/1.Simplifyte – Work Smarter/3.jpg", w: 451, h: 957 },
      { src: "/project_k/4. Brochures/1.Simplifyte – Work Smarter/4.jpg", w: 1877, h: 3988 },
      { src: "/project_k/4. Brochures/1.Simplifyte – Work Smarter/5.jpg", w: 451, h: 957 },
      { src: "/project_k/4. Brochures/1.Simplifyte – Work Smarter/6.jpg", w: 451, h: 957 },
    ],
    g: ["#C85A1E", "#E07A45"],
    tools: ["Photoshop", "InDesign", "Figma"],
    fit: "contain",
  },
  {
    c: "Brochures",
    t: "Construction Equipment Brochure",
    d: "A modern industrial brochure featuring construction machinery, structured information, and a fresh green-and-white color palette for clear product communication.",
    imgs: [
      { src: "/project_k/4. Brochures/2.Construction Equipment Brochure/1.png", w: 280, h: 595 },
      { src: "/project_k/4. Brochures/2.Construction Equipment Brochure/2.png", w: 280, h: 595 },
      { src: "/project_k/4. Brochures/2.Construction Equipment Brochure/3.png", w: 280, h: 595 },
      { src: "/project_k/4. Brochures/2.Construction Equipment Brochure/4.png", w: 280, h: 595 },
      { src: "/project_k/4. Brochures/2.Construction Equipment Brochure/5.jpg", w: 1167, h: 2480 },
      { src: "/project_k/4. Brochures/2.Construction Equipment Brochure/6.png", w: 280, h: 595 },
    ],
    g: ["#4A7A3A", "#6A9A58"],
    tools: ["Photoshop", "InDesign", "Canva"],
    fit: "contain",
  },
  // Logo Design
  {
    c: "Logo Design",
    t: "Ghodeer Cab",
    d: "A creative cab service logo combining elegant letterforms with a car silhouette, using warm metallic tones to establish a distinctive brand identity.",
    imgs: [
      { src: "/project_k/5. Logo Design/1.Ghodeer Cab/1.png", w: 800, h: 800 },
      { src: "/project_k/5. Logo Design/1.Ghodeer Cab/2.png", w: 1280, h: 720 },
      { src: "/project_k/5. Logo Design/1.Ghodeer Cab/3.png", w: 760, h: 766 },
    ],
    g: ["#1A1208", "#2E2416"],
    tools: ["Figma", "Photoshop", "Illustrator"],
    fit: "contain",
  },
  {
    c: "Logo Design",
    t: "MOKA Cafe",
    d: "A stylish cafe logo featuring coffee-inspired typography, earthy tones, and a subtle leaf accent, designed for a warm and memorable brand identity.",
    imgs: [
      { src: "/project_k/5. Logo Design/2.MOKA Café/1.png", w: 724, h: 530 },
      { src: "/project_k/5. Logo Design/2.MOKA Café/2.png", w: 1448, h: 1086 },
      { src: "/project_k/5. Logo Design/2.MOKA Café/3.png", w: 959, h: 1024 },
    ],
    g: ["#7A4A28", "#A0663C"],
    tools: ["Figma", "Illustrator"],
    fit: "contain",
  },
  // Creative Designs
  {
    c: "Creative Designs",
    t: "Workflow Clarity for Professional Teams",
    d: "A modern promotional standee for Simplifyte featuring friendly illustrations, clean typography, and branded elements to communicate productivity and teamwork.",
    imgs: [
      { src: "/project_k/7. Creative Designs/1.Workflow Clarity for Professional Teams.png", w: 3464, h: 8291 },
    ],
    g: ["#C85A1E", "#E07A45"],
    tools: ["Figma", "Photoshop", "Canva"],
    fit: "contain",
  },
  {
    c: "Creative Designs",
    t: "Deadlines. Teams. Clients.",
    d: "A bold corporate standee featuring mountain imagery, impactful typography, and a premium blue palette to represent clarity, coordination, and professional growth.",
    imgs: [
      { src: "/project_k/7. Creative Designs/2.Deadlines. Teams. Clients..png", w: 3464, h: 8291 },
    ],
    g: ["#2A3A4A", "#3A5068"],
    tools: ["Figma", "Photoshop", "Canva"],
    fit: "contain",
  },
];

export const SHOWCASE_CATEGORIES: string[] = [
  "All",
  "Landing Pages",
  "Social Media",
  "Book Design",
  "Brochures",
  "Logo Design",
  "Creative Designs",
];

export const TICKER_ITEMS: string[] = [
  "UI design",
  "UX design",
  "Landing pages",
  "Mobile screens",
  "Branding",
  "Logos",
  "Brochures",
  "Social media",
];
