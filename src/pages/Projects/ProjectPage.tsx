import {Link, useParams} from "react-router-dom"
import {type ProjectBlock, type ProjectTheme, projects} from "../../data/projects.ts"

function resolveTheme(t?: ProjectTheme): ProjectTheme {
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

function PageBackdrop({theme}: { theme: ProjectTheme }) {
    const glowLayer = {
        backgroundColor: theme.base,
        backgroundImage: `radial-gradient(1100px circle at 18% 20%, ${theme.glow1}, transparent 55%), radial-gradient(1100px circle at 82% 70%, ${theme.glow2}, transparent 60%), radial-gradient(1200px circle at 50% 110%, rgba(255,255,255,0.06), transparent 55%), linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.92))`
    } as any

    const patternStyle = (() => {
        if (theme.pattern === "grid") {
            return {
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                opacity: 0.12
            } as any
        }
        if (theme.pattern === "diagonal") {
            return {
                backgroundImage:
                    "repeating-linear-gradient(120deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 18px)",
                opacity: 0.10
            } as any
        }
        return {
            backgroundImage: "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
            opacity: 0.10
        } as any
    })()

    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0" style={glowLayer}/>
            <div className="absolute inset-0" style={patternStyle}/>
            <div
                className="absolute -top-36 -left-28 h-[520px] w-[520px] rounded-full blur-3xl opacity-70"
                style={{
                    backgroundImage: `radial-gradient(circle at 30% 30%, var(--p-glow1), transparent 62%)`
                }}
            />
            <div
                className="absolute -bottom-48 -right-36 h-[640px] w-[640px] rounded-full blur-3xl opacity-65"
                style={{
                    backgroundImage: `radial-gradient(circle at 60% 40%, var(--p-glow2), transparent 64%)`
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"/>
        </div>
    )
}

function CardGlow({side = "right"}: { side?: "left" | "right" }) {
    return (
        <div
            className={[
                "pointer-events-none absolute -top-28 h-56 w-56 rounded-full blur-3xl opacity-70",
                side === "right" ? "-right-28" : "-left-28"
            ].join(" ")}
            style={{
                backgroundImage: `radial-gradient(circle at 35% 35%, var(--p-glow1), transparent 70%)`
            }}
        />
    )
}

function AccentStripe() {
    return (
        <div
            className="pointer-events-none absolute left-0 top-0 h-full w-[2px] opacity-80"
            style={{
                backgroundImage: "linear-gradient(to bottom, var(--p-accent), transparent)"
            }}
        />
    )
}

function Block({b}: { b: ProjectBlock }) {
    if (b.type === "paragraph") {
        return (
            <div className="space-y-3">
                {b.title ? (
                    <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                        {b.title}
                    </div>
                ) : null}
                <p className="text-[15px] leading-relaxed text-white/70">{b.text}</p>
            </div>
        )
    }

    if (b.type === "quote") {
        return (
            <div
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm px-6 py-6">
                <CardGlow side="left"/>
                <div className="text-[18px] leading-relaxed text-white/80">“{b.text}”</div>
                {b.author ? (
                    <div className="mt-4 text-[12px] uppercase tracking-[0.22em] text-white/45">
                        {b.author}
                    </div>
                ) : null}
            </div>
        )
    }

    if (b.type === "bullets") {
        return (
            <div className="space-y-4">
                {b.title ? (
                    <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                        {b.title}
                    </div>
                ) : null}
                <ul className="space-y-3">
                    {b.items.map((it) => (
                        <li
                            key={it}
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white/70"
                        >
                            <div
                                className="pointer-events-none absolute inset-0 opacity-50"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(700px circle at 12% 30%, var(--p-glow1), transparent 60%)"
                                }}
                            />
                            <AccentStripe/>
                            <div className="relative pl-3">{it}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    if (b.type === "image") {
        return (
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/35">
                <CardGlow side="right"/>
                <div className="relative aspect-[16/9] w-full">
                    <img
                        src={b.src}
                        alt={b.alt}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        draggable={false}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "radial-gradient(900px circle at 20% 25%, var(--p-glow1), transparent 55%), radial-gradient(900px circle at 80% 70%, var(--p-glow2), transparent 60%)"
                        }}
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"/>
                </div>
                {b.caption ? (
                    <div className="px-5 py-4 text-[13px] text-white/55">{b.caption}</div>
                ) : null}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-3">
                {b.leftTitle ? (
                    <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                        {b.leftTitle}
                    </div>
                ) : null}
                <p className="text-[15px] leading-relaxed text-white/70">{b.left}</p>
            </div>
            <div className="space-y-3">
                {b.rightTitle ? (
                    <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                        {b.rightTitle}
                    </div>
                ) : null}
                <p className="text-[15px] leading-relaxed text-white/70">{b.right}</p>
            </div>
        </div>
    )
}

export default function ProjectPage() {
    const {slug} = useParams()
    const idx = projects.findIndex((p) => p.slug === slug)
    const project = idx >= 0 ? projects[idx] : null

    if (!project) {
        return (
            <section className="min-h-screen w-full">
                <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 pt-28 pb-24">
                    <div className="text-white/80">Project not found.</div>
                    <div className="mt-6">
                        <Link className="text-white/70 hover:text-white" to="/projects">
                            ← Back to Projects
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    const prev = idx > 0 ? projects[idx - 1] : null
    const next = idx < projects.length - 1 ? projects[idx + 1] : null
    const theme = resolveTheme(project.theme)

    const pageVars = {
        ["--p-accent" as any]: theme.accent,
        ["--p-accent2" as any]: theme.accent2,
        ["--p-glow1" as any]: theme.glow1,
        ["--p-glow2" as any]: theme.glow2
    } as any

    return (
        <section className="relative min-h-screen w-full" style={pageVars}>
            <PageBackdrop theme={theme}/>

            <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 pt-18 pb-24">
                <div className="mt-6 flex items-center justify-between">
                    <Link
                        to="/projects"
                        className="text-[12px] uppercase tracking-[0.22em] text-white/70 hover:text-[var(--p-accent)] transition-colors"
                    >
                        ← Projects
                    </Link>

                    <div className="text-[12px] uppercase tracking-[0.22em] text-white/45">
                        {project.year}
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-7">
                        <div className="text-[clamp(34px,5vw,56px)] leading-[0.98]">
                            <span
                                className="bg-[linear-gradient(90deg,var(--p-accent),rgba(255,255,255,0.94),var(--p-accent2))] bg-clip-text text-transparent">
                                {project.title}
                            </span>
                        </div>

                        <div className="mt-5 text-[15px] sm:text-[16px] text-white/60">
                            {project.subtitle}
                        </div>

                        <div
                            className="mt-6 h-px w-28 opacity-80"
                            style={{
                                backgroundImage:
                                    "linear-gradient(to right, var(--p-accent), rgba(255,255,255,0.20), transparent)"
                            }}
                        />

                        <div className="mt-8 text-[16px] leading-relaxed text-white/70">
                            {project.intro}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm px-6 py-6">
                            <CardGlow side="right"/>
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                                Project facts
                            </div>

                            <dl className="mt-5 space-y-4">
                                <div className="grid grid-cols-12 gap-4">
                                    <dt className="col-span-4 text-[12px] uppercase tracking-[0.22em] text-white/45">
                                        Role
                                    </dt>
                                    <dd className="col-span-8 text-[14px] text-white/70">
                                        {project.details.role}
                                    </dd>
                                </div>

                                <div className="grid grid-cols-12 gap-4">
                                    <dt className="col-span-4 text-[12px] uppercase tracking-[0.22em] text-white/45">
                                        Timeline
                                    </dt>
                                    <dd className="col-span-8 text-[14px] text-white/70">
                                        {project.details.timeline}
                                    </dd>
                                </div>

                                <div className="grid grid-cols-12 gap-4">
                                    <dt className="col-span-4 text-[12px] uppercase tracking-[0.22em] text-white/45">
                                        Stack
                                    </dt>
                                    <dd className="col-span-8 text-[14px] text-white/70">
                                        {project.details.stack}
                                    </dd>
                                </div>

                                <div className="grid grid-cols-12 gap-4">
                                    <dt className="col-span-4 text-[12px] uppercase tracking-[0.22em] text-white/45">
                                        Scope
                                    </dt>
                                    <dd className="col-span-8 text-[14px] leading-relaxed text-white/70">
                                        {project.details.responsibilities}
                                    </dd>
                                </div>
                            </dl>

                            {project.links?.length ? (
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.links.map((l) => (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-[12px] uppercase tracking-[0.22em] text-white/75 hover:text-[var(--p-accent)] transition-colors"
                                        >
                                            {l.label} →
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div
                    className="mt-12 relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl">
                    <div className="relative aspect-[16/9] w-full">
                        <img
                            src={project.cover}
                            alt={project.title}
                            className="absolute inset-0 h-full w-full object-cover object-center"
                            draggable={false}
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage:
                                    "radial-gradient(900px circle at 20% 25%, var(--p-glow1), transparent 55%), radial-gradient(900px circle at 80% 70%, var(--p-glow2), transparent 60%)"
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"/>
                        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"/>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-4">
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                                The brief
                            </div>
                            <div
                                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm px-6 py-6">
                                <CardGlow side="left"/>
                                <div className="text-white/80 text-[15px] leading-relaxed">
                                    {project.brief.context}
                                </div>

                                <div className="mt-6 h-px bg-white/10"/>

                                <div className="mt-6 text-white/75 text-[15px] leading-relaxed">
                                    <span className="text-white/55">Goal:</span> {project.brief.goal}
                                </div>

                                {project.brief.constraints ? (
                                    <div className="mt-3 text-white/65 text-[14px] leading-relaxed">
                                        <span className="text-white/45">Constraints:</span>{" "}
                                        {project.brief.constraints}
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                                Highlights
                            </div>
                            <div className="space-y-3">
                                {project.highlights.map((h) => (
                                    <div
                                        key={h}
                                        className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 px-6 py-5 text-white/75"
                                    >
                                        <div
                                            className="pointer-events-none absolute inset-0 opacity-40"
                                            style={{
                                                backgroundImage:
                                                    "radial-gradient(800px circle at 10% 35%, var(--p-glow1), transparent 62%)"
                                            }}
                                        />
                                        <AccentStripe/>
                                        <div className="relative pl-3">{h}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                                Case study
                            </div>
                            <div className="space-y-10">
                                {project.story.map((b, i) => (
                                    <Block key={i} b={b}/>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-10">
                        <div
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm px-6 py-6">
                            <CardGlow side="right"/>
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                                Outcomes
                            </div>

                            <div className="mt-5 space-y-5">
                                {project.outcomes.map((o) => (
                                    <div key={o.title} className="relative">
                                        <div className="text-white/85">{o.title}</div>
                                        <div className="mt-2 text-[14px] leading-relaxed text-white/60">
                                            {o.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/35">
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55 px-6 pt-6">
                                Gallery
                            </div>
                            <div className="px-6 pb-6 pt-4 grid grid-cols-1 gap-4">
                                {project.gallery.map((g) => (
                                    <div
                                        key={g.src}
                                        className="relative overflow-hidden rounded-2xl border border-white/10"
                                    >
                                        <div className="relative aspect-[4/3] w-full">
                                            {g.src.endsWith(".mp4") ? (
                                                <video
                                                    src={g.src}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                                />
                                            ) : (
                                                <>
                                                    <img
                                                        src={g.src}
                                                        alt={g.alt}
                                                        className="absolute inset-0 h-full w-full object-cover object-center"
                                                        draggable={false}
                                                    />

                                                    <div
                                                        className="absolute inset-0"
                                                        style={{
                                                            backgroundImage:
                                                                "radial-gradient(750px circle at 18% 22%, var(--p-glow1), transparent 58%), radial-gradient(750px circle at 82% 74%, var(--p-glow2), transparent 60%)"
                                                        }}
                                                    />

                                                    <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
                                                </>
                                            )}
                                        </div>

                                        {g.caption ? (
                                            <div className="px-4 py-3 text-[13px] text-white/55">
                                                {g.caption}
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm px-6 py-6">
                            <CardGlow side="left"/>
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/55">
                                Next
                            </div>

                            <div className="mt-5 space-y-3">
                                {prev ? (
                                    <Link
                                        to={`/projects/${prev.slug}`}
                                        className="block rounded-2xl border border-white/10 bg-black/20 px-6 py-5 hover:border-[var(--p-accent)] transition-colors"
                                    >
                                        <div className="text-[12px] uppercase tracking-[0.22em] text-white/45">
                                            Previous
                                        </div>
                                        <div className="mt-2 text-white/85">{prev.title}</div>
                                        <div className="mt-2 text-[13px] text-white/55">
                                            {prev.subtitle}
                                        </div>
                                    </Link>
                                ) : null}

                                {next ? (
                                    <Link
                                        to={`/projects/${next.slug}`}
                                        className="block rounded-2xl border border-white/10 bg-black/20 px-6 py-5 hover:border-[var(--p-accent)] transition-colors"
                                    >
                                        <div className="text-[12px] uppercase tracking-[0.22em] text-white/45">
                                            Next
                                        </div>
                                        <div className="mt-2 text-white/85">{next.title}</div>
                                        <div className="mt-2 text-[13px] text-white/55">
                                            {next.subtitle}
                                        </div>
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 h-px w-full bg-white/10"/>
            </div>
        </section>
    )
}
