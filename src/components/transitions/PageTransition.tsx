import { motion } from "framer-motion"
import type {ReactNode} from "react"

export function PageTransition({ children }: { children: ReactNode }) {
    return (
        <div className="ptRoot">
            <motion.div
                className="ptCurtain"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            />
            <motion.div
                className="ptCurtain ptCurtain2"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 }}
            />
            <motion.div
                className="ptContent"
                initial={{ opacity: 0, y: 10, filter: "blur(10px)", scale: 0.99 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)", scale: 1.01 }}
                transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            >
                {children}
            </motion.div>
        </div>
    )
}
