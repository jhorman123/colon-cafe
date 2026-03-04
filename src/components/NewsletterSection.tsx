"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
        }
    };

    return (
        <section className="py-32 px-4 relative overflow-hidden bg-[#0a0a0a]">
            {/* Ambient glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-zinc-500/5 blur-[120px] rounded-full"></div>

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 p-12 md:p-20 rounded-[3rem] backdrop-blur-3xl text-center relative z-10 overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

                    <Mail className="w-16 h-16 text-amber-500 mx-auto mb-10 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 hover:rotate-12" />

                    {!subscribed ? (
                        <>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Únete al <span className="text-amber-500 italic">Club COLON</span></h2>
                            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
                                Recibe acceso exclusivo a catas privadas, lanzamientos de ediciones limitadas y descuentos solo para miembros.
                            </p>

                            <form onSubmit={handleSubscribe} className="max-w-md mx-auto relative group/form">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Tu mejor email"
                                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 outline-none focus:border-amber-500/50 transition-all font-light text-white text-lg pr-16"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-2 bottom-2 aspect-square bg-amber-500 text-[#0a0a0a] rounded-full flex items-center justify-center hover:bg-amber-400 transition-all transform hover:scale-110 shadow-lg"
                                >
                                    <Send className="w-6 h-6" />
                                </button>
                            </form>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-10"
                        >
                            <h3 className="text-3xl font-bold text-amber-500 mb-4">¡Bienvenido al Club!</h3>
                            <p className="text-zinc-400">Pronto recibirás noticias aromáticas.</p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
