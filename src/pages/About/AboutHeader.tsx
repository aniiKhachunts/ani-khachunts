import { motion } from "framer-motion"

export default function AboutHeader() {
    return (
        <header className="relative z-10">
            <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-20 pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                    className="text-[clamp(28px,4vw,56px)] font-light tracking-wide text-white"
                >
                    About
                </motion.h1>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                    className="mt-4 h-px w-24 origin-left bg-white/20"
                />
            </div>
        </header>
    )
}
