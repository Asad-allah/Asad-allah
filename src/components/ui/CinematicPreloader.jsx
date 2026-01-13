import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["INITIALIZING", "LOADING_CONTEXT", "CONNECTING_AGENTS", "SYSTEM_ONLINE"];

const CinematicPreloader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === words.length) {
            setTimeout(onComplete, 500);
            return;
        }

        const timeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, 400); // Speed of word switching

        return () => clearTimeout(timeout);
    }, [index, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="text-center">
                <AnimatePresence mode="wait">
                    {index < words.length && (
                        <motion.h1
                            key={words[index]}
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            className="text-4xl md:text-6xl font-black text-white font-mono tracking-tighter"
                        >
                            {words[index]}
                        </motion.h1>
                    )}
                </AnimatePresence>

                <div className="mt-8 h-1 w-48 bg-gray-800 mx-auto overflow-hidden rounded-full">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.6, ease: "linear" }}
                        className="h-full bg-yellow-400"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default CinematicPreloader;
