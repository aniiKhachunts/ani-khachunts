import { Link } from "react-router-dom"

export default function HeroQuickLinks() {
    const base =
        "vh-link inline-flex items-center justify-end pointer-events-auto transition-colors text-white/85 hover:text-white"

    const mobileFrame =
        "rounded-2xl px-4 py-3 bg-white/[0.02] border border-white/10 backdrop-blur-sm"

    const desktopReset =
        "lg:bg-transparent lg:border-0 lg:backdrop-blur-0 lg:px-0 lg:py-0 lg:rounded-none"

    const mobileType =
        "uppercase tracking-[0.26em] text-[clamp(18px,5.8vw,26px)] leading-none"

    const desktopType =
        "lg:text-[clamp(28px,4.8vw,70px)] lg:normal-case lg:tracking-normal"

    return (
        <div className="w-full h-full pointer-events-none">
            <div className="vh-tilt w-full h-full pointer-events-none">
                <div className="flex flex-col items-end h-full justify-between lg:justify-center gap-2 sm:gap-3 lg:gap-10 pointer-events-auto vh-stagger">
                    <Link
                        to="/about"
                        className={[base, mobileFrame, desktopReset, mobileType, desktopType].join(" ")}
                    >
                        ABOUT
                    </Link>

                    <Link
                        to="/projects"
                        className={[base, mobileFrame, desktopReset, mobileType, desktopType].join(" ")}
                    >
                        PROJECTS
                    </Link>
                </div>
            </div>
        </div>
    )
}
