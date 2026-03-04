"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingCart, Loader2 } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { useEffect, useState } from "react";

interface Product {
    _id: string;
    name: string;
    description: string;
    price: string;
    image: string;
    category: string;
}

export default function MenuPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const addItem = useCartStore((state) => state.addItem);
    const toggleCart = useCartStore((state) => state.toggleCart);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading products:", err);
                setLoading(false);
            });
    }, []);

    const categories = Array.from(new Set(products.map((p) => p.category)));

    const handleAddToCart = (product: any) => {
        addItem(product);
        toggleCart();
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-[#121212] pt-28 flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 text-amber-500 animate-spin mb-4" />
                <p className="text-zinc-400">Preparando el menú...</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#121212] pt-28 pb-24">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
                            Nuestro Menú
                        </h1>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                            Explora nuestra cuidada selección de bebidas de especialidad y repostería artesanal.
                        </p>
                    </motion.div>
                </div>

                <div className="space-y-24">
                    {categories.map((category) => (
                        <div key={category}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-10 flex items-center gap-4"
                            >
                                <h2 className="text-3xl font-bold text-amber-500">{category}</h2>
                                <div className="h-px bg-white/10 flex-1"></div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {products
                                    .filter((p) => p.category === category)
                                    .map((product, index) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            key={product._id}
                                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
                                        >
                                            <div className="relative h-64 w-full overflow-hidden shrink-0">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
                                            </div>

                                            <div className="p-6 flex flex-col flex-1">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                                                    <span className="text-amber-500 font-bold ml-4 shrink-0">{product.price}</span>
                                                </div>
                                                <p className="text-zinc-400 text-sm mb-8 flex-1">
                                                    {product.description}
                                                </p>

                                                <button
                                                    onClick={() => handleAddToCart(product)}
                                                    className="w-full py-3 flex items-center justify-center gap-2 bg-amber-500/10 text-amber-500 border border-amber-500/20 hover:bg-amber-500 hover:text-[#121212] rounded-xl font-medium transition-all duration-300"
                                                >
                                                    <ShoppingCart className="w-5 h-5" />
                                                    Agregar a la Orden
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
