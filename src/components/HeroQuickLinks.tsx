type LinkItem = { label: string; href: string; external?: boolean };

export default function HeroQuickLinks() {
    const projects: LinkItem[] = [
        { label: "Aurora X1", href: "https://github.com/aniiKhachunts/aurora-x1-landing", external: true },
        { label: "QB Leaders", href: "https://github.com/aniiKhachunts/qb-leaders", external: true },
        { label: "Animated Form", href: "https://github.com/aniiKhachunts/animated-form", external: true }
    ];

    return (
        <div className="w-full pointer-events-none">
            <div className="vh-tilt w-full pointer-events-none">
                <div className="flex flex-col items-start lg:items-end gap-10 pointer-events-none">
                    <a
                        href="#about"
                        className="vh-link text-[clamp(28px,4.8vw,70px)] opacity-80 hover:opacity-100 pointer-events-auto"
                    >
                        ABOUT
                    </a>

                    <a
                        href="#projects"
                        className="vh-link text-[clamp(28px,4.8vw,70px)] opacity-80 hover:opacity-100 pointer-events-auto"
                    >
                        PROJECTS
                    </a>
                </div>
            </div>
        </div>
    );
}
