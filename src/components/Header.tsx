"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-4 left-4 right-4 z-50">
            <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/5 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-6 py-4 flex items-center justify-between shadow-sm dark:shadow-none">
                <Link href="/" className="flex-shrink-0">
                    {/* Standard logo for both, since it's an image. Might need a light mode specific logo if it has white text */}
                    <Image src="/imagens/logo.png" alt="LAB3 Logo" width={80} height={30} className="w-auto h-8 opacity-90 hover:opacity-100 transition-opacity dark:invert-0" />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 font-sora text-sm text-slate-600 dark:text-[#b4cbf1]">
                    <Link href="#solucoes" className="hover:text-slate-900 dark:hover:text-off-white transition-colors">Soluções</Link>
                    <Link href="#sistemas" className="hover:text-slate-900 dark:hover:text-off-white transition-colors">Sistemas</Link>
                    <Link href="#sobre" className="hover:text-slate-900 dark:hover:text-off-white transition-colors">Por Que Nós</Link>
                    <Link href="#planos" className="hover:text-slate-900 dark:hover:text-off-white transition-colors">Planos</Link>
                </nav>

                {/* Contact Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="#contato" className="btn-primary">
                        Entrar em Contato
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button className="text-slate-800 dark:text-off-white dark:hover:text-[#ffd7a0] transition-colors">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
}
