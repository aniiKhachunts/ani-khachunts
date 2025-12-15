
export default function HeroQuickLinks() {
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
