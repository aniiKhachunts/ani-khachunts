import AboutContent from "./AboutContent"

export default function About() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_22%_12%,rgba(0,89,89,0.22),transparent_58%),radial-gradient(1000px_circle_at_82%_14%,rgba(255,255,255,0.10),transparent_62%),radial-gradient(900px_circle_at_70%_90%,rgba(0,89,89,0.18),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:44px_44px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.08),rgba(0,0,0,0.60),rgba(0,0,0,0.30))]" />
                <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(900px_circle_at_50%_120%,rgba(255,255,255,0.20),transparent_70%)]" />
            </div>

            <div
                className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 pt-16 sm:pt-16 lg:pt-32 pb-24 sm:pb-28 lg:pb-32 text-white">
                <AboutContent/>
            </div>
            <div
                className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_20%_30%,rgba(0,89,89,0.55),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(127,215,200,0.25),transparent_45%)]"/>

            <div
                className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:48px_48px]"/>

            <div
                className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(900px_circle_at_50%_120%,rgba(255,255,255,0.12),transparent_65%)]"/>

        </section>
    )
}
