"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Plans() {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);

    const plans = [
        { title: "Sistemas Prontos", desc: "Soluções ágeis financeiras e de marketing prontas para sua operação.", tag: "Rápido" },
        { title: "Sistema Personalizado", desc: "Desenvolvimento sob medida do zero, cobrindo todos os fluxos da sua empresa.", tag: "Exclusivo" },
        { title: "Aplicativos", desc: "Plataformas móveis nativas de alta performance para iOS e Android.", tag: "Mobile" },
        { title: "Sites Profissionais", desc: "Sua vitrine digital com foco máximo em conversão e UI/UX.", tag: "Web" }
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".plan-title",
                { y: 40, opacity: 0 },
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
                { scale: 0.95, opacity: 0, y: 50 },
                {
                    scale: 1, opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: "power4.out",
                    scrollTrigger: {
                        trigger: ".plans-grid",
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="planos" ref={containerRef} className="relative py-32 min-h-[80vh] flex flex-col justify-center overflow-hidden">
            {/* Glows */}
            <div className="absolute right-[-50%] top-[30%] w-[60%] h-[60%] rounded-full opacity-15 pointer-events-none transform-gpu" style={{ background: 'radial-gradient(circle, #ffd7a0 0%, transparent 65%)' }}></div>

            <div className="max-w-7xl mx-auto w-full px-6 relative z-10 text-center">
                <h2 className="plan-title font-clash font-bold text-4xl md:text-5xl text-white mb-16">
                    Escolha a solução ideal para <span className="text-gradient">o seu negócio</span>
                </h2>

                <div className="plans-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            ref={(el) => { if (el) itemsRef.current[index] = el; }}
                            className="flex flex-col h-full bg-[#13172b]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-40 transition-opacity transform-gpu" style={{ background: 'radial-gradient(circle, #ffd7a0 0%, transparent 70%)' }}></div>

                            <div className="mb-8">
                                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-sora tracking-widest text-[#b4cbf1] uppercase mb-6">
                                    {plan.tag}
                                </span>
                                <h3 className="font-clash text-2xl font-bold text-white mb-3">{plan.title}</h3>
                                <p className="font-poppins text-sm text-off-white/60 font-light">{plan.desc}</p>
                            </div>

                            <div className="mt-auto pt-8 border-t border-white/5">
                                <button className="w-full flex items-center justify-between text-white font-sora text-sm group-hover:text-[#ffd7a0] transition-colors">
                                    <span>Entrar em contato</span>
                                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
