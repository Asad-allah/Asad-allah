import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const MagneticButton = ({ children, className, onClick, variant = "primary" }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/20",
        secondary: "bg-white text-primary border border-gray-200 hover:bg-gray-50 shadow-sm",
        ghost: "text-gray-600 hover:text-black hover:bg-gray-100/50",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
    };

    return (
        <motion.button
            ref={ref}
            className={cn(
                "relative px-8 py-4 rounded-full font-medium text-sm tracking-wide transition-colors duration-300",
                variants[variant],
                className
            )}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
        </motion.button>
    );
};

export default MagneticButton;
