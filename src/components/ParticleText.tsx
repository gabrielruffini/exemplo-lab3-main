"use client";

import { useEffect, useRef } from "react";

const ParticleText = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        let particles: { x: number; y: number; baseX: number; baseY: number; size: number; vx: number; vy: number }[] = [];
        let mouse = { x: -9999, y: -9999 };

        const resize = () => {
            const rect = canvas.parentElement!.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = Math.min(rect.width * 0.25, 280); // Taller canvas for bigger text
            createParticles();
        };

        const createParticles = () => {
            particles = [];
            // Increase base factor and max font size for desktop
            const fontSize = Math.min(canvas.width * 0.22, 260);
            ctx.fillStyle = "#f5f5f5";
            ctx.font = `bold ${fontSize}px 'Sora', sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillText("LAB3", canvas.width / 2, canvas.height / 2);

            const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            const gap = 3;
            for (let y = 0; y < canvas.height; y += gap) {
                for (let x = 0; x < canvas.width; x += gap) {
                    const i = (y * canvas.width + x) * 4;
                    if (data[i + 3] > 128) {
                        particles.push({
                            x: x + Math.random() * canvas.width - canvas.width / 2,
                            y: y + Math.random() * canvas.height - canvas.height / 2,
                            baseX: x, baseY: y,
                            size: Math.random() * 1.5 + 0.5,
                            vx: 0, vy: 0,
                        });
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const force = Math.max(80 - dist, 0) / 80;

                if (force > 0) {
                    p.vx -= (dx / dist) * force * 3;
                    p.vy -= (dy / dist) * force * 3;
                }

                p.vx += (p.baseX - p.x) * 0.05;
                p.vy += (p.baseY - p.y) * 0.05;
                p.vx *= 0.85;
                p.vy *= 0.85;
                p.x += p.vx;
                p.y += p.vy;

                ctx.fillStyle = `rgba(245, 245, 245, ${0.6 + Math.random() * 0.4})`;
                ctx.fillRect(p.x, p.y, p.size, p.size);
            });
            animId = requestAnimationFrame(animate);
        };

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const onMouseLeave = () => {
            mouse.x = -9999;
            mouse.y = -9999;
        };

        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mouseleave", onMouseLeave);
        window.addEventListener("resize", resize);
        resize();
        animate();

        return () => {
            cancelAnimationFrame(animId);
            canvas.removeEventListener("mousemove", onMouseMove);
            canvas.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className="relative w-full max-w-[1280px] mx-auto px-6 pb-0">
            <canvas ref={canvasRef} className="w-full cursor-crosshair" style={{ height: 'auto' }} />
        </div>
    );
};

export default ParticleText;
