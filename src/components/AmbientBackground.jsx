import { motion } from "framer-motion";

const AmbientBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Orb 1: Silver Mist */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gray-200/40 rounded-full blur-[120px] mix-blend-multiply"
            />

            {/* Orb 2: Subtle Cyan Hint */}
            <motion.div
                animate={{
                    x: [0, -70, 30, 0],
                    y: [0, 80, -40, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
                className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-100/30 rounded-full blur-[100px] mix-blend-multiply"
            />

            {/* Orb 3: Deep Atmosphere */}
            <motion.div
                animate={{
                    x: [0, 60, -60, 0],
                    y: [0, -30, 20, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 5
                }}
                className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-gray-100/50 rounded-full blur-[140px] mix-blend-multiply"
            />
        </div>
    );
};

export default AmbientBackground;
