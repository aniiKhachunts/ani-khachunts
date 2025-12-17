import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import { PageTransition } from "./components/transitions/PageTransition"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import CosmicCursor from "./components/CosmicCursor.tsx"
import Header from "./components/layout/Header.tsx"

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <>
            <Header />
            <CosmicCursor />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <Home />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <PageTransition>
                                <About />
                            </PageTransition>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default function App() {
    return <AnimatedRoutes />
}
