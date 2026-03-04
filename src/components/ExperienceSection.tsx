"use client";

import { motion } from "framer-motion";
import { Coffee, GlassWater, Trophy, Users } from "lucide-react";

const experiences = [
    {
        title: "Talleres de Barismo",
        description: "Aprende el arte de la extracción perfecta con nuestros maestros baristas.",
        icon: <Trophy className="w-10 h-10" />,
        color: "from-amber-500/20 to-amber-500/5",
    },
    {
        title: "Suscripción Grano",
        description: "Recibe mensualmente una selección exclusiva de granos de origen en tu puerta.",
        icon: <Coffee className="w-10 h-10" />,
        color: "from-zinc-500/20 to-zinc-500/5",
    },
    {
        title: "Eventos Privados",
        description: "Transformamos nuestro espacio para tus momentos más especiales y corporativos.",
        icon: <Users className="w-10 h-10" />,
        color: "from-amber-900/40 to-amber-900/10",
    },
];

export function ExperienceSection() {
    return (
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-amber-500 font-medium tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        Más que Café
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                        Experiencias <span className="text-amber-500 italic">COLON</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${exp.color} border border-white/5 hover:border-white/10 transition-all group`}
                        >
                            <div className="w-20 h-20 bg-[#121212] rounded-3xl flex items-center justify-center text-amber-500 mb-8 border border-white/5 shadow-2xl group-hover:scale-110 transition-transform">
                                {exp.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{exp.title}</h3>
                            <p className="text-zinc-400 font-light leading-relaxed mb-8">
                                {exp.description}
                            </p>
                            <a
                                href="/contacto"
                                className="inline-flex items-center text-amber-500 text-sm font-bold tracking-widest uppercase hover:text-amber-400 transition-colors group/btn"
                            >
                                Más información
                                <div className="ml-2 w-8 h-px bg-amber-500 group-hover/btn:w-12 transition-all"></div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
