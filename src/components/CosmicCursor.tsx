import {useEffect, useRef, useState} from "react";

type P = { x: number; y: number; vx: number; vy: number; life: number; size: number };

export default function StarTrailCursor() {
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const coreRef = useRef<HTMLDivElement | null>(null);
    const layerRef = useRef<HTMLDivElement | null>(null);

    const target = useRef({x: 0, y: 0});
    const core = useRef({x: 0, y: 0});
    const last = useRef({x: 0, y: 0});

    const parts = useRef<P[]>([]);
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(false);

    useEffect(() => {
            const isTouch = window.matchMedia("(hover: none)").matches || "ontouchstart" in window;
            if (isTouch) return;

            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            const isInteractive = (el: Element | null) => {
                if (!el) return false;
                return Boolean(
                    (el as HTMLElement).closest('a,button,[role="button"],input,textarea,select,summary,[data-cursor="link"]')
                );
            };

            const onMove = (e: PointerEvent) => {
                target.current.x = e.clientX;
                target.current.y = e.clientY;
                if (!visible) setVisible(true);
            };

            const onOver = (e: Event) => {
                setActive(isInteractive(e.target as Element | null));
            };

            const onLeave = () => setVisible(false);

            window.addEventListener("pointermove", onMove, {passive: true});
            window.addEventListener("pointerover", onOver, {passive: true});
            window.addEventListener("mouseleave", onLeave);

            let raf = 0;

            const spawn = (dx: number, dy: number, speed: number) => {
                const count = reduce ? 1 : speed > 9 ? 3 : speed > 4 ? 2 : 1;
                for (let i = 0; i < count; i++) {
                    const jx = (Math.random() - 0.5) * 1.8;
                    const jy = (Math.random() - 0.5) * 1.8;
                    const s = active ? 1.12 : 1;
                    parts.current.push({
                        x: core.current.x + jx,
                        y: core.current.y + jy,
                        vx: -dx * (0.06 + Math.random() * 0.05) * s,
                        vy: -dy * (0.06 + Math.random() * 0.05) * s,
                        life: active ? 1 : 0.9,
                        size: (active ? 2.2 : 1.8) + Math.random() * 1.2
                    });
                }
                if (parts.current.length > 120) parts.current.splice(0, parts.current.length - 120);
            };

            const tick = () => {
                    const tx = target.current.x;
                    const ty = target.current.y;

                    const ease = reduce ? 1 : 0.62;
                    core.current.x += (tx - core.current.x) * ease;
                    core.current.y += (ty - core.current.y) * ease;

                    const dx = core.current.x - last.current.x;
                    const dy = core.current.y - last.current.y;
                    const speed = Math.hypot(dx, dy);

                    if (speed > (reduce ? 6 : 0.9)) {

                        spawn(dx, dy, speed);
                        last.current.x = core.current.x;
                        last.current.y = core.current.y;
                    }

                    for (let i = parts.current.length - 1; i >= 0; i--) {
                        const p = parts.current[i];
                        p.x += p.vx;
                        p.y += p.vy;
                        p.vx *= 0.92;
                        p.vy *= 0.92;
                        p.life -= active ? 0.028 : 0.035;
                        if (p.life <= 0) parts.current.splice(i, 1);
                    }

                    if (coreRef.current) {
                        coreRef.current.style.transform = `translate3d(${core.current.x}px, ${core.current.y}px, 0)`;
                    }

                    if (layerRef.current) {
                        let html = "";
                        for (let i = 0; i < parts.current.length; i++) {
                            const p = parts.current[i];
                            const a = Math.max(0, Math.min(1, p.life));
                            const r = p.size;
                            html += `<i style="transform:translate3d(${p.x}px,${p.y}px,0);opacity:${a};width:${r}px;height:${r}px;"></i>`;
                        }
                        layerRef.current.innerHTML = html;
                    }

                    raf = requestAnimationFrame(tick);
                }
            ;

            raf = requestAnimationFrame(tick);

            return () => {
                cancelAnimationFrame(raf);
                window.removeEventListener("pointermove", onMove);
                window.removeEventListener("pointerover", onOver);
                window.removeEventListener("mouseleave", onLeave);
            };
        }, [visible, active]
    )
    ;

    return (
        <div
            ref={wrapRef}
            className={[
                "startrail-cursor",
                visible ? "is-visible" : "",
                active ? "is-active" : ""
            ].join(" ")}
            aria-hidden="true"
        >
            <div ref={layerRef} className="startrail-layer"/>
            <div ref={coreRef} className="startrail-core"/>
        </div>
    );
}
