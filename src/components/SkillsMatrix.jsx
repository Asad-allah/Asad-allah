import { motion } from "framer-motion";

const skillCategories = [
    {
        id: "ai",
        title: "Agentic Intelligence",
        subtitle: "01",
        skills: [
            "Context Engineering & Optimization",
            "Model Context Protocol (MCP)",
            "BMAD & Multi-Agent Systems",
            "Long-term Memory & RAG",
            "LangGraph & LangChain",
            "Prompt Engineering",
            "Vector Embeddings",
            "Local LLMs (Ollama)"
        ]
    },
    {
        id: "data",
        title: "Data Architecture",
        subtitle: "02",
        skills: [
            "SQL Server / T-SQL (Expert)",
            "Power BI & DAX",
            "Data Warehousing",
            "ETL Architecture (SSIS)",
            "Vector Databases (Chroma)",
            "Elasticsearch",
            "Oracle Administration"
        ]
    },
    {
        id: "eng",
        title: "Engineering Core",
        subtitle: "03",
        skills: [
            "Vibe Coding (Cursor / Claude)",
            "Claude Code & AI Workflows",
            "Python (Advanced)",
            "Flutter Mobile Dev",
            "React & TypeScript",
            "n8n Automation",
            "Docker / CI/CD"
        ]
    }
];

const SkillsMatrix = () => {
    return (
        <section id="skills" className="py-24 md:py-40 px-6 md:px-12 bg-[#FAFAFA] relative">
            <div className="container max-w-7xl mx-auto">

                {/* MAGAZINE HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-[0.3em] block mb-6">
                        04 / Technical Report
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-200 mt-4 tracking-tight uppercase">
                        The Arsenal
                    </h2>
                </motion.div>

                {/* THE EDITORIAL GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 border-t border-gray-200">
                    {skillCategories.map((cat, i) => (
                        <div key={cat.id} className="relative group md:border-r border-gray-200 last:border-0 pt-12 md:pl-12 md:pr-12 first:pl-0 last:pr-0">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                            >
                                {/* Category Header */}
                                <div className="flex items-baseline justify-between mb-10">
                                    <h3 className="text-2xl font-serif text-gray-900 italic">
                                        {cat.title}
                                    </h3>
                                    <span className="font-mono text-xs text-gray-400">
                                        {cat.subtitle}
                                    </span>
                                </div>

                                <motion.ul
                                    className="space-y-4"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-10%" }}
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.1 } }
                                    }}
                                >
                                    {cat.skills.map((skill, idx) => (
                                        <motion.li
                                            key={idx}
                                            variants={{
                                                hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
                                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } }
                                            }}
                                            className="flex items-center gap-4 group/item"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-gray-900 transition-colors duration-300" />
                                            <span className="text-sm md:text-base font-medium text-gray-500 group-hover/item:text-gray-900 transition-colors duration-300 tracking-wide">
                                                {skill}
                                            </span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Bottom Line */}
                <div className="w-full h-px bg-gray-200 mt-12 block md:hidden" />
            </div>
        </section>
    );
};

export default SkillsMatrix;
