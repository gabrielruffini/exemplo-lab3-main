"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyLab3() {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    const pillars = [
        { title: "Tecnologia sob medida", desc: "Cada solução é pensada de acordo com a necessidade real da sua empresa." },
        { title: "Automação de processos", desc: "Reduza tarefas manuais e ganhe eficiência operacional." },
        { title: "Escalabilidade", desc: "Nossos sistemas são preparados para acompanhar o crescimento do seu negócio." },
        { title: "Integrações inteligentes", desc: "Integramos sistemas, plataformas e ferramentas para centralizar sua operação." },
        { title: "Experiência digital profissional", desc: "Criamos plataformas e aplicativos com foco em usabilidade e performance." },
        { title: "Suporte e evolução contínua", desc: "Tecnologia não é algo estático. Nossas soluções evoluem junto com sua empresa." }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".why-title",
                { y: 60, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

            gsap.fromTo(
                itemsRef.current,
                { scale: 0.9, opacity: 0, y: 30 },
                {
                    scale: 1, opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: ".why-grid",
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="sobre" ref={containerRef} className="relative py-32 min-h-screen flex items-center">
            {/* BACKGROUND GRID COM FADE */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), 
                                      linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                    maskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
                }}
            />

            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[80%] h-[40%] rounded-full opacity-10 pointer-events-none transform-gpu" style={{ background: 'radial-gradient(circle, #ffd7a0 0%, transparent 65%)' }}></div>

            <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center">
                <h2 className="why-title font-clash font-bold text-4xl md:text-5xl text-white mb-16">
                    Por que escolher <span className="text-gradient">a LAB3</span>
                </h2>

                <div className="why-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => { if (el) itemsRef.current[index] = el; }}
                            className="bg-black/40 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-[#ffd7a0]/50 transition-colors group relative overflow-hidden text-left"
                        >
                            {/* Hover effect glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-25 transition-opacity transform-gpu" style={{ background: 'radial-gradient(circle, #ffd7a0 0%, transparent 70%)' }}></div>

                            <h3 className="font-clash text-xl font-bold text-white mb-4 group-hover:text-[#ffd7a0] transition-colors">{item.title}</h3>
                            <p className="font-poppins text-sm text-[#b4cbf1] font-light leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
