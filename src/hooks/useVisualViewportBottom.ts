import { useEffect } from "react"

export default function useVisualViewportBottom() {
    useEffect(() => {
        const vv = window.visualViewport

        const update = () => {
            if (!vv) {
                document.documentElement.style.setProperty("--vv-bottom", "0px")
                return
            }
            const bottom = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop))
            document.documentElement.style.setProperty("--vv-bottom", `${bottom}px`)
        }

        update()

        if (vv) {
            vv.addEventListener("resize", update)
            vv.addEventListener("scroll", update)
        }

        window.addEventListener("resize", update)
        window.addEventListener("orientationchange", update)

        return () => {
            if (vv) {
                vv.removeEventListener("resize", update)
                vv.removeEventListener("scroll", update)
            }
            window.removeEventListener("resize", update)
            window.removeEventListener("orientationchange", update)
        }
    }, [])
}
