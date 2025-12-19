import { useEffect } from "react"

export default function useVisualViewportBottom(varName = "--vv-bottom") {
    useEffect(() => {
        const vv = window.visualViewport

        const set = () => {
            if (!vv) {
                document.documentElement.style.setProperty(varName, "0px")
                return
            }
            const bottom = Math.max(0, window.innerHeight - (vv.height + vv.offsetTop))
            document.documentElement.style.setProperty(varName, `${bottom}px`)
        }

        set()

        if (vv) {
            vv.addEventListener("resize", set)
            vv.addEventListener("scroll", set)
        }
        window.addEventListener("resize", set)
        window.addEventListener("orientationchange", set)

        return () => {
            if (vv) {
                vv.removeEventListener("resize", set)
                vv.removeEventListener("scroll", set)
            }
            window.removeEventListener("resize", set)
            window.removeEventListener("orientationchange", set)
        }
    }, [varName])
}
