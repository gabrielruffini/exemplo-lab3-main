'use client';
import { useScroll } from '@/components/ui/use-scroll';
import React from 'react';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        { label: 'Início', href: '#hero' },
        { label: 'Soluções', href: '#sobre' },
        { label: 'Sistemas', href: '#sistemas' },
        { label: 'Planos', href: '#planos' },
    ];

    React.useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'fixed left-0 right-0 z-50 mx-auto w-full max-w-[95%] md:max-w-5xl border border-white/10 transition-all duration-300 ease-out mt-4',
                {
                    'top-2 md:top-6 md:max-w-4xl shadow-lg bg-[#13172b]/80 backdrop-blur-lg rounded-2xl': scrolled && !open,
                    'top-0 bg-[#13172b]/40 backdrop-blur-md rounded-2xl': !scrolled && !open,
                    'top-0 bg-[#13172b]/95 backdrop-blur-xl rounded-2xl': open,
                },
            )}
        >
            {/* Nav bar */}
            <nav
                className={cn(
                    'flex h-20 w-full items-center justify-between px-6 transition-all duration-300 ease-out',
                    { 'h-16 md:px-4': scrolled },
                )}
            >
                <a href="#hero" className="flex items-center">
                    <Image
                        src="/imagens/logo.png"
                        alt="LAB3 Logo"
                        width={100}
                        height={32}
                        className="w-auto h-6 object-contain block"
                    />
                </a>

                {/* Desktop links */}
                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            className={cn(buttonVariants({ variant: 'ghost' }), 'text-white/80 hover:text-white hover:bg-white/10')}
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="ml-2 flex items-center gap-2">
                        <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">
                            Entrar em Contato
                        </Button>
                    </div>
                </div>

                {/* Mobile toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setOpen(!open)}
                        className="text-white hover:bg-white/10"
                        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
                    >
                        <MenuToggleIcon open={open} className="size-5" duration={300} />
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu — expands inline inside the fixed header */}
            {open && (
                <div className="md:hidden border-t border-white/10 px-6 pt-4 pb-8 flex flex-col gap-6">
                    <nav className="flex flex-col">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-base font-medium text-white/80 hover:text-white transition-colors py-4 border-b border-white/5 last:border-0"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <Button
                        onClick={() => setOpen(false)}
                        className="w-full bg-white text-black hover:bg-white/90 rounded-full h-12 text-base font-semibold"
                    >
                        Entrar em Contato
                    </Button>
                </div>
            )}
        </header>
    );
}
