import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type Project = {
    title: string
    subtitle: string
    year: string
    href: string
    cover: string
}

export default function Projects() {
    const projects = useMemo<Project[]>(
        () => [
            {
                title: "Fluxsim Crypto",
                subtitle: "Landing / Motion / UI",
                year: "2025",
                href: "https://github.com/aniiKhachunts/fluxsim-crypto",
                cover: "/images/projects/fluxsim.jpg"
            },
            {
                title: "Aurora X1 Landing",
                subtitle: "Futuristic Landing / Interactions",
                year: "2025",
                href: "https://github.com/aniiKhachunts/aurora-x1-landing",
                cover: "/images/projects/aurora.jpg"
            },
            {
                title: "QB Leaders",
                subtitle: "Finance Website / Minimal",
                year: "2025",
                href: "https://github.com/aniiKhachunts/qb-leader",
                cover: "/images/projects/qb.jpg"
            }
        ],
        []
    )

    const [activeIdx, setActiveIdx] = useState<number | null>(null)
    const active = activeIdx !== null ? projects[activeIdx] : null

    return (
        <section className="relative min-h-screen w-full">
            <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 pt-28 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-7">
                        <div className="flex items-end justify-between">
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                                Projects
                            </div>
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                                {String(projects.length).padStart(2, "0")}
                            </div>
                        </div>

                        <div className="mt-6 h-px w-full bg-white/10" />

                        <div
                            className="mt-6 space-y-2"
                            onMouseLeave={() => setActiveIdx(null)}
                        >
                            {projects.map((p, idx) => {
                                const isActive = idx === activeIdx
                                return (
                                    <a
                                        key={p.title}
                                        href={p.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        onMouseEnter={() => setActiveIdx(idx)}
                                        onFocus={() => setActiveIdx(idx)}
                                        className="group block"
                                    >
                                        <div
                                            className={[
                                                "relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm",
                                                "transition-all duration-300",
                                                isActive
                                                    ? "bg-white/[0.04] border-white/15"
                                                    : "hover:bg-white/[0.03] hover:border-white/15"
                                            ].join(" ")}
                                        >
                                            <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 text-[12px] text-white/45 tabular-nums">
                                                        {String(idx + 1).padStart(2, "0")}
                                                    </div>

                                                    <div>
                                                        <div className="flex items-baseline gap-3">
                                                            <div className="text-[clamp(16px,2.1vw,20px)] text-white/90">
                                                                {p.title}
                                                            </div>
                                                            <div className="hidden sm:block text-[12px] uppercase tracking-[0.22em] text-white/40">
                                                                {p.year}
                                                            </div>
                                                        </div>

                                                        <div className="mt-1 text-[13px] text-white/55">
                                                            {p.subtitle}
                                                        </div>
                                                    </div>
                                                </div>

                                                <motion.div
                                                    aria-hidden="true"
                                                    className="flex items-center gap-3"
                                                    initial={false}
                                                    animate={{ opacity: isActive ? 1 : 0.55 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    <div className="hidden sm:block text-[12px] uppercase tracking-[0.22em] text-white/45">
                                                        View
                                                    </div>

                                                    <motion.div
                                                        className="text-white/85"
                                                        initial={false}
                                                        animate={{ x: isActive ? 3 : 0 }}
                                                        transition={{ duration: 0.25 }}
                                                    >
                                                        →
                                                    </motion.div>
                                                </motion.div>
                                            </div>

                                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute inset-0 rounded-2xl opacity-[0.55] bg-[radial-gradient(800px_circle_at_20%_20%,rgba(0,89,89,0.18),transparent_55%),radial-gradient(600px_circle_at_85%_70%,rgba(255,255,255,0.08),transparent_60%)]" />
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-28">
                            <AnimatePresence mode="wait">
                                {active ? (
                                    <motion.div
                                        key={active.title}
                                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                                        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                                        className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl overflow-hidden"
                                    >
                                        <div className="relative aspect-[4/5] w-full">
                                            <motion.img
                                                key={active.cover}
                                                src={active.cover}
                                                alt={active.title}
                                                className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
                                                initial={{ opacity: 0, scale: 1.02 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 1.01 }}
                                                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                                                draggable={false}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
                                        </div>

                                        <div className="px-5 py-4">
                                            <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                                                {active.year}
                                            </div>

                                            <div className="mt-2 text-[clamp(16px,2vw,18px)] text-white/90">
                                                {active.title}
                                            </div>

                                            <div className="mt-2 text-[13px] leading-relaxed text-white/65">
                                                {active.subtitle}
                                            </div>

                                            <div className="mt-4 flex items-center justify-between">
                                                <div className="text-[12px] uppercase tracking-[0.22em] text-white/45">
                                                    Repository
                                                </div>

                                                <a
                                                    href={active.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-[12px] uppercase tracking-[0.22em] text-white/75 hover:text-white transition-colors"
                                                >
                                                    Open →
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="empty"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
                                        className="h-[520px] lg:h-[680px]"
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
