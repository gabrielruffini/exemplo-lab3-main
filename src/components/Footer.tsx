"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ParticleText from "./ParticleText";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-stars" aria-hidden="true">
                <span className="star" style={{ top: '8%', left: '12%', animationDelay: '0s' }}></span>
                <span className="star" style={{ top: '15%', left: '45%', animationDelay: '1.2s' }}></span>
                <span className="star" style={{ top: '6%', right: '18%', animationDelay: '0.6s' }}></span>
                <span className="star" style={{ top: '22%', right: '35%', animationDelay: '2.1s' }}></span>
                <span className="star" style={{ top: '35%', left: '8%', animationDelay: '1.8s' }}></span>
                <span className="star" style={{ top: '45%', left: '55%', animationDelay: '0.3s' }}></span>
                <span className="star" style={{ top: '12%', left: '70%', animationDelay: '2.5s' }}></span>
                <span className="star" style={{ top: '50%', right: '12%', animationDelay: '1.5s' }}></span>
                <span className="star" style={{ top: '28%', left: '28%', animationDelay: '0.9s' }}></span>
                <span className="star" style={{ top: '40%', right: '25%', animationDelay: '2.8s' }}></span>
                <span className="star star--large" style={{ top: '18%', left: '25%', animationDelay: '0.4s' }}></span>
                <span className="star star--large" style={{ top: '32%', right: '20%', animationDelay: '1.7s' }}></span>
                <span className="star star--large" style={{ top: '10%', left: '60%', animationDelay: '2.3s' }}></span>
                <span className="star star--large" style={{ top: '42%', left: '40%', animationDelay: '3.1s' }}></span>
            </div>

            <div className="footer-content">
                {/* Testimonials carousel */}
                <div className="testimonials" data-reveal>
                    <div className="testimonials__track">
                        {[1, 2, 3].map((_, i) => (
                            <React.Fragment key={i}>
                                <div className="testimonial-card" style={{ '--hover-color': '#b4cbf1' } as React.CSSProperties}>
                                    <p className="testimonial-card__text">O site que a LAB3 criou para minha empresa superou todas as expectativas! Rápido, moderno e com uma navegação incrível. Já percebo os resultados nas vendas!</p>
                                    <div className="testimonial-card__author">
                                        <div className="testimonial-card__info">
                                            <strong>Gui Marinho</strong>
                                            <span>314</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card" style={{ '--hover-color': '#ffd7a0' } as React.CSSProperties}>
                                    <p className="testimonial-card__text">A entrega foi impecável. Além de um sistema incrível, o projeto foi entregue com uma qualidade ímpar antes do prazo. Recomendo de olhos fechados!</p>
                                    <div className="testimonial-card__author">
                                        <div className="testimonial-card__info">
                                            <strong>Higor Barreto</strong>
                                            <span>Future Pro</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card" style={{ '--hover-color': '#b4cbf1' } as React.CSSProperties}>
                                    <p className="testimonial-card__text">Nossa plataforma de gestão de eventos mudou de patamar com a LAB3. O novo portal facilitou todo o processo do nosso time e centralizou os dados.</p>
                                    <div className="testimonial-card__author">
                                        <div className="testimonial-card__info">
                                            <strong>João Pedro</strong>
                                            <span>Tech Events</span>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <div className="footer-card">
                    <div className="footer-card-left">
                        <span className="footer-logo">
                            <Image src="/imagens/logo.png" alt="LAB3 Logo" width={120} height={40} className="w-auto h-8 opacity-90" />
                        </span>
                        <p className="footer-slogan">Automatize sem limites</p>
                        <div className="footer-socials">
                            <a href="#" target="_blank" rel="noreferrer" aria-label="Twitter" className="footer-social-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube" className="footer-social-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-card-links">
                        <div className="footer-col">
                            <h4>Plataforma</h4>
                            <a href="#hero">Início</a>
                            <a href="#sobre">Soluções</a>
                            <a href="#eventos">Eventos</a>
                        </div>
                        <div className="footer-col">
                            <h4>Empresa</h4>
                            <a href="#vantagens">Diferenciais</a>
                            <a href="#processo">Processo</a>
                            <a href="#faq">FAQ</a>
                        </div>
                        <div className="footer-col">
                            <h4>Contato</h4>
                            <a href="#cta-final">Fale Conosco</a>
                            <a href="#">Apoio Legal</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-links">
                        <a href="#">Imprint</a>
                        <span className="separator">|</span>
                        <a href="#">Security</a>
                        <span className="separator">|</span>
                        <a href="#">Privacy</a>
                        <span className="separator">|</span>
                        <a href="#">Report a vulnerability</a>
                    </div>
                    <div className="footer-copyright">&copy; {new Date().getFullYear()} LAB3 | All rights reserved.</div>
                </div>
            </div>

            <div className="relative z-10 w-full pt-4 mt-4">
                <ParticleText />
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        /* ============================================================
           LAB3 STYLE FOOTER (Adapted from N8N)
           ============================================================ */
        .site-footer {
            position: relative;
            z-index: 10;
            width: 100%;
            overflow: hidden;
            padding: 120px 0 60px;
            /* Smooth fade from transparent to deep dark matching LAB3 theme */
            background: linear-gradient(180deg,
                    transparent 0%,
                    #0a0c16 40%,
                    #05050a 100%);
            --container-max: 1024px;
            --text-primary: #fff;
            --text-secondary: rgba(255, 255, 255, 0.6);
            --glass-blur: 24px;
            --radius-lg: 24px;
            --shadow-card: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .footer-stars {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 0;
        }

        .star {
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            animation: starTwinkle 3s ease-in-out infinite;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }

        .star--large {
            width: 6px;
            height: 6px;
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
        }

        .star--large::before,
        .star--large::after {
            content: '';
            position: absolute;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 2px;
        }

        .star--large::before {
            width: 1px;
            height: 18px;
            left: 2.5px;
            top: -6px;
        }

        .star--large::after {
            width: 18px;
            height: 1px;
            left: -6px;
            top: 2.5px;
        }

        @keyframes starTwinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.3); }
        }

        .footer-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 2;
        }

        /* ═══════════════════════════════════════════
           TESTIMONIALS CAROUSEL
           ═══════════════════════════════════════════ */
        .testimonials {
            position: relative;
            z-index: 2;
            width: 100%;
            overflow: hidden;
            padding: 0 0 120px;
        }

        .testimonials__track {
            display: flex;
            gap: 24px;
            width: fit-content;
            animation: scrollTestimonials 45s linear infinite;
        }

        .testimonials:hover .testimonials__track {
            animation-play-state: paused;
        }

        .testimonial-card {
            flex: 0 0 480px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 20px;
            padding: 32px;
            color: #fff;
            position: relative;
            overflow: hidden;
            cursor: default;
            transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .testimonial-card:hover {
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateY(-4px);
        }

        /* Glow radial colorido no hover */
        .testimonial-card::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at center, var(--hover-color), transparent);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: 0;
            pointer-events: none;
        }

        .testimonial-card:hover::after {
            opacity: 0.12;
        }

        .testimonial-card__text {
            font-size: 1rem;
            line-height: 1.65;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 24px;
            position: relative;
            z-index: 1;
        }

        .testimonial-card__author {
            display: flex;
            align-items: center;
            gap: 12px;
            position: relative;
            z-index: 1;
        }

        .testimonial-card__info {
            display: flex;
            flex-direction: column;
        }

        .testimonial-card__info strong {
            font-size: 0.95rem;
            font-weight: 600;
            color: #fff;
        }

        .testimonial-card__info span {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.5);
        }

        @keyframes scrollTestimonials {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        .footer-card {
            width: 100%;
            max-width: var(--container-max);
            margin: 0 auto;
            /* Blue/Dark tinted glassmorphism instead of orange */
            background: rgba(19, 23, 43, 0.6);
            backdrop-filter: blur(var(--glass-blur));
            -webkit-backdrop-filter: blur(var(--glass-blur));
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: var(--radius-lg);
            padding: 48px;
            display: flex;
            justify-content: space-between;
            gap: 60px;
            box-shadow: var(--shadow-card);
        }

        .footer-card-left {
            display: flex;
            flex-direction: column;
            gap: 16px;
            max-width: 320px;
        }

        .footer-logo {
            font-family: 'Clash Display', 'Inter', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.2;
            display: flex;
            align-items: center;
        }

        .footer-slogan {
            font-size: 0.9rem;
            color: var(--text-primary);
            line-height: 1.6;
        }

        .footer-socials {
            display: flex;
            gap: 12px;
            margin-top: 8px;
        }

        .footer-social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: transparent;
            color: var(--text-secondary);
            transition: color 0.25s ease, transform 0.25s ease;
        }

        .footer-social-link:hover {
            color: #fff;
            transform: translateY(-2px);
        }

        .footer-card-links {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            flex: 1;
        }

        .footer-col {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .footer-col h4 {
            font-family: 'Inter', sans-serif;
            font-size: 0.95rem;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .footer-col a {
            font-size: 0.85rem;
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-col a:hover {
            color: #fff;
        }

        .footer-bottom {
            max-width: var(--container-max);
            margin: 0 auto;
            width: 100%;
            padding: 32px 24px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .footer-bottom-links {
            display: flex;
            align-items: center;
            gap: 16px;
            font-size: 0.85rem;
            color: var(--text-secondary);
        }

        .footer-bottom-links a {
            transition: color 0.2s ease;
        }

        .footer-bottom-links a:hover {
            color: #fff;
        }

        .footer-bottom-links .separator {
            opacity: 0.3;
        }

        .footer-copyright {
            font-size: 0.85rem;
            color: var(--text-secondary);
        }

        @media (max-width: 992px) {
            .footer-card {
                flex-direction: column;
                padding: 40px 24px;
                gap: 40px;
            }

            .footer-card-links {
                grid-template-columns: 1fr 1fr;
                gap: 32px;
            }
        }

        @media (max-width: 768px) {
            .testimonials__track {
                animation-duration: 55s;
                gap: 16px;
            }

            .testimonial-card {
                flex: 0 0 320px;
                padding: 24px;
            }

            .footer-card-left {
                max-width: 100%;
            }

            .footer-bottom {
                flex-direction: column;
                text-align: center;
                justify-content: center;
            }

            .footer-bottom-links {
                flex-wrap: wrap;
                justify-content: center;
            }
        }
      ` }} />
        </footer>
    );
}
