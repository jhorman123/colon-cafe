"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";

export function CartDrawer() {
    const { items, isOpen, toggleCart, removeItem, updateQuantity, getTotalPrice } = useCartStore();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 w-full max-w-md z-[70] bg-[#1a1a1a] shadow-2xl flex flex-col border-l border-white/10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#121212]">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-6 h-6 text-amber-500" />
                                <h2 className="text-xl font-bold text-white tracking-wide">Tu Orden</h2>
                            </div>
                            <button
                                onClick={toggleCart}
                                className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-zinc-500">
                                    <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                                    <p className="text-lg">Tu carrito está vacío</p>
                                    <button
                                        onClick={toggleCart}
                                        className="mt-6 text-amber-500 hover:text-amber-400 font-medium"
                                    >
                                        Ver el menú
                                    </button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        key={item._id}
                                        className="flex gap-4 bg-white/5 p-4 rounded-2xl border border-white/5"
                                    >
                                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start">
                                                    <h3 className="text-white font-medium line-clamp-1">{item.name}</h3>
                                                    <span className="text-amber-500 font-bold shrink-0 ml-2">{item.price}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-3 bg-[#121212] rounded-full px-2 py-1 border border-white/5">
                                                    <button
                                                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                                        className="p-1 text-zinc-400 hover:text-white"
                                                    >
                                                        <Minus className="w-3 h-3" />
                                                    </button>
                                                    <span className="text-sm font-medium w-4 text-center text-white">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                                        className="p-1 text-zinc-400 hover:text-white"
                                                    >
                                                        <Plus className="w-3 h-3" />
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => removeItem(item._id)}
                                                    className="p-2 text-red-400/70 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="p-6 bg-[#121212] border-t border-white/5">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-zinc-400">Total a pagar</span>
                                    <span className="text-2xl font-bold text-white">
                                        ${getTotalPrice().toFixed(2)}
                                    </span>
                                </div>

                                <Link
                                    href="/checkout"
                                    onClick={toggleCart}
                                    className="w-full py-4 text-center block bg-amber-500 hover:bg-amber-400 text-[#121212] font-bold rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                                >
                                    Proceder al Pago
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
