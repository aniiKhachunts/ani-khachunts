export default function AboutContent() {
    return (
        <section className="relative w-full space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
                <div className="lg:col-span-5 flex justify-center lg:justify-start">
                    <div className="w-full max-w-[680px]">
                        <img
                            src="/about.JPG"
                            alt="Ani Khachunts portrait"
                            className="w-full h-auto object-contain rounded-2xl"
                            draggable={false}
                        />

                        <div className="mt-6 flex items-center gap-3">
                            <div className="h-px flex-1 bg-white/10" />
                            <div className="flex flex-col items-center justify-center text-white/80 text-[13px] text-center">
                                <div>Ani Khachunts</div>
                                <div className="text-white/45">Frontend / Creative Developer</div>
                            </div>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 space-y-7 lg:pl-2">
                    <h2 className="text-[clamp(30px,4.2vw,46px)] leading-[1.05] text-white">
                        I build interfaces that feel calm, clear, and intentional.
                    </h2>

                    <div className="space-y-4 text-white/70 text-[16px] leading-relaxed">
                        <p>
                            I’m Ani - a Frontend / Creative Developer. I turn ideas into modern web experiences
                            where structure is clean, motion feels natural, and every detail has a reason.
                        </p>

                        <p>
                            I’ve built complex products: dashboards, admin panels, and real tools used in production.
                            That work taught me how to design systems that scale - but the part I love most is creating:
                            shaping the full experience, not just shipping screens.
                        </p>
                    </div>

                    <div className="pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                                { t: "Clarity-first UI", d: "Simple layouts that read fast." },
                                { t: "Thoughtful motion", d: "Movement that guides attention." },
                                { t: "Real performance", d: "Smooth on real devices." },
                            ].map((x) => (
                                <div
                                    key={x.t}
                                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 hover:bg-white/[0.06] transition"
                                >
                                    <div className="text-white/90 text-[15px] font-medium">{x.t}</div>
                                    <div className="mt-1 text-white/60 text-[13px] leading-snug">{x.d}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute left-0 right-0 -top-8 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-2">
                    <div className="lg:col-span-5 space-y-4">
                        <div className="inline-flex items-center gap-3">
                            <div className="h-[10px] w-[10px] rounded-full bg-white/25" />
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/45">
                                Philosophy
                            </div>
                        </div>

                        <p className="text-white/70 leading-relaxed">
                            Minimal doesn’t mean empty. Modern doesn’t mean noisy. Premium doesn’t mean heavy.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            The best interfaces feel effortless - because the choices behind them are careful.
                        </p>
                        <p className="text-white/80 leading-relaxed">
                            My goal is simple: make the user feel guided, not overwhelmed.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {["Hierarchy", "Rhythm", "Restraint", "Consistency", "Contrast"].map((t) => (
                                <span
                                    key={t}
                                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[12px] text-white/65"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-3">
                            <div className="h-px w-10 bg-white/15" />
                            <div className="text-[12px] uppercase tracking-[0.28em] text-white/45">
                                How I work
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            {[
                                { title: "Start with structure", text: "Clear components, clean boundaries, scalable patterns." },
                                { title: "Design the reading path", text: "Hierarchy first, decoration second." },
                                { title: "Use motion with purpose", text: "Animation should explain what’s happening." },
                                { title: "Make it feel fast", text: "Performance and polish are part of the design." },
                                { title: "Keep it timeless", text: "Strong fundamentals over trend noise." },
                                { title: "Ship with care", text: "Details, spacing, and states are always finished." },
                            ].map((item, i) => (
                                <div
                                    key={item.title}
                                    className="group relative rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition hover:bg-white/[0.05]"
                                >
                                    <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition" />
                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 text-white/35 text-[12px] tabular-nums">
                                            {(i + 1).toString().padStart(2, "0")}
                                        </div>
                                        <div>
                                            <div className="text-white/90 font-medium">{item.title}</div>
                                            <div className="mt-1 text-white/65 text-[14px] leading-relaxed">{item.text}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 -z-10 opacity-[0.6] bg-[radial-gradient(700px_circle_at_20%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4">
                    <div className="space-y-4">
                        <div className="text-[12px] uppercase tracking-[0.28em] text-white/45">
                            Craft
                        </div>

                        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
                            <div className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.10),transparent)]" />
                            <p className="relative text-white/70 leading-relaxed">
                                I don’t split design and development. I work end-to-end:
                                idea → layout → interaction → implementation.
                            </p>
                        </div>

                        <p className="text-white/70 leading-relaxed">
                            That means clean React + TypeScript, but also tight spacing, consistent rhythm,
                            and motion timing that feels right when you scroll.
                        </p>

                        <p className="text-white/70 leading-relaxed">
                            Recently, I’ve been blending structured UI with subtle depth - and sometimes
                            3D or atmospheric layers when the concept truly needs it.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="text-[12px] uppercase tracking-[0.28em] text-white/45">
                            Beyond code
                        </div>

                        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 overflow-hidden">
                            <div className="pointer-events-none absolute -top-24 -right-28 h-[280px] w-[280px] rounded-full bg-white/8 blur-3xl" />
                            <p className="text-white/70 leading-relaxed">
                                I’m also a violinist with 20+ years of experience. Music trained my eye for rhythm,
                                tension, and restraint.
                            </p>

                            <div className="mt-4 border-t border-white/10 pt-4">
                                <p className="text-white/70 leading-relaxed">
                                    Interface design is similar: timing matters. Silence matters. Flow matters.
                                </p>
                                <p className="mt-3 text-white/80 leading-relaxed">
                                    I bring that sensitivity into layout balance and motion pacing - so the UI feels composed,
                                    not random.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 text-white/55 text-[13px]">
                            <div className="h-px flex-1 bg-white/10" />
                            <div>Rhythm · Contrast · Restraint</div>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-14">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02),rgba(255,255,255,0.06))] p-[1px]">
                    <div className="pointer-events-none absolute -top-20 -right-24 h-[320px] w-[320px] rounded-full bg-white/12 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-28 -left-24 h-[360px] w-[360px] rounded-full bg-white/8 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_55%)]" />

                    <div className="relative rounded-[27px] bg-black/35 backdrop-blur-md px-7 py-7 sm:px-10 sm:py-9">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-8 space-y-3">
                                <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.28em] text-white/50">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 blur-[2px]" />
                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                    </span>
                                    Available for work
                                </div>

                                <div className="text-white text-[clamp(20px,2.4vw,28px)] leading-snug">
                                    Open to freelance projects and product collaborations.
                                </div>

                                <p className="text-white/70 leading-relaxed max-w-2xl">
                                    If you’re building something ambitious and you care about craft - clean structure, calm motion, and real performance -
                                    I can help you ship a premium experience.
                                </p>
                            </div>

                            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/15 px-5 py-2.5 text-[14px] text-white hover:bg-white/20 transition"
                                >
                                    Let’s talk
                                </a>

                                <a
                                    href="/projects"
                                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-[14px] text-white/85 hover:text-white hover:bg-white/[0.06] transition"
                                >
                                    View projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
