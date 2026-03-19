"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EventManagement() {
    const containerRef = useRef<HTMLDivElement>(null);

    const features = [
        "Gestão completa de eventos",
        "Controle de equipes e fornecedores",
        "Organização de cronogramas",
        "Automação de processos operacionais",
        "Gestão de ingressos e participantes",
        "Dashboards com dados em tempo real"
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Reveal Text
            gsap.fromTo(
                ".event-text",
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    }
                }
            );

            // Setup continuous floating animation for video placeholder area
            gsap.to(".event-video", {
                y: -15,
                duration: 3,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="eventos" ref={containerRef} className="relative py-24 min-h-screen flex items-center overflow-hidden">
            {/* Background Blurs */}
            <div className="absolute right-[-10%] bottom-[10%] w-[50%] h-[50%] rounded-full opacity-15 pointer-events-none transform-gpu" style={{ background: 'radial-gradient(circle, #b4cbf1 0%, transparent 65%)' }}></div>
            <div className="absolute left-[10%] top-[40%] w-[30%] h-[30%] rounded-full opacity-20 pointer-events-none transform-gpu" style={{ background: 'radial-gradient(circle, #1e2440 0%, transparent 70%)' }}></div>

            <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Side: Copy */}
                <div>
                    <h2 className="event-text font-clash font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
                        A solução completa para <span className="text-gradient">gestão de eventos.</span>
                    </h2>
                    <p className="event-text font-poppins text-[#b4cbf1] text-lg font-light mb-10 leading-relaxed">
                        Produtoras de eventos lidam com uma enorme quantidade de informações, equipes, fornecedores e prazos. Sem um sistema adequado, tudo vira planilha, mensagem de WhatsApp e retrabalho.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, idx) => (
                            <div key={idx} className="event-text flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                                <CheckCircle2 className="text-[#ffd7a0] w-6 h-6 flex-shrink-0" />
                                <span className="font-sora text-sm text-off-white/90">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div className="event-text mt-12">
                        <button className="btn-primary hover:scale-105 transition-transform">Ver sistema na prática</button>
                    </div>
                </div>

                {/* Right Side: 3D Video Placeholder */}
                <div className="event-video relative w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-[#13172b]/80 to-black/80 rounded-3xl border border-white/10 flex flex-col items-center justify-center p-8 overflow-hidden shadow-2xl backdrop-blur-3xl group">
                    {/* Abstract 3D/Tech look placeholder */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group flex items-center justify-center bg-[#13172b]/40 backdrop-blur-sm">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#13172b]/80 to-transparent z-10"></div>

                        {/* Loop Source */}
                        <div className="ref-video-element absolute inset-0 flex items-center justify-center z-0 perspective-1000">
                            <div className="w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] rounded-full border border-white/5 animate-spin-slow flex items-center justify-center mt-10">
                                <div className="w-[80%] h-[80%] rounded-full border border-[#b4cbf1]/20 animate-reverse-spin flex items-center justify-center">
                                    <div className="w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#ffd7a0]/20 to-[#13172b]/60 backdrop-blur-3xl shadow-[0_0_100px_#13172b] flex items-center justify-center animate-pulse">
                                        <div className="text-[#b4cbf1]/50 font-sora text-sm tracking-widest text-center">
                                            [ VÍDEO 3D ]<br />
                                            <span className="text-[10px]">placeholder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Simulated UI lines */}
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#ffd7a0]/10 to-transparent"></div>
                        <div className="absolute left-10 right-10 bottom-10 h-32 border border-white/10 rounded-xl bg-white/5 grid grid-cols-4 gap-2 p-2">
                            <div className="w-full h-full bg-white/5 rounded-lg"></div>
                            <div className="w-full h-full bg-white/10 rounded-lg"></div>
                            <div className="w-full h-full bg-[#b4cbf1]/20 rounded-lg"></div>
                            <div className="w-full h-full bg-[#ffd7a0]/20 rounded-lg"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
