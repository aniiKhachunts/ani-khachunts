import { useEffect, useRef, useState } from "react"
import ThreeScene from "../three/ThreeScene.tsx"
import Starfield from "../visual/Starfield.tsx"
import HeroQuickLinks from "../HeroQuickLinks.tsx"
import HeroSocialRail from "../HeroSocialRail.tsx"

function HeroSection() {
    const leftRef = useRef<HTMLDivElement | null>(null)
    const [leftH, setLeftH] = useState<number | null>(null)

    useEffect(() => {
        const el = leftRef.current
        if (!el) return

        const ro = new ResizeObserver(() => {
            const h = el.getBoundingClientRect().height
            setLeftH(h)
        })

        ro.observe(el)
        setLeftH(el.getBoundingClientRect().height)

        return () => ro.disconnect()
    }, [])

    return (
        <section className="relative h-screen min-h-screen overflow-hidden">
            <Starfield />

            <div className="absolute inset-0 z-10 pointer-events-none">
                <ThreeScene />
            </div>

            <div className="relative z-20 h-full pointer-events-none">
                <div className="w-full max-w-6xl mx-auto h-full px-6 sm:px-10 lg:px-20">
                    <div className="grid grid-cols-12 h-full grid-rows-[1fr_auto] pb-24 sm:pb-20 lg:pb-16">
                        <div ref={leftRef} className="col-span-12 lg:col-span-7 row-start-2 space-y-4 hero-rise">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005959]/15 backdrop-blur-sm border border-[#005959]/30 badge-float">
                                <span className="h-2 w-2 rounded-full bg-[#005959] animate-pulse" />
                                <span className="text-[11px] tracking-[0.18em] uppercase text-[#7fd7c8]">
                                    Open to work
                                </span>
                            </div>

                            <p className="handwritten text-3xl sm:text-4xl text-white/90">
                                Creative <span className="text-[#005959]">developer</span>
                            </p>
                        </div>

                        <div
                            className="col-span-12 lg:col-span-5 lg:justify-self-end lg:mx-[50px] row-start-2 hero-rise"
                            style={leftH ? { height: `${leftH}px` } : undefined}
                        >
                            <HeroQuickLinks />
                        </div>
                    </div>
                </div>
            </div>

            <HeroSocialRail />
        </section>
    )
}

export default HeroSection
