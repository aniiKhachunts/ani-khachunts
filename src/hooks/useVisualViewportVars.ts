import { useEffect } from "react"

export default function useVisualViewportVars() {
    useEffect(() => {
        const root = document.documentElement
        const vv = window.visualViewport

        const set = () => {
            const height = vv?.height ?? window.innerHeight
            const offsetTop = vv?.offsetTop ?? 0
            const bottom = Math.max(0, window.innerHeight - (height + offsetTop))

            root.style.setProperty("--vv-h", `${Math.round(height)}px`)
            root.style.setProperty("--vv-bottom", `${Math.round(bottom)}px`)
        }

        const rafSet = () => requestAnimationFrame(set)

        set()

        window.addEventListener("resize", rafSet)
        window.addEventListener("orientationchange", rafSet)

        if (vv) {
            vv.addEventListener("resize", rafSet)
            vv.addEventListener("scroll", rafSet)
        }

        return () => {
            window.removeEventListener("resize", rafSet)
            window.removeEventListener("orientationchange", rafSet)
            if (vv) {
                vv.removeEventListener("resize", rafSet)
                vv.removeEventListener("scroll", rafSet)
            }
        }
    }, [])
}
