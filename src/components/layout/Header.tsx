import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function Header() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 120)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <AnimatePresence>
            {visible && (
                <motion.header
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="fixed top-4 left-0 right-0 z-40 flex justify-start px-4 pointer-events-none"
                >
                    <div className="pointer-events-auto rounded-full border border-white/10 bg-background/35 backdrop-blur-2xl px-4 py-2 shadow-soft">
            <span className="handwritten text-base sm:text-lg leading-none">
              Ani Khachunts
            </span>
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    )
}

export default Header
