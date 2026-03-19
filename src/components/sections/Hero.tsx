"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".hero-text",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out", delay: 0.2 }
            );

            gsap.fromTo(
                ".hero-card",
                { y: 100, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: "back.out(1.2)", delay: 0.5 }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[100svh] flex items-center pt-28 pb-16 md:pt-24 md:pb-12 overflow-hidden bg-transparent">
            {/* Background Image & Blurs */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c16]/20 via-[#0a0c16]/60 to-[#0a0c16] z-10 pointer-events-none" />
                <img
                    src="/imagens/background-hero.png"
                    alt="Background"
                    className="w-full h-full object-cover object-[30%_center] md:object-center opacity-50 select-none pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    }}
                />

                {/* Blurs - contained, won't cause overflow */}
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full opacity-20 z-0 transform-gpu" style={{ background: 'radial-gradient(circle, #ffd7a0 0%, transparent 70%)' }} />
                <div className="absolute top-[20%] right-[-5%] w-[50%] h-[50%] rounded-full opacity-30 z-0 transform-gpu" style={{ background: 'radial-gradient(circle, #1e2440 0%, transparent 70%)' }} />
                <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full opacity-15 z-0 transform-gpu" style={{ background: 'radial-gradient(circle, #b4cbf1 0%, transparent 70%)' }} />
            </div>

            <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Content */}
                <div ref={textRef} className="flex flex-col gap-5 md:gap-6">
                    <h1 className="hero-text font-clash font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-off-white drop-shadow-lg">
                        Tecnologia que <span className="text-gradient">organiza</span>, automatiza e escala.
                    </h1>
                    <h2 className="hero-text font-poppins text-base md:text-xl text-[#b4cbf1] max-w-lg font-light drop-shadow-md">
                        Desenvolvemos aplicativos, sistemas personalizados, automações e sites para empresas que querem crescer com mais eficiência.
                    </h2>

                    {/* Mobile stats strip — visible only on mobile */}
                    <div className="hero-text flex items-center gap-6 lg:hidden">
                        <div className="text-center">
                            <p className="text-white font-clash text-2xl font-bold">150+</p>
                            <p className="text-[10px] text-[#b4cbf1] tracking-widest uppercase mt-0.5">Projetos</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center">
                            <p className="text-white font-clash text-2xl font-bold">5+</p>
                            <p className="text-[10px] text-[#b4cbf1] tracking-widest uppercase mt-0.5">Anos</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center">
                            <p className="text-white font-clash text-2xl font-bold">98%</p>
                            <p className="text-[10px] text-[#b4cbf1] tracking-widest uppercase mt-0.5">Satisfação</p>
                        </div>
                    </div>

                    <div className="hero-text flex items-center flex-wrap gap-3 md:gap-4">
                        <button className="btn-primary text-sm md:text-base px-6 md:px-8 py-3 md:py-4">
                            Falar com especialista →
                        </button>
                        <button className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base text-off-white font-sora hover:text-[#ffd7a0] transition-colors bg-white/5 border border-transparent hover:border-white/10 rounded-full backdrop-blur-sm">
                            Conhecer soluções
                        </button>
                    </div>
                </div>

                {/* Right Content / Cards — hidden on mobile */}
                <div ref={cardsRef} className="hidden lg:flex flex-col gap-6 items-end">

                    {/* Main Card */}
                    <div className="hero-card bg-[#13172b]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 w-full max-w-md overflow-hidden relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-30 transform-gpu" style={{ background: 'radial-gradient(circle, #ffd7a0 0%, transparent 70%)' }} />

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                                <span className="text-[#ffd7a0] text-2xl font-bold">◎</span>
                            </div>
                            <div>
                                <h3 className="text-4xl font-clash font-bold text-white drop-shadow-md">150+</h3>
                                <p className="text-[#b4cbf1] text-sm">Projetos Entregues</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between text-xs font-sora tracking-widest text-[#b4cbf1] mb-2">
                                <span>Satisfação dos Clientes</span>
                                <span className="text-white drop-shadow-md">98%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-black/40 border border-white/5 overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-[#ffd7a0] to-white w-[98%] rounded-full shadow-[0_0_10px_#ffd7a0]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                            <div className="text-center border-r border-white/10">
                                <p className="text-white font-clash text-2xl font-bold">5+</p>
                                <p className="text-[10px] text-[#b4cbf1] tracking-widest uppercase mt-1">Anos</p>
                            </div>
                            <div className="text-center border-r border-white/10">
                                <p className="text-white font-clash text-2xl font-bold">24/7</p>
                                <p className="text-[10px] text-[#b4cbf1] tracking-widest uppercase mt-1">Suporte</p>
                            </div>
                            <div className="text-center">
                                <p className="text-white font-clash text-2xl font-bold">100%</p>
                                <p className="text-[10px] text-[#b4cbf1] tracking-widest uppercase mt-1">Qualidade</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <span className="text-xs bg-black/40 border border-white/5 rounded-full px-3 py-1 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" /> ACTIVE
                            </span>
                            <span className="text-xs bg-black/40 border border-white/5 rounded-full px-3 py-1 flex items-center gap-2 text-[#ffd7a0]">
                                👑 PREMIUM
                            </span>
                        </div>
                    </div>

                    {/* Marquee Card */}
                    <div className="hero-card bg-[#13172b]/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl overflow-hidden relative">
                        <p className="text-xs text-[#b4cbf1] font-sora mb-4 flex justify-between items-center">
                            <span>Empresas que confiam na LAB3</span>
                            <span className="w-2 h-2 rounded-full bg-[#13172b]" />
                        </p>

                        <style jsx>{`
              @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-inner { display: flex; width: max-content; animation: slide 15s linear infinite; }
            `}</style>

                        <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                            <div className="marquee-inner">
                                <div className="flex gap-10 whitespace-nowrap items-center px-5 py-2">
                                    <span className="flex items-center gap-3 text-white/80 text-sm font-sora font-medium"><img src="/imagens/alma.jpg" alt="Alma Produtora" className="h-8 w-8 rounded-full object-contain" /> Alma Produtora</span>
                                    <span className="flex items-center gap-3 text-white/80 text-sm font-sora font-medium"><img src="/imagens/future-pro.jpeg" alt="Future Pro" className="h-8 w-8 rounded-full object-contain" /> Future Pro</span>
                                    <span className="flex items-center gap-3 text-white/80 text-sm font-sora font-medium"><img src="/imagens/314.png" alt="314" className="h-8 w-8 rounded-full object-contain p-1 bg-[#13172b]" /> 314</span>
                                </div>
                                <div className="flex gap-10 whitespace-nowrap items-center px-5 py-2">
                                    <span className="flex items-center gap-3 text-white/80 text-sm font-sora font-medium"><img src="/imagens/alma.jpg" alt="Alma Produtora" className="h-8 w-8 rounded-full object-contain" /> Alma Produtora</span>
                                    <span className="flex items-center gap-3 text-white/80 text-sm font-sora font-medium"><img src="/imagens/future-pro.jpeg" alt="Future Pro" className="h-8 w-8 rounded-full object-contain" /> Future Pro</span>
                                    <span className="flex items-center gap-3 text-white/80 text-sm font-sora font-medium"><img src="/imagens/314.png" alt="314" className="h-8 w-8 rounded-full object-contain p-1 bg-[#13172b]" /> 314</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
