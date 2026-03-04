"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import Image from "next/image";

const testimonials = [
    {
        name: "Elena R.",
        text: "El Geisha de COLON es, sin duda, el mejor café que he probado en años. La atención al detalle es insuperable.",
        role: "Amante del Café",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    },
    {
        name: "Marcos T.",
        text: "Un refugio para los que buscamos calidad real. El ambiente es tan premium como su Espresso.",
        role: "Crítico Gastronómico",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
    {
        name: "Sofía L.",
        text: "La suscripción mensual ha cambiado mis mañanas. Granos frescos con un tostado perfecto.",
        role: "Cliente Fiel",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-32 bg-[#121212] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                        Lo que dicen de <span className="text-amber-500 underline decoration-amber-500/20 underline-offset-8">Nosotros</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 p-10 rounded-[2rem] relative group hover:bg-white/10 transition-all shadow-xl"
                        >
                            <Quote className="absolute -top-4 -left-4 w-10 h-10 text-amber-500/20 rotate-180" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                                ))}
                            </div>
                            <p className="text-zinc-300 italic mb-8 font-light leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="border-t border-white/10 pt-6 flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-500/20">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-bold text-white">{t.name}</h4>
                                    <p className="text-amber-500/60 text-sm">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
