"use client";

import Link from "next/link";
import { Coffee, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Coffee className="w-8 h-8 text-amber-500" />
                            <span className="text-2xl font-bold tracking-tighter text-white">COLON</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light">
                            Elevando la cultura del café desde 1995. Granos de especialidad, tueste artesanal y una experiencia sensorial inigualable.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-zinc-500 hover:text-amber-500 hover:bg-white/10 transition-all border border-white/5">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-tight uppercase text-xs tracking-[0.2em]">Explorar</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Inicio", href: "/" },
                                { name: "Nuestro Menú", href: "/menu" },
                                { name: "Historia", href: "/historia" },
                                { name: "Contacto", href: "/contacto" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-zinc-500 hover:text-amber-500 transition-colors text-sm font-light">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-tight uppercase text-xs tracking-[0.2em]">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                                <MapPin className="w-4 h-4 text-amber-500" />
                                Calle del Grano 123, Centro
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                                <Phone className="w-4 h-4 text-amber-500" />
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-500 font-light">
                                <Mail className="w-4 h-4 text-amber-500" />
                                hola@coloncafe.com
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-tight uppercase text-xs tracking-[0.2em]">Horarios</h4>
                        <ul className="space-y-4">
                            <li className="flex justify-between text-sm text-zinc-500 font-light">
                                <span>Lunes - Viernes</span>
                                <span className="text-zinc-400">8:00 - 21:00</span>
                            </li>
                            <li className="flex justify-between text-sm text-zinc-500 font-light">
                                <span>Sábados</span>
                                <span className="text-zinc-400">9:00 - 22:00</span>
                            </li>
                            <li className="flex justify-between text-sm text-zinc-500 font-light">
                                <span>Domingos</span>
                                <span className="text-zinc-400">9:00 - 20:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-xs font-light">
                        &copy; {new Date().getFullYear()} COLON Café. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8">
                        <li className="list-none"><Link href="#" className="text-zinc-600 hover:text-zinc-400 text-xs font-light transition-colors">Privacidad</Link></li>
                        <li className="list-none"><Link href="#" className="text-zinc-600 hover:text-zinc-400 text-xs font-light transition-colors">Términos</Link></li>
                    </div>
                </div>
            </div>
        </footer>
    );
}
