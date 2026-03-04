"use client";

import { motion } from "framer-motion";
import { useCartStore } from "@/lib/store";
import { CreditCard, Truck, CheckCircle2, ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
    const { items, getTotalPrice, clearCart } = useCartStore();
    const [orderComplete, setOrderComplete] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form states
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const shipping = getTotalPrice() > 50 ? 0 : 2.00;
    const total = getTotalPrice() + shipping;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setError(null);

        try {
            const response = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    customerDetails: formData,
                    items: items.map(item => ({
                        productId: item._id, // Updated to use MongoDB _id
                        name: item.name,
                        price: item.price,
                        quantity: item.quantity,
                        image: item.image
                    })),
                    total: total
                })
            });

            if (!response.ok) throw new Error("Error al procesar el pedido");

            setOrderComplete(true);
            clearCart();
        } catch (err) {
            setError("Hubo un problema al procesar tu orden. Por favor intenta de nuevo.");
            console.error(err);
        } finally {
            setIsProcessing(false);
        }
    };

    if (orderComplete) {
        return (
            <main className="min-h-screen bg-[#121212] pt-28 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 border border-white/10 p-12 rounded-3xl text-center max-w-lg w-full mx-4"
                >
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">¡Orden Confirmada!</h1>
                    <p className="text-zinc-400 mb-8">
                        Tu café está siendo preparado con dedicación. Te enviaremos un correo con los detalles del envío.
                    </p>
                    <Link
                        href="/menu"
                        className="inline-block w-full py-4 bg-amber-500 hover:bg-amber-400 text-[#121212] font-bold rounded-full transition-all duration-300"
                    >
                        Volver al Menú
                    </Link>
                </motion.div>
            </main>
        );
    }

    if (items.length === 0 && !orderComplete) {
        return (
            <main className="min-h-screen bg-[#121212] pt-28 flex flex-col items-center justify-center">
                <div className="text-center px-4">
                    <h1 className="text-3xl font-bold text-white mb-4">Tu carrito está vacío</h1>
                    <p className="text-zinc-400 mb-8">Agrega algunos productos deliciosos antes de pagar.</p>
                    <Link
                        href="/menu"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 text-[#121212] font-bold rounded-full hover:bg-amber-400 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Ir al Menú
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#121212] pt-28 pb-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <Link href="/menu" className="text-zinc-400 hover:text-white flex items-center gap-2 mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Volver al menú
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                        Finalizar Pedido
                    </h1>
                    <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500"
                    >
                        <AlertCircle className="w-5 h-5" />
                        <p>{error}</p>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Formulario */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            onSubmit={handleSubmit}
                            className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Truck className="w-6 h-6 text-amber-500" />
                                Datos de Envío
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Nombre Completo</label>
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                        placeholder="Ej: Juan Pérez"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                        placeholder="juan@correo.com"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Dirección Exacta</label>
                                    <input
                                        required
                                        name="address"
                                        type="text"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                                        placeholder="Calle Falsa 123, Edificio Central"
                                    />
                                </div>
                            </div>

                            <div className="h-px w-full bg-white/10 my-8"></div>

                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <CreditCard className="w-6 h-6 text-amber-500" />
                                Detalles de Pago
                            </h2>

                            <div className="space-y-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-2">Número de Tarjeta</label>
                                    <input required type="text" className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="4532 **** **** 1234" />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-400 mb-2">MM/AA</label>
                                        <input required type="text" className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="12/28" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-400 mb-2">CVC</label>
                                        <input required type="text" className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="***" />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full py-4 bg-amber-500 disabled:opacity-70 disabled:cursor-wait hover:bg-amber-400 text-[#121212] font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.01] shadow-[0_0_30px_rgba(245,158,11,0.2)] flex items-center justify-center gap-3"
                            >
                                {isProcessing ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Procesando Pedido...
                                    </>
                                ) : (
                                    <>Confirmar y Pagar ${total.toFixed(2)}</>
                                )}
                            </button>
                        </motion.form>
                    </div>

                    {/* Resumen */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-6 sticky top-32 shadow-xl"
                        >
                            <h2 className="text-xl font-bold text-white mb-6">Resumen del Pedido</h2>

                            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item._id} className="flex gap-4 items-center">
                                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/5">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-white text-sm font-medium">{item.name}</h4>
                                            <p className="text-zinc-400 text-xs">Cantidad: {item.quantity}</p>
                                        </div>
                                        <span className="text-amber-500 font-bold text-sm tracking-tight">{item.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/10 pt-4 space-y-3">
                                <div className="flex justify-between text-zinc-400 text-sm">
                                    <span>Subtotal</span>
                                    <span>${getTotalPrice().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-zinc-400 text-sm">
                                    <span>Envío</span>
                                    <span>{shipping === 0 ? "GRATIS" : `$${shipping.toFixed(2)}`}</span>
                                </div>
                                {shipping > 0 && (
                                    <p className="text-[10px] text-zinc-500 text-right italic">
                                        * Envío gratis en órdenes superiores a $50.00
                                    </p>
                                )}
                                <div className="flex justify-between text-white font-bold text-xl pt-4 border-t border-white/10">
                                    <span>Total</span>
                                    <span className="text-amber-500">${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
