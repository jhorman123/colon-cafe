"use client";

import { motion } from "framer-motion";
import { ArrowRight, Coffee } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80"
                    alt="Coffee shop background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-[#121212]/70 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <Coffee className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-medium tracking-widest uppercase text-amber-500">
                            Premium Roast
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
                        El arte del café, <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                            perfeccionado.
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 mb-10 font-light">
                        Descubre nuestra selección exclusiva de granos de especialidad
                        tostados artesanalmente en el corazón de la ciudad. Una experiencia
                        única en cada taza.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Link
                            href="/menu"
                            className="flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-[#121212] font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                        >
                            Ver el menú
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/historia"
                            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-md"
                        >
                            Nuestra historia
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
