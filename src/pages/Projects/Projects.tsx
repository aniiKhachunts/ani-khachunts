import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
import { projects as projectsData, type ProjectTheme } from "../../data/projects"

function resolveTheme(t?: ProjectTheme | null): ProjectTheme {
    if (t) return t
    return {
        kind: "fluxsim",
        base: "#05090B",
        accent: "#2AF7DE",
        accent2: "#22D3EE",
        glow1: "rgba(42,247,222,0.18)",
        glow2: "rgba(34,211,238,0.12)",
        pattern: "grid"
    }
}

function themeLabel(t: ProjectTheme) {
    if (t.kind === "qb") return "Finance"
    if (t.kind === "aurora") return "Futuristic"
    return "Crypto"
}

function themeTone(t: ProjectTheme) {
    if (t.kind === "qb") return "Trust-first, minimal, calm motion, clean hierarchy."
    if (t.kind === "aurora") return "Premium reveal energy, controlled glow, confident motion."
    return "Minimal dark surface, crisp accents, modern interaction polish."
}

function patternOverlay(t: ProjectTheme) {
    if (t.pattern === "grid") {
        return "linear-gradient(rgba(255,255,255,0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.065) 1px, transparent 1px)"
    }
    if (t.pattern === "diagonal") {
        return "repeating-linear-gradient(120deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 18px)"
    }
    return "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)"
}

function patternSize(t: ProjectTheme) {
    if (t.pattern === "grid") return "72px 72px"
    if (t.pattern === "dots") return "26px 26px"
    return "auto"
}

function hoverBg(t: ProjectTheme) {
    return `radial-gradient(900px circle at 18% 35%, ${t.glow1}, transparent 62%),
radial-gradient(900px circle at 82% 65%, ${t.glow2}, transparent 64%),
linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00) 35%, rgba(255,255,255,0.02))`
}

function previewBg(t: ProjectTheme) {
    return `radial-gradient(1000px circle at 18% 22%, ${t.glow1}, transparent 62%),
radial-gradient(1000px circle at 82% 70%, ${t.glow2}, transparent 66%),
linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.55))`
}

function previewFxA(t: ProjectTheme) {
    return `radial-gradient(850px circle at 30% 35%, rgba(255,255,255,0.06), transparent 62%),
radial-gradient(850px circle at 70% 72%, rgba(255,255,255,0.04), transparent 65%)`
}

function previewFxB(t: ProjectTheme) {
    return `radial-gradient(900px circle at 35% 40%, ${t.glow1}, transparent 70%),
radial-gradient(900px circle at 70% 65%, ${t.glow2}, transparent 72%)`
}

