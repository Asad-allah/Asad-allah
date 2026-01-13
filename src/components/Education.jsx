import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, ExternalLink, Calendar, X, ZoomIn } from "lucide-react";
import { useState } from "react";

const certifications = [
    {
        title: "IBM RAG & Agentic AI Professional",
        issuer: "IBM",
        date: "2024",
        link: "#",
        icon: "I",
        file: "/documents/certs/IBM_RAG_Agentic_AI.pdf"
    },
    {
        title: "Customer Service with Generative AI",
        issuer: "LinkedIn Learning",
        date: "2024",
        link: "#",
        icon: "L",
        file: "/documents/certs/Generative_AI_Customer_Service.pdf"
    },
    {
        title: "Adobe Content Creator",
        issuer: "Adobe",
        date: "2023",
        link: "#",
        icon: "A",
        file: "/documents/certs/Adobe_Content_Creator.pdf"
    },
    {
        title: "AI Agents in LangGraph",
        issuer: "DeepLearning.AI",
        date: "2024",
        link: "#",
        icon: "D"
    },
    {
        title: "LangChain for LLM Dev",
        issuer: "DeepLearning.AI",
        date: "2023",
        link: "#",
        icon: "D"
    },
    {
        title: "Marketing Analytics",
        issuer: "University of Virginia",
        date: "2022",
        link: "#",
        icon: "U"
    }
];

const Education = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="education" className="py-20 md:py-32 px-6 md:px-12 bg-[#FAFAFA] text-gray-900 overflow-hidden relative">
            <div className="container max-w-6xl mx-auto">
                {/* Header - Matches Experience & Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-200 pb-8"
                >
                    <div>
                        <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-[0.3em] mb-4 block">
                            02 / The Foundation
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mt-4 tracking-tight uppercase">
                            Academic & Professional
                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* LEFT COLUMN: ACADEMIC */}
                    <div className="space-y-16">
                        <h3 className="text-2xl font-serif italic text-gray-400 mb-8 border-b border-gray-100 pb-2 inline-block">
                            Degrees
                        </h3>

                        {/* Master's */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-gray-100 rounded-full text-gray-600 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    <GraduationCap size={24} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <span className="inline-block px-3 py-1 bg-gray-50 text-gray-400 text-xs font-mono rounded-full mb-3">
                                        2022 - 2024
                                    </span>
                                    <h4 className="text-3xl font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                                        Master of Technology (M.Tech)
                                    </h4>
                                    <p className="text-lg text-gray-500 font-medium">
                                        Artificial Intelligence & Data Science
                                    </p>
                                    <p className="text-gray-400 text-sm mt-1 font-mono uppercase tracking-wider">
                                        Lebanese University
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bachelor's */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-gray-100 rounded-full text-gray-600 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                    <GraduationCap size={24} strokeWidth={1.5} />
                                </div>
                                <div className="flex-1">
                                    <span className="inline-block px-3 py-1 bg-gray-50 text-gray-400 text-xs font-mono rounded-full mb-3">
                                        2018 - 2021
                                    </span>
                                    <h4 className="text-3xl font-bold text-gray-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                                        Bachelor of Science (BS)
                                    </h4>
                                    <p className="text-lg text-gray-500 font-medium">
                                        Computer Science
                                    </p>
                                    <p className="text-gray-400 text-sm mt-1 font-mono uppercase tracking-wider">
                                        Lebanese University
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: CERTIFICATIONS */}
                    <div>
                        <h3 className="text-2xl font-serif italic text-gray-400 mb-12 border-b border-gray-100 pb-2 inline-block">
                            Certifications
                        </h3>
                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <CertCard
                                    key={index}
                                    cert={cert}
                                    index={index}
                                    onClick={() => setSelectedCert(cert)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CERTIFICATE MODAL */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>

                            <div className="flex flex-col md:flex-row h-auto md:h-auto min-h-[50vh]">
                                {/* Image Placeholder Area */}
                                <div className="w-full md:w-2/3 bg-gray-200 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                                    <div className="relative z-10 text-center p-12">
                                        <Award size={64} className="mx-auto text-gray-400 mb-4" />

                                        {selectedCert.file ? (
                                            <button
                                                onClick={() => window.open(selectedCert.file, "_blank")}
                                                className="mt-4 px-6 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto"
                                            >
                                                View Document <ExternalLink size={16} />
                                            </button>
                                        ) : (
                                            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest border border-dashed border-gray-400 p-4 rounded">
                                                [ Verification Pending ]<br />
                                                {selectedCert.title}
                                            </p>
                                        )}
                                    </div>
                                    {/* Simulated "Certificate" look */}
                                    <div className="absolute inset-4 border-4 border-double border-gray-400/30 pointer-events-none"></div>
                                </div>

                                {/* Details Panel */}
                                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white border-l border-gray-100">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                                        Issued By
                                    </span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {selectedCert.issuer}
                                    </h3>
                                    <div className="w-12 h-1 bg-gray-100 mb-6"></div>

                                    <h4 className="text-xl font-serif italic text-gray-600 mb-6">
                                        {selectedCert.title}
                                    </h4>

                                    <div className="flex items-center gap-3 text-sm text-gray-500 font-mono uppercase tracking-wider mb-8">
                                        <Calendar size={14} />
                                        {selectedCert.date}
                                    </div>

                                    {selectedCert.link && (
                                        <a
                                            href={selectedCert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors"
                                        >
                                            Verify Credential <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const CertCard = ({ cert, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            onClick={onClick}
            className="group flex items-center gap-6 p-4 -mx-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-gray-100 relative"
        >
            <div className="flex-shrink-0 text-gray-300 group-hover:text-black transition-colors duration-300 relative">
                <Award size={28} strokeWidth={1.5} />
                <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-bold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors leading-tight">
                        {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-gray-400 flex-shrink-0">
                        {cert.date}
                    </span>
                </div>
                <p className="text-sm font-serif italic text-gray-500 group-hover:text-gray-700">
                    {cert.issuer}
                </p>
            </div>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity -mr-2">
                <ZoomIn size={16} className="text-gray-400" />
            </div>
        </motion.div>
    );
};

export default Education;
