import ThreeScene from '../../three/ThreeScene'
import Starfield from '../../visual/Starfield'

function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <Starfield />

            <div className="absolute inset-0 z-10 pointer-events-none">
                <ThreeScene />
            </div>

            <div className="relative z-20">
                <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 mt-[55vh] pb-12">
                    <div className="space-y-10">
                        <p className="handwritten text-3xl sm:text-4xl text-white/90">
                            Creative <span className="text-[#005959]">developer</span>
                        </p>

                        <div className="flex justify-end">
                            <p className="max-w-sm text-right text-sm sm:text-base text-white/60 leading-relaxed">
                                I design and build minimal, animated interfaces for modern web products. Less clutter,
                                more intention, shipped with clean React frontends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
