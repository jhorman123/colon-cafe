"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Instagram, Facebook, Twitter, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulación de envío
        await new Promise(resolve => setTimeout(resolve, 1500));
        setLoading(false);
        setIsSubmitted(true);
    };

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Llamanos",
            detail: "+1 (555) 123-4567",
            sub: "Lunes a Viernes, 8am - 8pm"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            detail: "hola@coloncafe.com",
            sub: "Respondemos en menos de 24h"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visitanos",
            detail: "Calle del Grano 123, Centro",
            sub: "Ciudad Cafetalera, CP 45000"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Horario",
            detail: "8:00 AM - 9:00 PM",
            sub: "Abierto todos los días"
        }
    ];

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20 selection:bg-amber-500/30">

            {/* Hero Section Contacto */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-amber-500 font-medium tracking-[0.5em] uppercase mb-4 block text-sm">Conectemos</span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                        Escribamos una <span className="text-amber-500 italic">Nueva</span> Historia.
                    </h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        ¿Tienes dudas, sugerencias o simplemente quieres saludar? Estamos aquí para escucharte mientras el café se cuela.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Formulario de Contacto Premium */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[60px] rounded-full -mr-16 -mt-16"></div>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400 ml-1">Nombre Completo</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Ej. Juan Pérez"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 transition-all placeholder:text-zinc-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="juan@ejemplo.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 transition-all placeholder:text-zinc-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 ml-1">Asunto</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 transition-all text-zinc-400">
                                    <option className="bg-[#121212]">Consulta General</option>
                                    <option className="bg-[#121212]">Eventos Privados</option>
                                    <option className="bg-[#121212]">Franquicias</option>
                                    <option className="bg-[#121212]">Trabaja con nosotros</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-zinc-400 ml-1">Mensaje</label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="¿En qué podemos ayudarte?"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-amber-500/50 transition-all placeholder:text-zinc-600 resize-none"
                                ></textarea>
                            </div>

                            <button
                                disabled={loading}
                                className="w-full py-5 bg-amber-500 text-[#0a0a0a] font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-amber-400 transition-all transform hover:scale-[1.02] shadow-[0_0_30px_rgba(245,158,11,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                {loading ? "Enviando..." : "Enviar Mensaje"}
                                {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-8 border border-amber-500/20">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">¡Mensaje Recibido!</h2>
                            <p className="text-zinc-400 max-w-xs mx-auto mb-10">
                                Gracias por escribirnos. Un experto de nuestro equipo se pondrá en contacto contigo muy pronto.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-amber-500 font-medium hover:underline"
                            >
                                Enviar otro mensaje
                            </button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Info de contacto y Mapa */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex gap-6 items-start group">
                                <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-amber-500 border border-white/10 group-hover:bg-amber-500 group-hover:text-[#0a0a0a] transition-all duration-300">
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-1">{info.title}</h4>
                                    <p className="text-lg font-bold text-white mb-1">{info.detail}</p>
                                    <p className="text-sm text-zinc-500">{info.sub}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Mapa Interactivo Google Maps */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="h-[400px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.4170942557!2d-70.6482692!3d-33.4726918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1709583120123!5m2!1ses!2scl"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>

                    {/* Redes Sociales */}
                    <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
                        <span className="text-zinc-500 text-sm font-medium uppercase tracking-[0.2em]">Sígenos</span>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-zinc-400 hover:text-amber-500 hover:bg-white/10 transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
