import {motion} from "framer-motion"

export default function AboutContent() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <motion.div
                initial={{opacity: 0, y: 24}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7, ease: [0.2, 0.8, 0.2, 1]}}
                className="lg:col-span-6 space-y-10 relative z-10 order-2 lg:order-1"
            >
                <section className="space-y-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                        About
                    </div>

                    <p className="text-[clamp(18px,2.4vw,22px)] leading-relaxed text-white/90">
                        I’m Ani — a frontend engineer driven by curiosity, structure, and a need to understand how
                        things really work.
                        My path into development wasn’t linear, but it was intentional. I grew into this field by
                        exploring, questioning,
                        and constantly rebuilding my understanding of both code and design.
                    </p>

                    <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/65">
                        Over the years, I moved from experimenting and learning independently to working on large,
                        real-world systems.
                        I’ve seen how small technical decisions scale, how interfaces affect people, and how clarity in
                        code directly
                        impacts long-term product health.
                    </p>

                </section>

                <section className="space-y-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                        Experience
                    </div>

                    <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/65">
                        I’ve worked on complex admin platforms, healthcare products, and long-living applications where
                        stability,
                        performance, and maintainability matter. I’ve migrated large Angular systems to React, designed
                        component
                        architectures, and worked close to both product and engineering decisions.
                    </p>

                    <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/65">
                        What shaped me most wasn’t just the technology — it was learning how systems evolve, how teams
                        work,
                        and how thoughtful structure makes future work easier instead of harder.
                    </p>

                </section>

                <section className="space-y-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                        Skills
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {[
                            "React",
                            "TypeScript",
                            "Framer Motion",
                            "Three.js",
                            "UI Engineering",
                            "Tailwind",
                            "Design Systems",
                            "Accessibility",
                            "Performance"
                        ].map((s) => (
                            <span
                                key={s}
                                className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[12px] text-white/70"
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                    <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/65">
                        I focus on tools and patterns that support long-term clarity, not trends.
                        My strength lies in building interfaces that are predictable, expressive,
                        and resilient over time.
                    </p>

                </section>

                <section className="space-y-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">
                        Outside work
                    </div>

                    <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/65">
                        Music has been part of my life for as long as I can remember. Being a violinist shaped how I perceive rhythm,
                        discipline, and progression — and those same principles naturally transferred into how I think about interfaces,
                        motion, and pacing in digital products.
                    </p>

                    <p className="text-[15px] sm:text-[16px] leading-relaxed text-white/65">
                        I approach development the same way I approach music: with patience, attention to detail,
                        and respect for the structure beneath what people see on the surface.
                    </p>

                </section>
            </motion.div>

            <motion.div
                initial={{opacity: 0, scale: 0.96}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.8, ease: [0.2, 0.8, 0.2, 1]}}
                className="lg:col-span-6 flex flex-col gap-10 relative z-10 order-1 lg:order-2 lg:sticky lg:top-28"
            >
                <div
                    className="relative w-full max-w-[520px] mx-auto lg:ml-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="relative w-full aspect-[4/5]">
                        <img
                            src="/about.JPG"
                            alt="Ani Khachunts"
                            className="absolute inset-0 h-full w-full object-cover object-[50%_20%]"
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"/>
                        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"/>
                    </div>

                    {/*<div className="px-5 py-4">*/}
                    {/*    <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">*/}
                    {/*        Quick note*/}
                    {/*    </div>*/}
                    {/*    <div className="mt-2 text-[13px] leading-relaxed text-white/70">*/}
                    {/*        I care about building interfaces that feel intentional, calm, and performant — not just*/}
                    {/*        pretty.*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

                <motion.div
                    initial={{opacity: 0, y: 18}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, delay: 0.05, ease: [0.2, 0.8, 0.2, 1]}}
                    className="relative w-full max-w-[520px] mx-auto lg:ml-auto overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
                >
                    <div
                        className="absolute inset-0 opacity-[0.55] bg-[radial-gradient(900px_circle_at_30%_0%,rgba(0,89,89,0.22),transparent_55%),radial-gradient(800px_circle_at_90%_30%,rgba(255,255,255,0.10),transparent_60%)]"/>
                    <div
                        className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_35%,rgba(0,0,0,0.25))]"/>

                    <div className="relative px-6 py-7">
                        <div className="flex items-center justify-between">
                            <div className="text-[11px] uppercase tracking-[0.28em] text-white/60">
                                Principle
                            </div>
                            <div className="h-px w-16 bg-white/15"/>
                        </div>

                        <div className="mt-5 text-[clamp(18px,2.2vw,26px)] leading-snug text-white/90">
                            “There is nothing so useless as doing efficiently that which should not be done at all.”
                        </div>

                        <div className="mt-4 text-[12px] uppercase tracking-[0.26em] text-white/55">
                            Peter Drucker
                        </div>

                        <div className="mt-6 text-[13px] leading-relaxed text-white/70">
                            I’m not interested in building things just to decorate the screen.
                            I want to create products that are meaningful, useful, and grounded in real needs.
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
