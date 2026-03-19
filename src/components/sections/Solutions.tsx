"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    const solutions = [
        { title: "Sistemas personalizados", desc: "Soluções sob medida para a operação única da sua empresa." },
        { title: "Aplicativos mobile", desc: "Apps nativos com foco em usabilidade, performance e escalabilidade." },
        { title: "Automações inteligentes", desc: "Reduza tarefas manuais conectando sistemas e processos internos." },
        { title: "Sites profissionais", desc: "Sistemas web e sites de alta performance com design impactante." },
        { title: "Plataformas escaláveis", desc: "Infraestrutura robusta que cresce junto com o seu negócio." }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(
                ".sol-title",
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                    }
                }
            );

            // List Items Stagger
            gsap.fromTo(
                itemsRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, stagger: 0.15, duration: 0.9, ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".sol-list",
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="solucoes" ref={containerRef} className="relative py-24 min-h-[80vh]">
            {/* Abstract Background element */}
            <div className="absolute left-0 top-[20%] w-[40%] h-[40%] rounded-full opacity-15 transform-gpu" style={{ background: 'radial-gradient(circle, #ffd7a0 0%, transparent 65%)' }}></div>

            <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-8 md:gap-16 relative z-10">

                {/* Left Side: Sticky Title */}
                <div className="relative min-w-0">
                    <div className="md:sticky top-32">
                        <h2 className="sol-title font-clash font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
                            Tecnologia criada para resolver <span className="text-gradient">problemas reais.</span>
                        </h2>
                        <p className="sol-title font-sora text-[#b4cbf1] text-lg font-light leading-relaxed">
                            A LAB3 nasceu com um objetivo simples: transformar processos complexos em soluções inteligentes.
                        </p>

                        {/* New Marquee Card */}
                        <div className="sol-title mt-10 bg-[#13172b]/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl overflow-hidden relative">
                            <style jsx>{`
                              @keyframes slide-fast {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(-50%); }
                              }
                              .marquee-fast { display: flex; width: max-content; animation: slide-fast 20s linear infinite; }
                            `}</style>
                            <div className="w-full overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                                <div className="marquee-fast">
                                    <div className="flex gap-6 whitespace-nowrap items-center px-3">
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">SISTEMA FINANCEIRO</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">SISTEMA DE MARKETING</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">SISTEMA COMPLETO</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">APLICATIVOS</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">SITES</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                    </div>
                                    <div className="flex gap-6 whitespace-nowrap items-center px-3">
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">SISTEMA FINANCEIRO</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">SISTEMA DE MARKETING</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">SISTEMA COMPLETO</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">APLICATIVOS</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                        <span className="text-white/70 font-sora text-sm tracking-widest font-semibold uppercase">SITES</span>
                                        <span className="text-[#ffd7a0]/50">•</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: List of Solutions */}
                <div className="sol-list flex flex-col gap-6 min-w-0">
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { if (el) itemsRef.current[index] = el; }}
                            className="p-5 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ffd7a0] to-[#b4cbf1] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h3 className="font-clash text-2xl font-bold text-white mb-3 flex items-center gap-3">
                                <span className="text-[#ffd7a0] text-sm font-sora opacity-60">0{index + 1}</span>
                                {item.title}
                            </h3>
                            <p className="font-poppins text-off-white/70 font-light">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
