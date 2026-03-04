import { NextResponse } from "next/server";
import connectDB from "@/lib/db/mongodb";
import Product from "@/models/Product";

export async function GET() {
    try {
        await connectDB();
        const products = await Product.find({});

        // Seed data if empty
        if (products.length === 0) {
            const seedProducts = [
                {
                    name: "Espresso Intenso",
                    description: "Tueste oscuro, notas a chocolate amargo y nuez.",
                    price: "$4.50",
                    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80",
                    category: "Café de Especialidad",
                    isFeatured: true,
                },
                {
                    name: "Latte de Vainilla",
                    description: "Suave espresso con leche vaporizada y vainilla real.",
                    price: "$5.50",
                    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80",
                    category: "Café de Especialidad",
                    isFeatured: true,
                },
                {
                    name: "Cold Brew Reserva",
                    description: "Extraído en frío por 24h para máxima suavidad.",
                    price: "$6.00",
                    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80",
                    category: "Café de Especialidad",
                    isFeatured: true,
                },
                {
                    name: "Flat White Artesanal",
                    description: "Perfecto balance entre espresso y leche montada.",
                    price: "$5.00",
                    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80",
                    category: "Café de Especialidad",
                    isFeatured: true,
                },
                {
                    name: "Pour Over Geisha",
                    description: "Método filtrado, granos exclusivos de Panamá.",
                    price: "$8.00",
                    image: "https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?auto=format&fit=crop&q=80",
                    category: "Café de Especialidad",
                    isFeatured: false,
                },
                {
                    name: "Mocha Blanco Marino",
                    description: "Chocolate blanco suizo, espresso y pisco de sal marina.",
                    price: "$6.50",
                    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80",
                    category: "Café de Especialidad",
                    isFeatured: false,
                },
                {
                    name: "Croissant de Almendras",
                    description: "Hojaldre francés relleno de crema de almendras tostadas.",
                    price: "$4.50",
                    image: "https://images.unsplash.com/photo-1519869491916-8ca6f615d6bd?auto=format&fit=crop&q=80",
                    category: "Postres y Repostería",
                    isFeatured: false,
                },
                {
                    name: "Tartaleta de Frutos Rojos",
                    description: "Masa sablée, crema pastelera y selección de bayas frescas.",
                    price: "$5.50",
                    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80",
                    category: "Postres y Repostería",
                    isFeatured: false,
                },
                {
                    name: "Cheesecake New York",
                    description: "Receta clásica, horneado lento con base de galleta crocante.",
                    price: "$6.50",
                    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80",
                    category: "Postres y Repostería",
                    isFeatured: false,
                }
            ];
            await Product.insertMany(seedProducts);
            const newProducts = await Product.find({});
            return NextResponse.json(newProducts);
        }

        return NextResponse.json(products);
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
