export default function HeroSocialRail() {
    const items = [
        {
            label: "GitHub",
            href: "https://github.com/aniiKhachunts",
            color: "#ffffff",
            svg: (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path
                        d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.84 0 1.69.12 2.48.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.76 0 3.93-2.34 4.8-4.57 5.05.36.32.68.96.68 1.93 0 1.39-.01 2.51-.01 2.85 0 .26.18.59.69.48A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"/>
                </svg>
            )
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ani-khachunts",
            color: "#0A66C2",
            svg: (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path
                        d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.66H9.32V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13.02h3.56V9H3.56v11.45Z"/>
                </svg>
            )
        },
        {
            label: "Medium",
            href: "https://medium.com/@anikhachunts",
            color: "#00ab6c",
            svg: (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path
                        d="M4 7.2c0-.42.16-.81.44-1.1L6 4.6h.23l5.5 12.25 4.84-12.25H17l1.74 1.5c.3.23.46.6.41.98v9.84c.05.38-.11.75-.41.98L17.1 19.4H17l-5.52-12.6L7.77 19.4H7.54L4.44 16.9A1.2 1.2 0 0 1 4 15.8V7.2Z"/>
                </svg>
            )
        },
        {
            label: "Instagram",
            href: "https://www.instagram.com/ani.khachunts?igsh=MWZuNDZwMWVqM21pMA%3D%3D&utm_source=qr",
            color: "#E1306C",
            svg: (
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path
                        d="M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.212 8.8 2.2 12 2.2Zm0 1.8c-3.156 0-3.53.012-4.78.07-1.09.05-1.68.232-2.072.387-.52.202-.89.444-1.28.834-.39.39-.632.76-.834 1.28-.155.392-.337.982-.387 2.072-.058 1.25-.07 1.624-.07 4.78s.012 3.53.07 4.78c.05 1.09.232 1.68.387 2.072.202.52.444.89.834 1.28.39.39.76.632 1.28.834.392.155.982.337 2.072.387 1.25.058 1.624.07 4.78.07s3.53-.012 4.78-.07c1.09-.05 1.68-.232 2.072-.387.52-.202.89-.444 1.28-.834.39-.39.632-.76.834-1.28.155-.392.337-.982.387-2.072.058-1.25.07-1.624.07-4.78s-.012-3.53-.07-4.78c-.05-1.09-.232-1.68-.387-2.072-.202-.52-.444-.89-.834-1.28-.39-.39-.76-.632-1.28-.834-.392-.155-.982-.337-2.072-.387-1.25-.058-1.624-.07-4.78-.07Zm0 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.85-2.1a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/>
                </svg>
            )
        }
    ]

    return (
        <div className="pointer-events-none z-30">
            <div
                className="
          fixed bottom-3 left-1/2 -translate-x-1/2
          lg:bottom-8 lg:right-8 lg:left-auto lg:translate-x-0
        "
                style={{paddingBottom: "env(safe-area-inset-bottom)"}}
            >
                <div
                    className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2 py-1.5 backdrop-blur-sm lg:flex-col lg:gap-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0">
                    {items.map((it, idx) => (
                        <div key={it.label} className="flex items-center lg:flex-col">
                            <a
                                href={it.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={it.label}
                                title={it.label}
                                style={{["--brand" as any]: it.color}}
                                className="
                                  rounded-full
                                  p-1.5
                                  text-white/85
                                  bg-black/20
                                  transition-all duration-300
                                  hover:text-[var(--brand)]
                                  hover:bg-black/35
                                "
                            >
                                {it.svg}
                            </a>

                            {idx !== items.length - 1 && (
                                <div className="hidden lg:block mt-2 h-px w-4 bg-white/30"/>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
