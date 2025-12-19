import AboutContent from "./AboutContent"

export default function About() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_20%,rgba(0,89,89,0.12),transparent_55%),radial-gradient(900px_circle_at_80%_10%,rgba(255,255,255,0.06),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.55),rgba(0,0,0,0.25))]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 pt-10 sm:pt-16 lg:pt-32 pb-24 sm:pb-28 lg:pb-32 text-white">
                <AboutContent />
            </div>
        </section>
    )
}
