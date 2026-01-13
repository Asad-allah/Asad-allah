import { useEffect, useRef } from 'react';

const MagneticDotBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let dots = [];
        const mouse = { x: -1000, y: -1000 };
        const DOT_RADIUS = 1.5;
        const GRID_SPACING = 35; // Spacing between dots
        const INFLUENCE_RADIUS = 150; // Distance to react to mouse
        const STIFFNESS = 0.1; // Speed of return
        const DAMPING = 0.85; // Bounciness

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
            initDots();
        };

        const initDots = () => {
            dots = [];
            for (let x = 0; x < canvas.width; x += GRID_SPACING) {
                for (let y = 0; y < canvas.height; y += GRID_SPACING) {
                    dots.push({
                        x: x,
                        y: y,
                        originX: x,
                        originY: y,
                        vx: 0,
                        vy: 0
                    });
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#111827'; // Gray-900 color

            dots.forEach(dot => {
                // Distance from mouse
                const dx = mouse.x - dot.x;
                const dy = mouse.y - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Force Vector
                let forceX = 0;
                let forceY = 0;

                if (distance < INFLUENCE_RADIUS) {
                    const force = (INFLUENCE_RADIUS - distance) / INFLUENCE_RADIUS;
                    const angle = Math.atan2(dy, dx);
                    // Move AWAY from mouse (Repulsion)
                    forceX = -Math.cos(angle) * force * 15;
                    forceY = -Math.sin(angle) * force * 15;
                }

                // Spring back to origin
                const springX = (dot.originX - dot.x) * STIFFNESS;
                const springY = (dot.originY - dot.y) * STIFFNESS;

                // Physics update
                dot.vx += forceX + springX;
                dot.vy += forceY + springY;

                // Friction
                dot.vx *= DAMPING;
                dot.vy *= DAMPING;

                dot.x += dot.vx;
                dot.y += dot.vy;

                // Draw Dot
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleTouchMove = (e) => {
            if (e.touches.length > 0) {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.touches[0].clientX - rect.left;
                mouse.y = e.touches[0].clientY - rect.top;
            }
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchstart', handleTouchMove); // React immediately on touch

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-darken"
        />
    );
};

export default MagneticDotBackground;
