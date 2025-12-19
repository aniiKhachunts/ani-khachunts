export type ProjectBlock =
    | { type: "paragraph"; title?: string; text: string }
    | { type: "quote"; text: string; author?: string }
    | { type: "bullets"; title?: string; items: string[] }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "twoCol"; leftTitle?: string; left: string; rightTitle?: string; right: string }

export type ProjectTheme = {
    kind: "fluxsim" | "qb" | "aurora"
    base: string
    accent: string
    accent2: string
    glow1: string
    glow2: string
    pattern: "grid" | "dots" | "diagonal"
}

export type Project = {
    slug: string
    title: string
    subtitle: string
    year: string
    cover: string
    hero?: string
    repo?: string
    live?: string
    theme?: ProjectTheme
    intro: string
    brief: {
        context: string
        goal: string
        constraints?: string
    }
    highlights: string[]
    outcomes: {
        title: string
        text: string
    }[]
    details: {
        role: string
        timeline: string
        stack: string
        responsibilities: string
    }
    links?: {
        label: string
        href: string
    }[]
    gallery: Array<{ src: string; alt: string; caption?: string }>
    story: ProjectBlock[]
}

export const projects: Project[] = [
    {
        slug: "fluxsim-crypto",
        title: "FluxSim",
        subtitle: "A sleek crypto landing with modern UI polish and interaction details",
        year: "2025",
        cover: "/images/projects/fluxsim/cover.jpg",
        hero: "/images/projects/fluxsim/hero.jpg",
        repo: "",
        live: "https://fluxsim-crypto.vercel.app",
        theme: {
            kind: "fluxsim",
            base: "#05090B",
            accent: "#2AF7DE",
            accent2: "#22D3EE",
            glow1: "rgba(42,247,222,0.18)",
            glow2: "rgba(34,211,238,0.12)",
            pattern: "grid"
        },
        intro:
            "A clean, modern crypto landing focused on hierarchy and atmosphere. The page is intentionally minimal, with polished interactions that make the experience feel responsive and expensive.",
        brief: {
            context:
                "Crypto pages often become visually noisy. The aim here was the opposite: calm, confident UI with careful details and smooth performance.",
            goal:
                "Deliver a landing that feels premium through spacing, contrast, and micro-interactions, while staying responsive and fast.",
            constraints:
                "Keep effects light and controllable so the page doesn’t turn into a heavy animation demo."
        },
        highlights: [
            "Minimal composition with strong hierarchy",
            "Micro-interactions that make UI feel tactile",
            "Responsive design that keeps the same vibe on mobile"
        ],
        outcomes: [
            {
                title: "Premium minimalism",
                text: "A dark, clean surface with consistent spacing creates a premium feel without relying on heavy visuals."
            },
            {
                title: "Maintainable structure",
                text: "Sections follow a predictable structure to make updates and iteration easy."
            }
        ],
        details: {
            role: "Front-end Development",
            timeline: "Several days",
            stack: "React, TypeScript, Tailwind CSS",
            responsibilities:
                "Responsive layout, UI polish, component structure, interaction tuning"
        },
        links: [
            { label: "View", href: "https://fluxsim-crypto.vercel.app" },
            { label: "Repository", href: "https://github.com/aniiKhachunts/fluxsim-crypto" }
        ],
        gallery: [
            {
                src: "/images/projects/fluxsim/hero.jpg",
                alt: "FluxSim hero",
                caption: "Hero: calm layout, strong type, minimal highlights."
            }
        ],
        story: [
            {
                type: "paragraph",
                title: "Approach",
                text:
                    "The page is built to feel calm and confident. Instead of stacking visuals, the design uses whitespace and typographic hierarchy to create structure."
            },
            {
                type: "bullets",
                title: "Polish details",
                items: [
                    "Hover feedback tuned to feel responsive",
                    "Consistent spacing rhythm between sections",
                    "Text contrast calibrated for readability on black"
                ]
            }
        ]
    },
    {
        slug: "qb-leaders-site",
        title: "QB Leaders",
        subtitle: "A minimal finance company website with elegant motion and clear structure",
        year: "2025",
        cover: "/images/projects/qb-leaders/cover.jpg",
        hero: "/images/projects/qb-leaders/hero.jpg",
        repo: "https://github.com/aniiKhachunts/qb-leaders",
        live: "",
        theme: {
            kind: "qb",
            base: "#070707",
            accent: "#F2C14E",
            accent2: "#34D399",
            glow1: "rgba(242,193,78,0.16)",
            glow2: "rgba(52,211,153,0.12)",
            pattern: "dots"
        },
        intro:
            "A finance website designed to feel trustworthy and modern: minimal styling, clean typography, and subtle motion that adds polish without reducing credibility.",
        brief: {
            context:
                "For a finance company, trust comes from clarity. The site needed a clean structure, strong readability, and a calm visual tone.",
            goal:
                "Design and implement a minimal, professional site with premium spacing and small interactions that feel modern and intentional.",
            constraints:
                "Avoid “too much” visual experimentation — the brand should feel stable and credible."
        },
        highlights: [
            "Trust-first typography and section hierarchy",
            "Subtle motion to add modern polish",
            "Designed and deployed end-to-end"
        ],
        outcomes: [
            {
                title: "Credibility through clarity",
                text: "The layout prioritizes readability and structure, which is crucial for finance-oriented audiences."
            },
            {
                title: "Modern but restrained",
                text: "Motion is minimal and supportive, giving the site a contemporary feel without looking playful."
            }
        ],
        details: {
            role: "Design + Development + Deployment",
            timeline: "1–2 weeks",
            stack: "React, TypeScript, Tailwind CSS",
            responsibilities:
                "Full design, responsive build, content structure, deployment setup and delivery"
        },
        links: [
            { label: "View", href: "https://qbleaders.com/" },
            {
                label: "Repository",
                href: "https://github.com/aniiKhachunts/qb-leaders"
            }
        ],
        gallery: [
            {
                src: "/images/projects/qb-leaders/hero.jpg",
                alt: "QB Leaders hero",
                caption: "Minimal hero composition designed for trust and clarity."
            }
        ],
        story: [
            {
                type: "paragraph",
                title: "Why it works",
                text:
                    "Finance websites should feel calm. This project focuses on typography, spacing, and a clean information flow that makes the content easy to trust."
            },
            {
                type: "twoCol",
                leftTitle: "Design focus",
                left:
                    "Clean sections, consistent rhythm, and careful contrast so the page feels stable and professional.",
                rightTitle: "Build focus",
                right:
                    "Componentized sections with predictable layouts, making content updates straightforward."
            }
        ]
    },
    {
        slug: "aurora-x1-landing",
        title: "Aurora X1 Landing",
        subtitle: "Futuristic marketing page with clean hierarchy and confident motion",
        year: "2025",
        cover: "/images/projects/aurora-x1/cover.jpg",
        hero: "/images/projects/aurora-x1/hero.jpg",
        repo: "https://github.com/aniiKhachunts/aurora-x1-landing",
        live: "https://aurora-x1-landing.vercel.app",
        theme: {
            kind: "aurora",
            base: "#070512",
            accent: "#C084FC",
            accent2: "#22D3EE",
            glow1: "rgba(192,132,252,0.20)",
            glow2: "rgba(34,211,238,0.14)",
            pattern: "diagonal"
        },
        intro:
            "A one-page landing that feels like a high-end product reveal. The layout is minimal and decisive, with motion used to lead attention through the narrative and create a sense of depth.",
        brief: {
            context:
                "The goal was to communicate a futuristic product identity quickly: a strong hero, a clean feature flow, and smooth interactions without visual overload.",
            goal:
                "Create a maintainable component-based landing page that stays crisp across devices and feels premium through motion and typography.",
            constraints:
                "Animations needed to stay smooth on lower-end devices and avoid layout shifts that break the “expensive” feel."
        },
        highlights: [
            "Hero moment built around typography + controlled glow",
            "Reusable section blocks for feature storytelling",
            "Motion system with consistent easing and timing"
        ],
        outcomes: [
            {
                title: "Clarity at speed",
                text: "Information is structured so users can scan fast, while motion reinforces hierarchy instead of adding noise."
            },
            {
                title: "Premium feel through restraint",
                text: "The design leans on contrast, spacing and subtle light rather than heavy gradients or decorations."
            }
        ],
        details: {
            role: "Design + Front-end Development",
            timeline: "1–2 weeks",
            stack: "React, TypeScript, Tailwind CSS, Framer Motion",
            responsibilities:
                "Layout composition, responsive implementation, motion design, UI polish, component refactor for reuse"
        },
        links: [
            { label: "View", href: "https://aurora-x1-landing.vercel.app" },
            { label: "Repository", href: "https://github.com/aniiKhachunts/aurora-x1-landing" }
        ],
        gallery: [
            {
                src: "/images/projects/aurora-x1/hero.jpg",
                alt: "Aurora X1 hero",
                caption: "Hero section: decisive typography and controlled glow."
            },
            {
                src: "/images/projects/aurora-x1/sections.jpg",
                alt: "Aurora X1 sections",
                caption: "Section rhythm: consistent spacing and readable feature blocks."
            }
        ],
        story: [
            {
                type: "paragraph",
                title: "The concept",
                text:
                    "Instead of building a “feature list”, the page is structured like a guided reveal: establish the vibe, deliver benefits, then reinforce trust with consistent structure."
            },
            {
                type: "twoCol",
                leftTitle: "Motion rules",
                left:
                    "Animations are subtle and predictable: reveal on entry, micro-feedback on hover, and minimal parallax-like cues to add depth.",
                rightTitle: "Layout rules",
                right:
                    "Text-first sections, strict spacing, and stable containers to prevent shifts and keep the page calm."
            },
            {
                type: "bullets",
                title: "Key decisions",
                items: [
                    "Keep typography as the primary visual material",
                    "Use one highlight color, never a rainbow",
                    "Structure sections as reusable blocks",
                    "Prefer stable motion over “flashy” motion"
                ]
            }
        ]
    }
]
