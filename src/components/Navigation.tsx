"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Coffee, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "@/lib/store";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Zustand Store
    const itemsCount = useCartStore((state) => state.getTotalItems());
    const toggleCart = useCartStore((state) => state.toggleCart);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Menú", href: "/menu" },
        { name: "Nuestra Historia", href: "/historia" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#121212]/80 backdrop-blur-md border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Coffee className="w-8 h-8 text-amber-500 group-hover:text-amber-400 transition-colors" />
                        <span className="text-2xl font-bold tracking-tighter text-white">
                            COLON
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-zinc-300 hover:text-amber-500 transition-colors text-sm font-medium tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleCart}
                            aria-label="Ver carrito"
                            className="relative p-2 text-zinc-300 hover:text-amber-500 transition-colors"
                        >
                            <ShoppingBag className="w-6 h-6" />
                            {itemsCount > 0 && (
                                <span className="absolute top-0 right-0 w-4 h-4 bg-amber-500 text-[#121212] flex items-center justify-center rounded-full text-[10px] font-bold">
                                    {itemsCount}
                                </span>
                            )}
                        </button>
                        <button
                            className="md:hidden p-2 text-zinc-300 hover:text-white"
                            aria-label="Abrir menú"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 z-50 bg-[#121212] p-6 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                COLON
                            </span>
                            <button
                                className="p-2 text-zinc-300 hover:text-white"
                                aria-label="Cerrar menú"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-medium text-zinc-300 hover:text-amber-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
