"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/store";

const products = [
    {
        _id: "1",
        name: "Espresso Intenso",
        description: "Tueste oscuro, notas a chocolate amargo y nuez.",
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80",
    },
    {
        _id: "2",
        name: "Latte de Vainilla",
        description: "Suave espresso con leche vaporizada y vainilla real.",
        price: "$5.50",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80",
    },
    {
        _id: "3",
        name: "Cold Brew Reserva",
        description: "Extraído en frío por 24h para máxima suavidad.",
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80",
    },
    {
        _id: "4",
        name: "Flat White Artesanal",
        description: "Perfecto balance entre espresso y leche montada.",
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80",
    },
];

export function FeaturedProducts() {
    const addItem = useCartStore((state) => state.addItem);
    const toggleCart = useCartStore((state) => state.toggleCart);

    const handleAddToCart = (product: any) => {
        addItem(product);
        toggleCart();
    };

    return (
        <section className="py-24 bg-[#121212] relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Nuestros Favoritos
                        </h2>
                        <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            key={product._id}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
                            </div>

                            <div className="p-6 relative">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                                    <span className="text-amber-500 font-bold">{product.price}</span>
                                </div>
                                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                                    {product.description}
                                </p>

                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="w-full py-3 flex items-center justify-center gap-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 hover:bg-amber-500 hover:text-[#121212] rounded-xl font-medium transition-all duration-300"
                                >
                                    <ShoppingCart className="w-4 h-4" />
                                    Agregar
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
