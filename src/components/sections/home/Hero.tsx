import ThreeScene from '../../three/ThreeScene'
import Starfield from '../../visual/Starfield'
import HeroQuickLinks from "../../HeroQuickLinks.tsx";

function HeroSection() {
    return (
        <section className="relative h-screen min-h-screen overflow-hidden">
            <Starfield/>

            <div className="absolute inset-0 z-10 pointer-events-none">
                <ThreeScene/>
            </div>

            <div className="relative z-20 h-full pointer-events-none">

                <div className="w-full max-w-6xl mx-auto h-full px-6 sm:px-10 lg:px-20">
                    <div className="grid grid-cols-12 h-full items-end pb-16">
                        <div className="col-span-12 lg:col-span-7">
                            <p className="handwritten text-3xl sm:text-4xl text-white/90">
                                Creative <span className="text-[#005959]">developer</span>
                            </p>
                        </div>

                        <div className="col-span-12 lg:col-span-5 lg:justify-self-end lg:mx-[50px]">
                            <HeroQuickLinks/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
