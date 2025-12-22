import { useEffect } from "react"
import HeroSection from "../../components/sections/Hero.tsx"

function Home() {
    useEffect(() => {
        document.body.classList.add("home-lock")
        return () => document.body.classList.remove("home-lock")
    }, [])

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ height: "var(--vv-h, 100svh)" }}
        >
            <HeroSection />
        </div>
    )
}

export default Home
