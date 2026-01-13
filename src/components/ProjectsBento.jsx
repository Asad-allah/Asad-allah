import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const works = [
    {
        id: "01",
        name: "VocabMaster",
        cat: "AI Platform",
        desc: "Next-gen language learning with RAG & Agentic workflows.",
        link: "https://github.com/assadAllah630/vocab-web",
        placeholderColor: "bg-[#0a0a0a]",
        image: "/images/vocab_showcase.png?v=7"
    },
    {
        id: "02",
        name: "Sheikh Al Jabal Store",
        cat: "E-Commerce",
        desc: "Enterprise Flutter application with Clean Architecture.",
        link: "https://github.com/mahmoodhamdi/TStore",
        placeholderColor: "bg-blue-100",
        image: "/images/tstore_showcase.png"
    },
    {
        id: "03",
        name: "Backup POS",
        cat: "System Utility",
        desc: "Offline-first resilience engineering for retail.",
        link: "https://github.com/assadAllah630/Backup_POS",
        placeholderColor: "bg-orange-100",
        image: "/images/backup_pos_showcase.png"
    }
];

const ProjectsBento = () => {
    return (
        <section id="work" className="py-40 px-6 md:px-12 bg-[#FAFAFA]">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-24 text-center"
                >
                    <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">
                        03 / Impact
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mt-4 tracking-tight uppercase">
                        Selected Works
                    </h2>
                </motion.div>

                <div>
                    {works.map((work) => (
                        <motion.a
                            href={work.link}
                            target="_blank"
                            key={work.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group block mb-32 last:mb-0"
                        >
                            {/* Cinematic Image Area */}
                            <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-sm mb-8 bg-gray-100">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className={`w-full h-full relative ${work.image ? "bg-gray-50" : work.placeholderColor}`}
                                >
                                    {work.image ? (
                                        <img
                                            src={work.image}
                                            alt={work.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className={`w-full h-full ${work.placeholderColor}`}>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <p className="text-gray-400 font-mono text-xs uppercase tracking-widest border border-dashed border-gray-300 p-4 rounded">
                                                    [ INSERT SCREENSHOT HERE ] <br />
                                                    {work.name} Preview
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 border-t border-gray-200 pt-6">
                                <div>
                                    <span className="text-xs font-mono text-gray-400 block mb-2">({work.id})</span>
                                    <h3 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter group-hover:text-black transition-colors">
                                        {work.name}
                                    </h3>
                                </div>

                                <div className="md:text-right md:max-w-xs">
                                    <div className="flex items-center gap-2 justify-end mb-2">
                                        <span className="text-xs font-mono uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                            {work.cat}
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:rotate-45 transition-all" />
                                    </div>
                                    <p className="text-base text-gray-400 font-light leading-relaxed group-hover:text-gray-600 transition-colors">
                                        {work.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.a>
                    ))}

                    <div className="mt-40 text-center">
                        <a href="https://github.com/assadAllah630" target="_blank" className="inline-block text-xl font-medium text-gray-900 border-b-2 border-black pb-1 hover:pb-3 hover:tracking-widest transition-all duration-300">
                            View Full Archive
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsBento;
