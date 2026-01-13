import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Corrected Order: Newest to Oldest in source, reversed for display
const experiences = [
    {
        period: "Oct 2025 — Present",
        role: "Full Stack AI Engineer & Architect",
        company: "Independent Consultant",
        details: "End-to-end development of AI-powered SaaS platforms and Mobile Apps (Flutter). Specializing in Agentic Workflows, scalable system architecture, and custom RAG solutions."
    },
    {
        period: "2025 — Oct 2025",
        role: "Marketing & AI Business Analyst",
        company: "Cogent Softech",
        details: "Redefining automation. 800% social growth via n8n workflows. Agentic RAG implementation."
    },
    {
        period: "2024 — 2025",
        role: "Business Intelligence Analyst",
        company: "WAFA Telecom",
        details: "Signal in the noise. Real-time Power BI observability for massive telecom datasets. 20% efficiency gain in SSIS."
    },
    {
        period: "2023 — 2024",
        role: "Chief Technology Officer",
        company: "OTI-DAWOD",
        details: "Strategy meets execution. Led digital transformation and full-stack engineering teams across Damascus operations."
    },
    {
        period: "2020 — 2024",
        role: "Database Administrator",
        company: "OTI-DAWOD",
        details: "The architect of reliability. Managing enterprise Oracle/SQL Server clusters with 99.9% uptime."
    },
    {
        period: "2019 — May 2024",
        role: "Business Analyst",
        company: "OTI-DAWOD",
        details: "Enhanced project management efficiency by 35% via Power BI. Reduced operational costs by 20%."
    }
];

// Sort: Oldest to Newest
const sortedExperiences = [...experiences].reverse();

const ExperienceTimeline = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section id="experience" ref={containerRef} className="py-24 md:py-40 bg-[#FAFAFA] relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 relative">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-32"
                >
                    <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-[0.3em]">
                        01 / The Path
                    </span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-gray-200 mt-4 tracking-tight uppercase"
                    >
                        Professional Journey
                    </motion.h2>
                </motion.div>

                {/* MAIN SPINE */}
                <div className="absolute left-6 md:left-1/2 top-40 bottom-40 w-[1px] bg-gray-200 -translate-x-1/2">
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="w-full h-full bg-gray-900"
                    />
                </div>

                {/* ITEMS */}
                <div className="space-y-32">
                    {sortedExperiences.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <TimelineCard
                                key={index}
                                item={item}
                                isEven={isEven}
                            />
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

const TimelineCard = ({ item, isEven }) => {
    return (
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 relative ${isEven ? "md:flex-row-reverse" : ""}`}>

            {/* CONTENT */}
            <motion.div
                initial={{ opacity: 0.2, x: isEven ? 50 : -50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ margin: "-25% 0px -25% 0px", once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex-1 ${isEven ? "md:text-left" : "md:text-right"} pl-12 md:pl-0`}
            >
                <div className="mb-4">
                    <span className="text-sm font-mono font-bold text-gray-500 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">
                        {item.period}
                    </span>
                </div>
                <h3 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-3 italic">
                    {item.role}
                </h3>
                <h4 className="text-sm md:text-base text-gray-400 font-mono font-bold uppercase tracking-widest mb-6">
                    {item.company}
                </h4>
                <p className="text-gray-600 font-medium leading-relaxed text-lg max-w-lg ml-auto mr-auto md:mr-0 md:ml-0">
                    {item.details}
                </p>
            </motion.div>

            {/* NODE */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-gray-900 z-10" />

            {/* SPACER */}
            <div className="flex-1 hidden md:block" />
        </div>
    );
};

export default ExperienceTimeline;