export default function Projects() {
    const projects = useMemo(() => projectsData, [])
    const [activeIdx, setActiveIdx] = useState<number | null>(null)

    const active = activeIdx !== null ? projects[activeIdx] : null
    const theme = resolveTheme(active?.theme ?? null)

    const pageVars = {
        ["--p-accent" as any]: theme.accent,
        ["--p-accent2" as any]: theme.accent2
    } as any

    return (
        <section className="relative min-h-screen w-full" style={pageVars}>
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

                        <div className="mt-6 space-y-2" onMouseLeave={() => setActiveIdx(null)}>
                            {projects.map((p, idx) => {
                                const isActive = idx === activeIdx
                                const t = resolveTheme(p.theme ?? null)

                                const itemVars = {
                                    ["--c1" as any]: t.accent,
                                    ["--c2" as any]: t.accent2,
                                    ["--g1" as any]: t.glow1,
                                    ["--g2" as any]: t.glow2
                                } as any

                                return (
                                    <Link
                                        key={p.slug}
                                        to={`/projects/${p.slug}`}
                                        onMouseEnter={() => setActiveIdx(idx)}
                                        onFocus={() => setActiveIdx(idx)}
                                        className="group block"
                                        style={itemVars}
                                    >
                                        <div
                                            className={[
                                                "relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm",
                                                "transition-all duration-300 overflow-hidden",
                                                isActive
                                                    ? "bg-white/[0.04] border-white/15"
                                                    : "hover:bg-white/[0.03] hover:border-white/15"
                                            ].join(" ")}
                                            style={
                                                isActive
                                                    ? {
                                                        boxShadow:
                                                            "0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px rgba(0,0,0,0.45), 0 0 42px var(--g1)"
                                                    }
                                                    : undefined
                                            }
                                        >
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        backgroundImage: hoverBg(t)
                                                    }}
                                                />
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        backgroundImage: patternOverlay(t),
                                                        backgroundSize: patternSize(t),
                                                        opacity: 0.11
                                                    }}
                                                />
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        backgroundImage:
                                                            "radial-gradient(900px circle at 30% 40%, rgba(255,255,255,0.06), transparent 60%)"
                                                    }}
                                                />
                                            </div>

                                            <div className="relative flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-10 pt-1 text-[12px] text-white/45 tabular-nums">
                                                        {String(idx + 1).padStart(2, "0")}
                                                    </div>

                                                    <div className="min-w-0">
                                                        <div className="flex items-baseline gap-3">
                                                            <div className="truncate text-[clamp(16px,2.1vw,20px)] text-white/92">
                                                                {p.title}
                                                            </div>
                                                            <div className="hidden sm:block text-[12px] uppercase tracking-[0.22em] text-white/40">
                                                                {p.year}
                                                            </div>
                                                        </div>

                                                        <div className="mt-1 text-[13px] text-white/60">{p.subtitle}</div>

                                                        <div className="mt-2 flex items-center gap-3">
                                                            <div
                                                                className="h-px w-10"
                                                                style={{
                                                                    background:
                                                                        "linear-gradient(90deg, var(--c1), transparent)"
                                                                }}
                                                            />
                                                            <div
                                                                className="text-[11px] uppercase tracking-[0.26em]"
                                                                style={{
                                                                    color: isActive ? "rgba(255,255,255,0.70)" : "rgba(255,255,255,0.45)"
                                                                }}
                                                            >
                                                                {themeLabel(t)}
                                                            </div>
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
                                                        Open
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

                                            <div
                                                className="absolute left-0 top-0 h-full w-[2px] opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                                                style={{
                                                    backgroundImage: "linear-gradient(to bottom, var(--c1), transparent)"
                                                }}
                                            />
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-28">
                            <AnimatePresence mode="wait">
                                {active ? (
                                    <motion.div
                                        key={active.slug}
                                        initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                                        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                                        className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl overflow-hidden"
                                    >
                                        <div className="relative aspect-[4/5] w-full">
                                            <div className="absolute inset-0" style={{ backgroundImage: previewBg(theme) }} />

                                            <motion.div
                                                className="absolute inset-0 opacity-[0.9]"
                                                style={{ backgroundImage: previewFxA(theme) }}
                                                initial={{ opacity: 0.0 }}
                                                animate={{ opacity: 0.9 }}
                                                transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                                            />

                                            <motion.div
                                                className="absolute -inset-10 opacity-[0.45]"
                                                style={{ backgroundImage: previewFxB(theme) }}
                                                animate={{ x: [0, 10, -6, 0], y: [0, -8, 6, 0] }}
                                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                            />

                                            <div
                                                className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
                                                style={{
                                                    backgroundImage: patternOverlay(theme),
                                                    backgroundSize: patternSize(theme)
                                                }}
                                            />

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

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-transparent" />
                                            <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />

                                            <div className="absolute left-5 top-5 right-5">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-[11px] uppercase tracking-[0.28em] text-white/60">
                                                        {themeLabel(theme)}
                                                    </div>
                                                    <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                                                        {active.year}
                                                    </div>
                                                </div>

                                                <div className="mt-3 h-px w-full bg-white/10" />

                                                <div className="mt-3">
                                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-white/70">
                                                        <span
                                                            className="h-2 w-2 rounded-full"
                                                            style={{
                                                                background:
                                                                    "linear-gradient(180deg, var(--p-accent), var(--p-accent2))"
                                                            }}
                                                        />
                                                        Preview
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="absolute left-5 right-5 bottom-5">
                                                <div className="text-[clamp(18px,2.3vw,22px)] text-white/92">{active.title}</div>

                                                <div className="mt-2 text-[13px] leading-relaxed text-white/62">
                                                    {themeTone(theme)}
                                                </div>

                                                <div className="mt-3 flex items-center gap-3">
                                                    <div
                                                        className="h-px flex-1"
                                                        style={{
                                                            background:
                                                                "linear-gradient(90deg, var(--p-accent), transparent)"
                                                        }}
                                                    />
                                                    <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                                                        Open full story →
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-5 py-4">
                                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                                                Inside
                                            </div>

                                            <div className="mt-3 space-y-3">
                                                <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                                                    <div className="text-[11px] uppercase tracking-[0.26em] text-white/50">
                                                        Concept
                                                    </div>
                                                    <div className="mt-1 text-[13px] leading-relaxed text-white/70">
                                                        {active.intro}
                                                    </div>
                                                </div>

                                                <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                                                    <div className="text-[11px] uppercase tracking-[0.26em] text-white/50">
                                                        Build notes
                                                    </div>
                                                    <div className="mt-1 text-[13px] leading-relaxed text-white/70">
                                                        Role: {active.details.role}. Stack: {active.details.stack}. Timeline: {active.details.timeline}.
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex items-center justify-between">
                                                <Link
                                                    to={`/projects/${active.slug}`}
                                                    className="text-[12px] uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
                                                >
                                                    Open project →
                                                </Link>

                                                {active.live ? (
                                                    <a
                                                        href={active.live}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-[12px] uppercase tracking-[0.22em] text-white/70 hover:text-white transition-colors"
                                                    >
                                                        Live →
                                                    </a>
                                                ) : null}
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
                                    >
                                        <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
