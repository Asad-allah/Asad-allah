import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring physics for the "Light" (follows slightly behind)
    const springConfig = { damping: 25, stiffness: 150 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div className="hidden md:block">
            {/* The "Light" / Glow - Lager and smoother */}
            <motion.div
                className="fixed top-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none z-40 mix-blend-screen"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            />

            {/* The Actual Cursor - Small Circle */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-black rounded-full border border-white/50 pointer-events-none z-50"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            />
        </div>
    );
};

export default CustomCursor;
