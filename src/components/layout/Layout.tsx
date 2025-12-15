import type { ReactNode } from 'react'
import Header from './Header.tsx'

type LayoutProps = {
    children: ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <div className="relative min-h-screen bg-[#050308] text-textPrimary overflow-hidden">
            <div className="relative z-10">
                <Header />
                <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-20 pt-24 pb-16">
                    <main className="space-y-20">{children}</main>
                </div>
            </div>
        </div>
    )
}

export default Layout
