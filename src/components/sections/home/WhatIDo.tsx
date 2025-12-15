import { motion } from 'framer-motion'

const items = [
    {
        label: 'Frontend development',
        text: 'React-based interfaces with clean architecture, motion and responsive layouts.'
    },
    {
        label: 'Product and UI design',
        text: 'Layouts, systems and flows that keep complex products feeling simple.'
    },
    {
        label: 'Design to code',
        text: 'Taking Figma concepts into precise, production-ready components.'
    }
]

function WhatIDoSection() {
    return (
        <section className="space-y-8">
            <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-sm tracking-[0.32em] uppercase text-textMuted"
            >
                What I do
            </motion.h2>

            <div className="grid gap-8 sm:grid-cols-3">
                {items.map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.07 }}
                        whileHover={{ y: -4 }}
                        className="group border-t border-white/12 pt-4 flex flex-col gap-3"
                    >
                        <div className="text-[11px] tracking-[0.24em] uppercase text-textMuted group-hover:text-[#9BD5FF] transition-colors">
                            {item.label}
                        </div>
                        <div className="text-sm text-textPrimary/90 leading-relaxed">
                            {item.text}
                        </div>
                        <div className="h-px w-10 bg-white/10 group-hover:bg-[#005959] transition-colors" />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default WhatIDoSection
