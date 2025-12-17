import { Link } from "react-router-dom"

export default function HeroQuickLinks() {
    return (
        <div className="w-full h-full pointer-events-none">
            <div className="vh-tilt w-full h-full pointer-events-none">
                <div className="flex flex-col items-end justify-center h-full gap-4 lg:gap-10 pointer-events-auto vh-stagger">
                    <Link
                        to="/about"
                        className="
                            vh-link
                            text-[16px] sm:text-[18px]
                            uppercase tracking-[0.26em]
                            text-white/85 hover:text-white
                            lg:text-[clamp(28px,4.8vw,70px)]
                            lg:normal-case lg:tracking-normal
                        "
                    >
                        ABOUT
                    </Link>

                    <Link
                        to="/projects"
                        className="
                            vh-link
                            text-[16px] sm:text-[18px]
                            uppercase tracking-[0.26em]
                            text-white/85 hover:text-white
                            lg:text-[clamp(28px,4.8vw,70px)]
                            lg:normal-case lg:tracking-normal
                        "
                    >
                        PROJECTS
                    </Link>
                </div>
            </div>
        </div>
    )
}
