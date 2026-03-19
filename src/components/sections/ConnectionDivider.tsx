"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const leftPaths = [
    "M 0 50 H 600 L 750 200 H 1100",
    "M 0 100 H 400 L 475 175 H 1100",
    "M 0 150 H 800 L 900 250 H 1100",
    "M 0 225 H 900 L 975 300 H 1100",
    "M 0 300 H 1100",
    "M 0 375 H 900 L 975 300 H 1100",
    "M 0 450 H 800 L 900 350 H 1100",
    "M 0 500 H 400 L 475 425 H 1100",
    "M 0 550 H 600 L 750 400 H 1100",
];

const rightPaths = [
    "M 2400 50 H 1800 L 1650 200 H 1300",
    "M 2400 100 H 2000 L 1925 175 H 1300",
    "M 2400 150 H 1600 L 1500 250 H 1300",
    "M 2400 225 H 1500 L 1425 300 H 1300",
    "M 2400 300 H 1300",
    "M 2400 375 H 1500 L 1425 300 H 1300",
    "M 2400 450 H 1600 L 1500 350 H 1300",
    "M 2400 500 H 2000 L 1925 425 H 1300",
    "M 2400 550 H 1800 L 1650 400 H 1300",
];

export default function ConnectionDivider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathsLeftRef = useRef<SVGPathElement[]>([]);
    const pathsRightRef = useRef<SVGPathElement[]>([]);
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            // Initialize and animate left paths
            pathsLeftRef.current.forEach((path, i) => {
                if (!path) return;
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });

                let tl = gsap.timeline({ repeat: -1, delay: i * 0.25 });
                tl.to(path, { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut" })
                    .to(path, { opacity: 0, duration: 0.6 })
                    .set(path, { strokeDashoffset: length, opacity: 1 });
            });

            // Initialize and animate right paths
            pathsRightRef.current.forEach((path, i) => {
                if (!path) return;
                const length = path.getTotalLength();
                gsap.set(path, { strokeDasharray: length, strokeDashoffset: length, opacity: 1 });

                let tl = gsap.timeline({ repeat: -1, delay: i * 0.25 });
                tl.to(path, { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut" })
                    .to(path, { opacity: 0, duration: 0.6 })
                    .set(path, { strokeDashoffset: length, opacity: 1 });
            });

            // Pop the center circle in
            gsap.fromTo(
                circleRef.current,
                { scale: 0.5, opacity: 0, rotation: -30 },
                {
                    scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: "back.out(1.2)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Subtle floating for the central circle
            gsap.to(circleRef.current, {
                y: 8,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative py-24 min-h-[50vh] flex items-center justify-center overflow-hidden z-20"
        >
            {/* SVG Circuit Canvas */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <svg
                    viewBox="0 0 2400 600"
                    preserveAspectRatio="xMidYMid slice"
                    className="w-full h-full absolute inset-0 z-0 opacity-80"
                    style={{
                        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
                    }}
                >
                    <defs>
                        <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="100%" stopColor="#b4cbf1" />
                        </linearGradient>
                        <linearGradient id="gradientRight" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="100%" stopColor="#ffd7a0" />
                        </linearGradient>

                        <filter id="glowLeft" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        <filter id="glowRight" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Dimmed static background tracking lines */}
                    {leftPaths.map((d, i) => (
                        <path key={`off-l-${i}`} d={d} stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
                    ))}
                    {rightPaths.map((d, i) => (
                        <path key={`off-r-${i}`} d={d} stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
                    ))}

                    {/* Animated glowing "data" lines */}
                    {leftPaths.map((d, i) => (
                        <path
                            key={`on-l-${i}`}
                            ref={(el) => { if (el) pathsLeftRef.current[i] = el; }}
                            d={d}
                            stroke="url(#gradientLeft)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#glowLeft)"
                        />
                    ))}
                    {rightPaths.map((d, i) => (
                        <path
                            key={`on-r-${i}`}
                            ref={(el) => { if (el) pathsRightRef.current[i] = el; }}
                            d={d}
                            stroke="url(#gradientRight)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            filter="url(#glowRight)"
                        />
                    ))}
                </svg>
            </div>

            {/* Central Circle - Reduced Size */}
            <div
                ref={circleRef}
                className="relative z-10 w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10 bg-[#0a0c16]/70 backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden"
            >
                {/* Intense Internal Glow Behind Logo */}
                <div className="absolute inset-0 rounded-full opacity-50 -z-10 transform-gpu" style={{ background: 'radial-gradient(circle at 60% 40%, #ffd7a0 0%, #b4cbf1 50%, transparent 80%)' }}></div>
                <div className="absolute inset-0 rounded-full border-[1px] border-white/20 z-0"></div>

                {/* Second concentric circle for tech detail */}
                <div className="absolute inset-3 rounded-full border border-white/20 border-dashed opacity-40 animate-spin-slow -z-10"></div>

                {/* Logo */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-5">
                    <Image
                        src="/imagens/logo.png"
                        alt="LAB3 Logo"
                        width={180}
                        height={60}
                        className="w-[85%] h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] filter contrast-125 brightness-110"
                    />
                </div>
            </div>

        </section>
    );
}
