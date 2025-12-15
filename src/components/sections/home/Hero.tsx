import ThreeScene from '../../three/ThreeScene'
import Starfield from '../../visual/Starfield'
import HeroQuickLinks from "../../HeroQuickLinks.tsx";
import HeroSocialRail from "../../HeroSocialRail.tsx";

function HeroSection() {
    return (
        <section className="relative h-screen min-h-screen overflow-hidden">
            <Starfield/>

            <div className="absolute inset-0 z-10 pointer-events-none">
                <ThreeScene/>
            </div>

            <div className="relative z-20 h-full pointer-events-none">

                <div className="w-full max-w-6xl mx-auto h-full px-6 sm:px-10 lg:px-20">
                    <div className="grid grid-cols-12 h-full grid-rows-[1fr_auto] pb-16">
                        <div className="col-span-12 lg:col-span-7 row-start-2 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#005959]/15 backdrop-blur-sm border border-[#005959]/30">
                                <span className="h-2 w-2 rounded-full bg-[#005959] animate-pulse" />
                                <span className="text-[11px] tracking-[0.18em] uppercase text-[#7fd7c8]">
                                    Open to work
                                </span>
                            </div>

                            <p className="handwritten text-3xl sm:text-4xl text-white/90">
                                Creative <span className="text-[#005959]">developer</span>
                            </p>
                        </div>


                        <div className="col-span-12 lg:col-span-5 lg:justify-self-end lg:mx-[50px] row-start-2">
                            <HeroQuickLinks/>
                        </div>
                    </div>
                </div>
            </div>
            <HeroSocialRail />

        </section>
    )
}

export default HeroSection
