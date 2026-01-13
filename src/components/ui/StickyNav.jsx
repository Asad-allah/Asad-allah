import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
    { id: "hero", label: "Intro", href: "#" },
    { id: "experience", label: "Timeline", href: "#experience" },
    { id: "education", label: "Academic", href: "#education" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "work", label: "Work", href: "#work" },
    { id: "contact", label: "Contact", href: "#contact" },
];

const StickyNav = () => {
    const [activeSection, setActiveSection] = useState("hero");

    // Scroll progress bar
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Handle Active State on Scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id);
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of sections) {
                if (section === "hero" && window.scrollY < 400) {
                    setActiveSection("hero");
                    break;
                }
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 text-xs font-mono tracking-widest uppercase text-gray-400 mix-blend-difference"
        >
            {/* PROGRESS LINE */}
            <div className="absolute left-[-24px] top-0 bottom-0 w-[2px] bg-gray-200/20">
                <motion.div
                    style={{ scaleY, originY: 0 }}
                    className="w-full h-full bg-yellow-400"
                />
            </div>

            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    className={`nav-link transition-all duration-300 origin-left flex items-center gap-2 ${activeSection === item.id
                        ? "text-yellow-400 font-bold scale-110 translate-x-2"
                        : "hover:text-white hover:translate-x-1"
                        }`}
                >
                    {activeSection === item.id && (
                        <motion.div
                            layoutId="activeDot"
                            className="w-1.5 h-1.5 bg-yellow-400 rounded-full"
                        />
                    )}
                    {item.label}
                </a>
            ))}

            <div className="w-8 h-[1px] bg-gray-500/50 my-2" />

            <a
                href="/Assad_Allah_CV.pdf"
                target="_blank"
                className="font-bold text-white border-b border-white pb-1 hover:text-yellow-400 hover:border-yellow-400 transition-all hover:pb-2"
            >
                CV Download
            </a>
        </motion.div>
    );
};

export default StickyNav;
