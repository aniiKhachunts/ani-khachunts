import {AnimatePresence, motion} from "framer-motion"
import {useLocation, useNavigate} from "react-router-dom"

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const shouldShow = location.pathname === "/about" ||
        location.pathname.startsWith("/projects");

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.header
                    initial={{opacity: 0, y: -14}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -14}}
                    transition={{duration: 0.35, ease: [0.2, 0.8, 0.2, 1]}}
                    className="fixed top-4 left-0 right-0 z-[999] px-4 pointer-events-none"
                >
                    <div className="mx-auto max-w-6xl">
                        <div
                            className="
                                pointer-events-auto
                                relative
                                flex items-center justify-center
                                rounded-full
                                border border-white/15
                                bg-black/55
                                backdrop-blur-3xl
                                px-4 py-2
                                shadow-[0_10px_40px_rgba(0,0,0,0.55)]
                                ring-1 ring-white/5
                            "
                        >
                            {/*<div className="w-24">*/}
                            {/*    <button*/}
                            {/*        onClick={() => navigate("/")}*/}
                            {/*        className="*/}
                            {/*            inline-flex items-center*/}
                            {/*            text-[11px] uppercase tracking-[0.26em]*/}
                            {/*            text-white/75 hover:text-white*/}
                            {/*            transition*/}
                            {/*        "*/}
                            {/*    >*/}
                            {/*        Home*/}
                            {/*    </button>*/}
                            {/*</div>*/}

                            <span className="handwritten text-base sm:text-lg leading-none text-white/95"
                                  onClick={() => navigate("/")}>
                                Ani Khachunts
                            </span>

                            <div className="w-24"/>
                        </div>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    )
}
