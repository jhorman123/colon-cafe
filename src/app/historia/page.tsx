"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Coffee, Heart, Leaf, MapPin, Quote, ChevronDown } from "lucide-react";

export default function HistoryPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    const milestones = [
        {
            year: "1995",
            title: "El Origen de la Tierra",
            description: "En las faldas de las montañas más fértiles, nuestra familia sembró el primer brote de esperanza. Una conexión pura con la naturaleza que define nuestra esencia.",
            icon: <Leaf className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1613399421011-1e634fa4dacc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            year: "2010",
            title: "La Maestría del Fuego",
            description: "Entendimos que el tueste es un arte alquímico. Construimos nuestro propio taller para dominar el tiempo y la temperatura, liberando el alma de cada grano.",
            icon: <Coffee className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80",
        },
        {
            year: "2024",
            title: "Una Nueva Era: COLON",
            description: "Abrimos nuestras puertas no solo para servir café, sino para crear un santuario donde la tradición se encuentra con la modernidad más sofisticada.",
            icon: <MapPin className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80",
        },
    ];

    return (
        <main ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden selection:bg-amber-500/30">

            {/* Hero Section con Parallax y Efecto de Entrada */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ opacity, scale }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
                        alt="Coffee Hero"
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-amber-500 font-medium tracking-[0.5em] uppercase mb-6 block text-sm"
                    >
                        Nuestra Herencia
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-none"
                    >
                        COLON <span className="text-amber-500 italic font-light">Legacy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                    >
                        Un viaje a través del tiempo, el sabor y la pasión indomable por el grano perfecto.
                        Donde cada sorbo cuenta una historia de tres décadas.
                    </motion.p>
                </div>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-500/50"
                >
                    <ChevronDown className="w-10 h-10" />
                </motion.div>
            </section>

            {/* Historia en Vertical Timeline Inmersivo */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/0 via-amber-500/50 to-amber-500/0 hidden lg:block"></div>

                <div className="space-y-48">
                    {milestones.map((item, index) => (
                        <div key={item.year} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-1/2"
                            >
                                <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                                    <div className="absolute -right-4 -top-4 text-9xl font-black text-white/5 group-hover:text-amber-500/10 transition-colors pointer-events-none">
                                        {item.year}
                                    </div>
                                    <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-8 border border-amber-500/20">
                                        {item.icon}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{item.title}</h2>
                                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="lg:w-1/2 relative h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transform transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10"></div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quote Inmersivo */}
            <section className="py-48 px-4 bg-[#0a0a0a] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/20 blur-[120px] rounded-full"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <Quote className="w-16 h-16 text-amber-500/20 mx-auto mb-12 rotate-180" />
                    <h2 className="text-4xl md:text-6xl font-serif italic text-white/90 leading-tight mb-12">
                        "En COLON, no servimos cafés. Servimos el momento exacto donde la pausa se vuelve <span className="text-amber-500">arte</span>."
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-amber-500/50"></div>
                        <span className="text-amber-500 font-medium tracking-widest uppercase text-sm">Fundador de COLON</span>
                        <div className="h-px w-12 bg-amber-500/50"></div>
                    </div>
                </motion.div>
            </section>

            {/* Compromiso / Grid de Valores */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Nuestra <span className="text-amber-500 underline decoration-amber-500/20 underline-offset-8">Promesa</span></h2>
                        <div className="space-y-6">
                            <div className="flex gap-6 group">
                                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-[#0a0a0a] transition-all">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Comercio Ético</h4>
                                    <p className="text-zinc-400 font-light">Relaciones directas y transparentes con cada agricultor, asegurando una vida digna detrás de cada grano.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 group">
                                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-[#0a0a0a] transition-all">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Sostenibilidad</h4>
                                    <p className="text-zinc-400 font-light">Procesos de bajo impacto ambiental, desde el cultivo hasta nuestro empaquetado 100% compostable.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80"
                            alt="Sustainability"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-amber-500/15 mix-blend-overlay z-10"></div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-32 text-center bg-gradient-to-t from-amber-500/10 to-transparent">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto px-4"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Listo para vivir la historia?</h2>
                    <a
                        href="/menu"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-amber-500 text-[#0a0a0a] font-bold rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.3)] group"
                    >
                        Ir al Menú
                        <ChevronDown className="w-5 h-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </section>

        </main>
    );
}
