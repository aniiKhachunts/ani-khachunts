import {AnimatePresence} from "framer-motion"
import {Navigate, Route, Routes, useLocation} from "react-router-dom"
import {PageTransition} from "./components/transitions/PageTransition"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Header from "./components/layout/Header"
import CosmicCursor from "./components/CosmicCursor"
import ProjectPage from "./pages/Projects/ProjectPage.tsx";
import ScrollToTop from "./helpers/ScrollToTop.tsx";

function AnimatedRoutes() {
    const location = useLocation()

    return (
        <>
            <ScrollToTop />
            <Header/>
            <CosmicCursor/>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <Home/>
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <PageTransition>
                                <About/>
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <PageTransition>
                                <Projects/>
                            </PageTransition>
                        }
                    />
                    <Route path="/projects/:slug" element={<ProjectPage/>}/>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default function App() {
    return <AnimatedRoutes/>
}
