import HeroSection from "../../components/sections/Hero.tsx"

function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden">
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                <HeroSection />
            </div>
        </div>
    )
}

export default Home
